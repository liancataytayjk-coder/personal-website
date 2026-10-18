---
name: daily-project
description: Plan, build, document and publish one small, finished portfolio project per day, then add it to this personal website and keep a streak. Use whenever the user asks for today's project, a daily build, "what should I build today", to keep their portfolio streak going, to add a project to their portfolio, to plan or review their week of projects, or types /daily-project, even if they don't name this skill.
---

# Daily portfolio project

One small, **finished** project a day beats one big unfinished one a month. This skill turns that into a routine: pick a scoped idea, build it inside a fixed timebox, write it up, publish it on the site, and record the streak.

Rules that hold every day:

- **Finished over impressive.** Every project ships working, with a README, the same day. Cut scope, never quality.
- **Timeboxed.** Fit the user's daily budget from `projects/PLAN.md` (default 60–90 minutes of their time). If an idea won't fit, shrink it until it does and put the rest in "Next steps".
- **Real.** Real problems, real public data, sources cited. No invented results, numbers, users or dates.
- **Varied but connected.** Follow the weekly rhythm so skills rotate, and come back to earlier projects so the portfolio shows depth, not just volume.
- **The user's work.** Build it *with* the user: explain decisions, leave them a "What I learned" section in their own voice, and ask them to fill in anything only they can say.

## Files this skill keeps

All daily work lives under `projects/` in this repo:

| Path | What it holds |
| --- | --- |
| `projects/PLAN.md` | Profile (field, target role, skills to grow, tools, time budget), the weekly rhythm, the idea backlog, and "Up next" |
| `projects/README.md` | The archive: streak, one row per project, weekly reviews. GitHub renders it when someone browses the folder |
| `projects/YYYY-MM-DD-slug/` | One folder per project: `README.md`, the code or notebook, small data files or a script that downloads them, and `index.html` if it is a web demo |

Templates for all three are in [`references/templates.md`](references/templates.md).

## Step 0: First run only (no `projects/PLAN.md` yet)

Ask the user, in one short message (use AskUserQuestion if available):

1. Their field and the role they're growing into (for example data analyst, economist, front-end developer).
2. Two to four skills they want the portfolio to prove.
3. Languages and tools they use or want to learn.
4. Minutes per day they can give it.
5. Topics or data they care about (a country, an industry, a hobby). Personal interest makes projects better.

Then create `projects/PLAN.md` from the template with **at least 21 ideas** (three weeks) across the rhythm's tracks, tailored to their answers, and create `projects/README.md` with the streak at 0. If `role` in `assets/js/content.js` is still the placeholder, offer to fill it in from their answers. Then continue to Step 1 for today's project, unless the user only asked to set up.

## Step 1: Orient

Read, in this order:

- `projects/PLAN.md`: profile, rhythm, backlog, "Up next".
- `projects/README.md`: the streak and the last few rows.
- The READMEs of the last three projects, to avoid repeats and find threads to extend.
- Today's date and weekday (`date`). Use the user's local date if they've said where they are.

Work out the streak: count consecutive calendar days, ending today or yesterday, that have a project folder. If today already has a project, say so and ask whether they want to extend it or start a second one (a second one doesn't add to the streak).

## Step 2: Pick today's project

Start from the weekday's track in the rhythm (default below; the user's `PLAN.md` overrides it):

| Day | Track | Ships |
| --- | --- | --- |
| Mon | **Build** | A small tool, app or script that solves a real problem |
| Tue | **Data** | One public dataset, one clear question, one chart, one finding |
| Wed | **Recreate** | A from-scratch version of something admired: a chart, a paper's table, a UI, an algorithm |
| Thu | **Explain** | A tutorial, notebook or explainer that teaches one concept with a working example |
| Fri | **Extend** | An improvement to an earlier project: a feature, tests, a deploy, polish |
| Sat | **Explore** | A first project with a tool or technique from the "want to learn" list |
| Sun | **Review** | The weekly review (see below), plus a 20-minute micro-project |

Choose from "Up next" first, then the backlog, then a new idea. Apply these checks:

