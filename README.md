# Personal Website

A personal website with a blog and portfolio: who you are, what you're making, and a running record of how you're growing.

It's plain HTML, CSS and JavaScript. There's nothing to install and no build step, and it's free to host on GitHub Pages.

## Sections

The design takes its cue from magazine puzzle pages: each section is a "department" with a pastel tile, an original animated animal in black ink, and a list beside it.

| Section | Animal | What it's for |
| --- | --- | --- |
| **Masthead** | Fox (in the note) | Big title, role, one-line mission, links |
| **About** | Fox, waving | Your story, your values, and what you're focused on **now** |
| **Writing** | Crow, writing | Your blog. Each post gets its own page |
| **Projects** | Turtle, carrying a stack | Your portfolio. Projects can link out or have their own write-up page |
| **Growth goals** | Giraffe, stretching | Goals with progress bars you update as you go |
| **Experience** | Penguin, with a briefcase | A career timeline, plus skills tagged *Learning*, *Practicing* or *Confident* |
| **Learning log** | Snail, inching along | Short, dated notes on what you learned |
| **Reading** | Bear, turning pages | Books, filterable by *Reading*, *Finished* or *Up next* |
| **Contact** | Pigeon, carrying a letter | A friendly call to action with your email |

The animals blink, move on a loop, speed up when you hover over them, and pause when they're off screen. They hold still for people who've turned on "reduce motion" in their system settings. The site also has light and dark themes, a mobile menu, and a print layout.

## Editing your content

**All your content is in one file: [`assets/js/content.js`](assets/js/content.js).** Open it, replace the placeholder text, and save. You don't need to touch the HTML or CSS.

- **Photo:** add `assets/img/profile.jpg` and set `photo: "assets/img/profile.jpg"`. It replaces the fox in the About tile.
- **Resume:** add `assets/resume.pdf` and set `resumeUrl: "assets/resume.pdf"`. The links only appear once you set this.
- **Hide a section:** set its list to `[]`, for example `projects: []`.
- **Goals:** `progress` is a number from 0 to 100.

### Writing a blog post

Copy one of the post blocks in `posts`, paste it at the **top** of the list (newest first), and change the text. Give it a unique `slug`; the post will live at `#/writing/your-slug`. In `body`, each item is a paragraph, and a few shortcuts work:

| Write this | To get |
| --- | --- |
| `"## A heading"` | A section heading |
| `"> A quote"` | A big pull quote |
| `"- A point"` | A bullet point |
| `"![Description](assets/img/photo.jpg)"` | An image with a caption |
| `**bold**`, `*italic*`, `[text](https://...)` | Bold, italic, and links inside a paragraph |

Each post can also pick its own animal and tile color with `mascot` and `color`.

### Adding a project

Add a block to `projects`. Use `link` to send people to another site (a demo or GitHub), or add a `slug` and a `body` (written like a blog post) to give the project its own case-study page at `#/projects/your-slug`.

### Changing the animals

The animals live in [`assets/js/mascots.js`](assets/js/mascots.js): `fox`, `crow`, `turtle`, `giraffe`, `penguin`, `snail`, `bear` and `pigeon`. To swap the animal for a section, change `data-mascot="..."` on its tile in `index.html`. To change a tile's color, change its `tile-...` class (`lavender`, `pink`, `green`, `yellow`, `blue`, `mint`, `peach`). The colors and animations are in `assets/css/style.css`.

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
- **Every week or two:** write a short blog post.
- **Monthly:** update **Now**, goal progress, and your reading list.
- **Quarterly:** review your goals, retire finished ones, set new ones, and add a project write-up.
- **Yearly:** refresh the About section and your experience.
