/**
 * hiking.bbmw0.com failover edge worker
 * ------------------------------------------------------------------
 * One hostname resolves to one target, so "Vercel and GitHub Pages both
 * answering hiking.bbmw0.com" is not something DNS can express. What DNS can
 * do is point the hostname at something that then chooses. This is that
 * something.
 *
 * Normal request:      visitor -> worker -> Vercel        (primary)
 * Primary unhealthy:   visitor -> worker -> GitHub Pages  (mirror)
 *
 * The mirror is a GitHub *project* site, so it is served from a subdirectory
 * (/Hiking-East-Asia/) while the primary is served from the root. A plain
 * proxy would therefore return HTML whose every link is wrong. The worker
 * rewrites the path on the way out and the links on the way back, so a
 * visitor cannot tell which host answered.
 */

export interface Env {
  PRIMARY_ORIGIN: string;   // https://hiking-east-asia.vercel.app
  MIRROR_ORIGIN: string;    // https://bbmw96.github.io
  MIRROR_BASE: string;      // /Hiking-East-Asia
  /** Milliseconds before the primary is considered unhealthy. */
  PRIMARY_TIMEOUT_MS?: string;
}

/** A response the visitor should never see: retry on the mirror instead. */
export function isUnhealthy(res: Response): boolean {
  // 5xx is the origin failing. 502/503/504 in particular are what a platform
  // outage looks like from the edge. 4xx is NOT unhealthy: a genuine 404 is a
  // correct answer and must not send every missing page to the mirror.
  return res.status >= 500;
}

/** Maps a request path onto the mirror's subdirectory layout. */
export function toMirrorPath(pathname: string, base: string): string {
  const clean = base.replace(/\/$/, '');
  if (!clean) return pathname;
  return pathname === '/' ? `${clean}/` : `${clean}${pathname}`;
}

/** Strips the mirror's subdirectory back off a URL found in mirrored HTML. */
export function fromMirrorUrl(value: string, base: string): string {
  const clean = base.replace(/\/$/, '');
  if (!clean || !value) return value;
  if (value.startsWith(`${clean}/`)) return value.slice(clean.length);
  if (value === clean) return '/';
  return value;
}

/** Rewrites root-relative URLs in the mirror's HTML back to the root layout. */
class PathRewriter {
  /* Written longhand rather than as TypeScript parameter properties: Node's
     type stripping runs the tests against this file directly, and it cannot
     erase parameter properties. */
  private readonly base: string;
  private readonly attr: string;
  constructor(base: string, attr: string) {
    this.base = base;
    this.attr = attr;
  }
  element(el: RewriterElement) {
    const v = el.getAttribute(this.attr);
    if (v && v.startsWith('/')) el.setAttribute(this.attr, fromMirrorUrl(v, this.base));
  }
}

async function fetchWithTimeout(request: Request, url: string, ms: number): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    return await fetch(new Request(url, request), { signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const timeout = Number(env.PRIMARY_TIMEOUT_MS ?? '4000');

    // --- primary -------------------------------------------------------
    let primaryError: string | null = null;
    try {
      const res = await fetchWithTimeout(request, env.PRIMARY_ORIGIN + url.pathname + url.search, timeout);
      if (!isUnhealthy(res)) {
        const out = new Response(res.body, res);
        out.headers.set('X-Served-By', 'primary');
        return out;
      }
      primaryError = `status ${res.status}`;
    } catch (err) {
      // A thrown fetch is the outage case: DNS failure, connection refused,
      // or the abort above firing.
      primaryError = err instanceof Error ? err.name : 'fetch failed';
    }

    // --- mirror --------------------------------------------------------
    const mirrorUrl =
      env.MIRROR_ORIGIN + toMirrorPath(url.pathname, env.MIRROR_BASE) + url.search;
    const mirrored = await fetch(new Request(mirrorUrl, request));

    const out = new Response(mirrored.body, mirrored);
    out.headers.set('X-Served-By', 'mirror');
    out.headers.set('X-Primary-Error', primaryError ?? 'unknown');
    // Never let a failover response be cached as though it were normal: the
    // primary coming back must not be masked by a stale mirror copy.
    out.headers.set('Cache-Control', 'no-store, max-age=0');

    const type = mirrored.headers.get('content-type') ?? '';
    if (!type.includes('text/html')) return out;

    return new HTMLRewriter()
      .on('a[href]', new PathRewriter(env.MIRROR_BASE, 'href'))
      .on('link[href]', new PathRewriter(env.MIRROR_BASE, 'href'))
      .on('script[src]', new PathRewriter(env.MIRROR_BASE, 'src'))
      .on('img[src]', new PathRewriter(env.MIRROR_BASE, 'src'))
      .on('form[action]', new PathRewriter(env.MIRROR_BASE, 'action'))
      .transform(out);
  },
};