- **Fits the timebox.** Write a one-line "Done means…" that can be met in the budget.
- **Proves a target skill** from the profile.
- **No rut.** Not the same tool *and* topic as either of the last two days.
- **Depth.** About one project in five should build directly on an earlier one (Fridays cover this by default).

Present **one pick and two alternates**, each as: title, track, one-line pitch, "Done means…", skills it proves. If the user said "just go" or "surprise me", take the pick and continue.

## Step 3: Build

1. Create `projects/YYYY-MM-DD-slug/` (short kebab-case slug, today's date).
2. Build the smallest version that meets "Done means…" first, then polish only while time remains.
3. Keep it runnable from a fresh clone: list dependencies (`requirements.txt`, a `<script>` tag from a CDN, and so on) and give the exact run command in the README.
4. Data: prefer official or well-known public sources. Commit small files (under about 5 MB); for larger ones, commit a download script. Always cite the source and the date it was retrieved.
5. Never commit secrets, API keys or personal data.
6. Web demos: make `index.html` work as a static page, so GitHub Pages serves it at `projects/<folder>/`.

## Step 4: Verify

Run it. Execute the script, notebook or tests, or open the page (Playwright and Chromium are available in cloud sessions) and check it renders without console errors. Fix what fails. If something can't be verified, say so in the README and to the user. Never claim it works without running it.

## Step 5: Write it up

Fill in the project `README.md` from the template: the problem, what was built, how to run it, the result (a chart, screenshot or output, with real numbers only), what was learned, and next steps. Draft "What I learned" from the session, then ask the user to edit it in their own words, since that is the part employers read most closely.

## Step 6: Publish to the site

Edit `assets/js/content.js`. Keep the existing style: same quotes, trailing commas, comment banners.

- **Learning log:** add an entry at the **top** of `log`:
  `{ date: "Oct 18, 2026", title: "Day N: <project title>", text: "<one or two sentences: what I built and the one thing I learned>" },`
  Keep the 10 newest entries on the site. Older ones live on in the archive.
- **Projects grid:** add a card only for a standout project: a strong Friday "Extend" result, the week's pick from the Sunday review, or when the user asks. Replace the placeholder cards first, and keep the grid to at most 6 cards. Use `link` for the live demo (`projects/<folder>/`) when there is an `index.html`, otherwise the GitHub folder:
  `https://github.com/liancataytayjk-coder/personal-website/tree/main/projects/<folder>`
- **Goals:** if a goal counts portfolio projects (for example "Ship three portfolio projects"), update its `progress` and `note` honestly. Offer to raise a target that has been met; don't change it unasked.

Then update `projects/README.md`: add the row at the top of the table and update the streak line.

Preview check: `python3 -m http.server 8000` from the repo root, load the page, and confirm the new log entry renders with no console errors.

## Step 7: Commit and push

- One commit per day: `daily: <project title> (day N)`.
- Push to the branch this session was told to use. If no branch was given, ask once whether to push to `main` (which publishes the site) or to a branch.
- Don't open a pull request unless the user asks.

## Step 8: Wrap up

Tell the user, in a few lines: what shipped and where, the streak, and **tomorrow's pick** (also written to "Up next" in `PLAN.md`, so tomorrow starts fast). Move the used idea out of the backlog. When the backlog has fewer than 7 ideas left, add new ones, weighted toward threads that worked well.

## Weekly review (Sundays, or when asked)

Add a short section to `projects/README.md` under "Weekly reviews":

- What shipped this week (links).
- The best project of the week, and why. Offer to feature it in the projects grid.
- Which target skills got practice and which got none. Steer next week's "Up next" toward the gaps.
- One thing to change about the routine (timebox, rhythm, topics). Update `PLAN.md` if the user agrees.

## Missed days and low-energy days

- **Never backdate.** A project's folder date is the day it was actually built. If a day is missed, the streak resets. Say so plainly and kindly, and start again.
- **Minimum viable day:** on a busy day, offer a 15–20 minute micro-project (one function with a test, one chart, one small explainer). It keeps the habit alive and counts toward the streak.
- If the user keeps missing days, suggest a smaller timebox or a 5-day rhythm in `PLAN.md` rather than pushing harder. Consistency is the goal.
