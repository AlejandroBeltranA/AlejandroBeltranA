# beltranalejandro.com

Personal site for Alejandro Beltran. Plain static HTML + JavaScript — no build
step, no server. Hosted on GitHub Pages at https://www.beltranalejandro.com.

## What's in here

| File / folder        | What it is                                                        |
| -------------------- | ----------------------------------------------------------------- |
| `index.html`         | The page shell + all styling. Rarely needs editing.               |
| `cv-data.js`         | **All your content** — bio, projects, publications, links.        |
| `site.jsx`           | The layout/components. Touch only for design changes.             |
| `assets/`            | Headshot (`ab3.png`) and the featured figure.                     |
| `papers/`            | Standalone project pages (Paying the Piper, LTE, IDB maps).       |
| `CNAME`              | Holds the custom domain. **Do not delete.**                       |
| `.nojekyll`          | Tells GitHub Pages to serve files as-is.                          |

The page compiles its JSX in the browser (React + Babel from a CDN), so it runs
straight from these files with nothing to build.

---

## How to deploy (first time)

You're moving this repo from the old Hugo build to this static site. One-time setup:

1. **Back up the old Hugo site first** (so it isn't lost):
   ```
   git checkout -b hugo-archive
   git push -u origin hugo-archive
   git checkout main
   ```
2. **Remove the Hugo machinery** from `main`: delete `content/`, `layouts/`,
   `themes/`, `archetypes/`, `resources/`, `public/`, `hugo.yaml`, and
   `.github/workflows/` (the Hugo build action).
3. **Copy everything from this folder into the repo root** — including `CNAME`
   and `.nojekyll`.
4. On GitHub: **Settings → Pages → Build and deployment → Source** →
   choose **"Deploy from a branch"**, branch **`main`**, folder **`/ (root)`**.
5. Commit and push:
   ```
   git add -A
   git commit -m "Switch to static site"
   git push
   ```
6. Wait ~1 minute, then visit https://www.beltranalejandro.com.

> Your domain stays put because the `CNAME` file is unchanged. If Pages shows a
> certificate warning right after switching, give it a few minutes to re-issue.

---

## How to edit later

**Adding a publication, project, or editing your bio** → open `cv-data.js`. The
header comment at the top explains the structure (`projects` array, `publications`
array, `bio` field, etc.). Edit the text, save.

Then publish:
```
git add -A
git commit -m "Update content"
git push
```
The site redeploys automatically in about a minute. **No build step.**

Design/layout changes live in `site.jsx` and the `<style>` block of `index.html`.
