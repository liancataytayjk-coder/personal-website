# Personal Website

A personal website for professional growth: who you are, where you're headed, and a running record of how you're getting there.

It's plain HTML, CSS and JavaScript. There's nothing to install and no build step, and it's free to host on GitHub Pages.

## Sections

| Section | What it's for |
| --- | --- |
| **Hero** | Name, role, one-line mission, links, resume |
| **About + Now** | Your story, your values, and what you're focused on this season |
| **Growth goals** | Goals with progress bars you update as you go |
| **Experience + Skills** | A career timeline, plus skills tagged *Learning*, *Practicing* or *Confident* |
| **Projects** | Work you're proud of, finished or in progress |
| **Learning log** | Short, dated notes on what you learned |
| **Reading** | Books, filterable by *Reading*, *Finished* or *Up next* |
| **Contact** | A friendly call to action with your email |

It also has light and dark themes, a mobile menu, and a print layout, so you can print the page as a quick one-page summary.

## Editing your content

**All your content is in one file: [`assets/js/content.js`](assets/js/content.js).** Open it, replace the placeholder text, and save. You don't need to touch the HTML or CSS.

- **Photo:** add `assets/img/profile.jpg` and set `photo: "assets/img/profile.jpg"`. With no photo, the page shows your initials.
- **Resume:** add `assets/resume.pdf` and set `resumeUrl: "assets/resume.pdf"`. The download button only appears once you set this.
- **Hide a section:** set its list to `[]`, for example `projects: []`.
- **Goals:** `progress` is a number from 0 to 100.

## Previewing locally

Open `index.html` in a browser, or run a tiny local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publishing with GitHub Pages (free)

1. Merge this code into your `main` branch.
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`, and save.
4. After a minute or so, the site is live at `https://<your-username>.github.io/personal-website/`.

## A simple growth routine

The site is most useful when you keep it current. A light rhythm:

- **Weekly (5 min):** add a learning log entry.
- **Monthly:** update **Now**, goal progress, and your reading list.
- **Quarterly:** review your goals, retire finished ones, set new ones, and add a project write-up.
- **Yearly:** refresh the About section and your experience.
