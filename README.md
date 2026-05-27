# Olympic Medals

A daily browser puzzle game inspired by NYT Games (Wordle, Connections, etc.).

Each day you're given an Olympic event — like "Men's 100m Sprint" or "Women's Figure Skating" — and must identify the **top 3 countries by all-time medal count** before racking up 5 strikes. Guess by typing a country name or its 3-letter Olympic code into the search box. A correct guess reveals that country's rank and medal total; a wrong guess costs you a strike.

- 120 puzzles spanning Summer and Winter Olympics events
- One puzzle per day, same for all players (resets at midnight)
- Results saved locally in your browser — no account needed
- Works entirely offline after the first page load

## Stack

Vanilla HTML, CSS, and JavaScript. No frameworks, no build tools, no backend. Deploy anywhere that serves static files.

## Playing locally

```bash
git clone <repo-url>
cd trivia-game
python3 -m http.server 8080
# Open http://localhost:8080
```

A local server is needed because the game loads data files via `<script>` tags, which browsers block when opening `index.html` directly from disk.

## Deploying to GitHub Pages

1. Push the repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch**, branch `main`, folder `/ (root)`
4. GitHub Pages will serve the site at `https://<username>.github.io/<repo-name>`

## Background

I built this as an experiment in **multi-agent development with Claude Code** — specifically, using parallel agents to build independent parts of an app simultaneously. Three agents ran at the same time: one researched Olympic medal data and compiled all 120 puzzles, one wrote the game logic and localStorage layer, and one built the HTML/CSS UI. A fourth integration agent then read all three outputs and wired them together. The whole prototype came together in a single session.
