/* The two Cloudflare runtime globals this worker touches. Declared here rather
   than depending on @cloudflare/workers-types, which would add a package to
   the tree for two type shapes. */
interface RewriterElement {
  getAttribute(name: string): string | null;
  setAttribute(name: string, value: string): void;
}

declare class HTMLRewriter {
  on(selector: string, handler: { element(el: RewriterElement): void }): HTMLRewriter;
  transform(response: Response): Response;
}
