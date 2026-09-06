# Repository policy: forking, copying and ownership

Written down because the honest answer differs from the intuitive one, and it
is better recorded than rediscovered.

## What cannot be done

**Forking cannot be switched off on a public repository.** GitHub's forking
policy setting applies to private and internal repositories. On a public
repository the Fork button is part of the platform, and GitHub's Terms of
Service (section D.5, "License Grant to Other Users") grant every user the
right to view and fork any public repository. Publishing publicly *is* granting
that right; it is not a setting layered on top of it.

**No file in this repository can prevent it.** A LICENSE, a CODEOWNERS, a
NOTICE, a workflow, a policy document: none of them gate the Fork button. Any
claim otherwise is wrong. Do not spend time looking for the file that does it.

**Cloning cannot be prevented either.** `git clone` on a public URL needs no
permission, and every visitor's browser already downloads the whole built site.
This is a static site: the HTML, CSS and JavaScript are served to anyone who
opens `hiking.bbmw0.com`. Making the repository private would hide the source
history and the data files, but not the site itself.

## What is actually in place

| Control | What it stops | Where |
|---|---|---|
| Proprietary licence, all rights reserved | Republishing, hosting a copy, selling, or building a derivative work. This is the enforceable one. | `LICENSE` |
| Fork guard on the Pages workflow | A fork running the deploy pipeline under its own account, publishing a copy of the site and spending its owner's Actions minutes. | `.github/workflows/deploy-pages.yml` |
| Photo credits are per-file | A fork inheriting any claim over photographs, which stay with their photographers under their own licences. | `LICENSE`, `src/data/photo-credits.json` |
| Secrets live in Vercel and GitHub Actions, never in the tree | A fork inheriting anything that would let it deploy to this project. | Repository settings |

## The trade-off, stated plainly

The two goals conflict:

- **Public** gives free GitHub Pages, which is the second host that keeps the
  site up when Vercel has an outage. It also makes the repository forkable.
- **Private** removes forking, but GitHub Pages on a private repository needs a
  paid plan, so the redundancy is lost unless the plan is upgraded.

Public was chosen. The reasoning: the site's HTML is public by nature, so the
repository adds little exposure, while the redundancy is a real benefit. The
asset worth protecting is the *researched content*, and that is protected by
copyright and the licence, which apply to a fork exactly as they apply to
anyone else.

## If someone does fork it

`forks_count` on the repository is the number to watch. A fork that merely
sits on GitHub is within GitHub's ToS. A fork that is **published, hosted,
redistributed or sold** is outside this licence, and that is what a takedown
request under the DMCA is for: <https://github.com/contact/dmca>.
