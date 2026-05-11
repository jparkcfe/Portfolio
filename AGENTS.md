# Repository Guidelines

## Project Structure & Module Organization

- `index.html` contains the main single-page portfolio markup.
- `assets/css/style.css` holds site styles; `assets/js/script.js` handles navigation, filtering, modals, and project data.
- `assets/images/` stores thumbnails, modal images, icons, and logos. Use patterns such as `project-{name}.png`, `modal-{name}.png`, and `tool-{name}.svg`.
- `assets/docs/` contains downloadable portfolio documents.
- `assets/webgame/` contains the standalone slide puzzle HTML game.
- `Design/` contains design references and JSX/CSS design-system artifacts.
- `generate_portfolio_ppt.py` generates the portfolio PowerPoint files in the repo root.
- `vercel.json` defines deployment security headers.

## Build, Test, and Development Commands

There is no package-managed build step for the website.

- `python -m http.server 8000` serves the repository locally at `http://localhost:8000`.
- `npx serve .` is an alternative static server if Node tooling is available.
- `python generate_portfolio_ppt.py` regenerates the PPTX portfolio; it requires `python-pptx`, `lxml`, and optionally `Pillow`.

Before publishing, open `index.html` through a local server and verify navigation, filters, modal links, downloads, and the webgame.

## Coding Style & Naming Conventions

Use plain HTML, CSS, and vanilla JavaScript. Keep indentation consistent with nearby code. Prefer descriptive class names and data attributes. Project cards should use `data-project="{key}"`, matching the same key in `projectData` inside `assets/js/script.js`.

For Python, follow PEP 8 where practical and keep constants near the top. Avoid changing generated binary outputs unless the generator was intentionally run.

## Testing Guidelines

No automated test suite is currently configured. Use manual smoke tests:

- Load the site from a local static server.
- Check desktop and mobile viewport behavior.
- Open each portfolio modal and external/download link.
- Confirm `assets/webgame/slide-puzzle-game.html` still runs independently.
- If editing `generate_portfolio_ppt.py`, run it and inspect the generated PPTX.

## Commit & Pull Request Guidelines

Recent commits use short, imperative summaries, for example `Refine portfolio project copy`. Keep commits focused on one visible change or maintenance task.

Pull requests should include a concise description, affected pages/assets, manual verification notes, and screenshots for visual changes. Link related issues when available. Do not include unrelated binary document changes unless they are part of the requested update.

## Security & Configuration Tips

Keep Vercel security headers in `vercel.json` unless there is a clear deployment reason to change them. Treat files in `assets/docs/` as public downloads and avoid committing private source documents or credentials.
