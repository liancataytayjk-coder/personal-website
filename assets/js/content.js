/*
 * ─────────────────────────────────────────────────────────────
 *  YOUR CONTENT LIVES HERE
 *  Edit this file to update the website. You don't need to touch
 *  the HTML or CSS. Save, refresh the page, and the changes appear.
 *
 *  Tips:
 *   - Keep the quotes and commas. Each item in a list ends with a comma.
 *   - To hide a section, set its array to [] (an empty list).
 *   - Dates are plain text, so write them however you like.
 *   - Each section has its own animal. To swap one, change the
 *     data-mascot="..." attribute on its tile in index.html.
 * ─────────────────────────────────────────────────────────────
 */

window.SITE = {
  // ── Basics ────────────────────────────────────────────────
  name: "Lian Cataytay",
  role: "Your role or the role you're growing into",
  location: "City, Country",
  tagline:
    "I'm building a career with intention: learning in public, shipping meaningful work, and getting a little better every week.",
  email: "liancataytayjk@gmail.com",
  // The big title at the top of the home page.
  masthead: "Writing, Work & Growth",
  // The short note under the title, with a tiny animal beside it.
  notice: {
    bold: "Hello there",
    text: "you've found my corner of the internet. Start with my latest post, or look around.",
    linkText: "Read the latest post »",
    link: "#/writing",
  },
  // Put a resume PDF at assets/resume.pdf, or set this to "" to hide the button.
  resumeUrl: "",
  // Put a photo at assets/img/profile.jpg, or leave "" to show your initials.
  photo: "",

  social: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/your-handle" },
    { label: "GitHub", url: "https://github.com/liancataytayjk-coder" },
  ],

  // ── About ─────────────────────────────────────────────────
  about: [
    "Write two or three short paragraphs about who you are. What do you do, what do you care about, and what kind of problems do you like solving?",
    "Then say where you're headed. A site built for professional growth works best when it's honest about the direction you're going, not only where you've been.",
  ],

  values: [
    { title: "Curiosity", text: "I ask why until I understand how." },
    { title: "Craft", text: "I care about the details people notice and the ones they don't." },
    { title: "Generosity", text: "I share what I learn so others can go further, faster." },
  ],

  // ── Now ───────────────────────────────────────────────────
  // What you're focused on this season. Update it every month or two.
  nowUpdated: "October 2026",
  now: [
    "Deepening my skills in ______",
    "Reading ______",
    "Working on a side project about ______",
    "Practicing ______ every week",
  ],

  // ── Growth goals ──────────────────────────────────────────
  // progress runs from 0 to 100.
  goals: [
    {
      title: "Earn a professional certification",
      area: "Career",
      target: "Q1 2027",
      progress: 35,
      note: "Studying three evenings a week.",
    },
    {
      title: "Ship three portfolio projects",
      area: "Skills",
      target: "Dec 2026",
      progress: 33,
      note: "One done, one in progress.",
    },
    {
      title: "Read 12 books on my craft",
      area: "Learning",
      target: "Dec 2026",
      progress: 58,
      note: "7 of 12 so far.",
    },
    {
      title: "Grow my professional network",
      area: "Community",
      target: "Ongoing",
      progress: 20,
      note: "One meaningful conversation a week.",
    },
  ],

  // ── Experience & education ────────────────────────────────
  experience: [
    {
      title: "Job title",
      org: "Company or organization",
      period: "2025 – Present",
      points: [
        "Something you did and the result it had (use numbers if you can).",
        "A responsibility you owned end to end.",
      ],
    },
    {
      title: "Previous role",
      org: "Company or organization",
      period: "2023 – 2025",
      points: ["A highlight from this role.", "Something you learned here that still shapes you."],
    },
    {
      title: "Degree or program",
      org: "School or institution",
      period: "2019 – 2023",
      points: ["Honors, focus area, or a project you're proud of."],
    },
  ],

  // ── Skills ────────────────────────────────────────────────
  // level: "Learning", "Practicing" or "Confident"
  skills: [
    {
      group: "Core",
      items: [
        { name: "Skill one", level: "Confident" },
        { name: "Skill two", level: "Confident" },
        { name: "Skill three", level: "Practicing" },
      ],
    },
    {
      group: "Tools",
      items: [
        { name: "Tool one", level: "Confident" },
        { name: "Tool two", level: "Practicing" },
        { name: "Tool three", level: "Learning" },
      ],
    },
    {
      group: "People",
      items: [
        { name: "Communication", level: "Confident" },
        { name: "Mentoring", level: "Practicing" },
        { name: "Public speaking", level: "Learning" },
      ],
    },
  ],

  // ── Writing (your blog) ──────────────────────────────────
  // Newest first. The first post is featured on the home page.
  //
  // To add a post, copy one of the { ... } blocks below, paste it at the top
  // of the list, and change the text. Give each post a unique `slug`: it
  // becomes the web address, e.g. yoursite.com/#/writing/my-first-post
  //
  // In `body`, each item in the list is one paragraph. A few shortcuts:
  //   "## A heading"            → a section heading
  //   "> A quote"               → a pull quote
  //   "- A point"               → a bullet point
  //   "![Description](assets/img/photo.jpg)" → an image
  //   **bold**, *italic*, and [link text](https://example.com) work inside paragraphs.
  //
  // Optional: `mascot` and `color` pick the animal and tile color for the post.
  //   mascots: fox, crow, turtle, giraffe, penguin, snail, bear, pigeon
  //   colors:  lavender, pink, green, yellow, blue, mint, peach
  posts: [
    {
      slug: "hello-world",
      title: "Hello, world: why I started this site",
      date: "October 14, 2026",
      summary: "A short note on why I'm writing in public, and what you can expect to find here.",
      tags: ["Meta"],
      mascot: "crow",
      color: "pink",
      body: [
        "This is your first blog post. Replace this text with your own words. A good first post explains **why** the site exists and **who** it's for.",
        "## What I'll write about",
        "- What I'm learning, and the mistakes I make along the way",
        "- Write-ups of projects, with the thinking behind them",
        "- Notes on books, ideas, and people who inspire me",
        "> Writing is thinking. To write well is to think clearly.",
        "Keep posts short at first. A few honest paragraphs, published, beat a perfect essay sitting in your drafts.",
      ],
    },
    {
      slug: "what-i-learned-this-month",
      title: "Three things I learned this month",
      date: "September 30, 2026",
      summary: "A monthly round-up is an easy habit to keep. Here's the format I'm trying.",
      tags: ["Learning"],
      mascot: "snail",
      color: "mint",
      body: [
        "A round-up post is the easiest kind to write: list a few things you learned, and one sentence on why each one mattered.",
        "## 1. Something technical",
        "Describe it in plain language, as if to a friend.",
        "## 2. Something about working with people",
        "What happened, and what will you do differently next time?",
        "## 3. Something surprising",
        "The things that surprise you are often the most interesting to read about.",
      ],
    },
    {
      slug: "books-that-changed-how-i-work",
      title: "Books that changed how I work",
      date: "August 18, 2026",
      summary: "Not a list of the best books ever, just the ones that actually changed my habits.",
      tags: ["Reading"],
      mascot: "bear",
      color: "peach",
      body: [
        "Pick two or three books and, for each, write down one idea you actually started using.",
        "That's much more useful to a reader than a summary of the whole book.",
      ],
    },
  ],

  // ── Projects (your portfolio) ─────────────────────────────
  // The first project is featured on the home page.
  // `link` sends people to another site (a demo, GitHub, a case study).
  // Or give a project a `slug` and a `body` (written like a blog post) to
  // give it its own page on this site.
  projects: [
    {
      title: "Project name",
      summary: "One or two sentences: the problem, what you built, and why it matters.",
      tags: ["Tag", "Another tag"],
      link: "",
      slug: "project-name",
      body: [
        "## The problem",
        "What was going on, and why did it matter?",
        "## What I did",
        "Walk through your approach. Show your thinking as well as the result.",
        "## The result",
        "What changed? Use numbers if you can, and say what you'd do differently next time.",
      ],
    },
    {
      title: "Another project",
      summary: "Show the thinking as well as the result. What did you try, and what did you learn?",
      tags: ["Tag"],
      link: "",
    },
    {
      title: "Work in progress",
      summary: "It's fine to show unfinished work. It tells people what you're growing toward.",
      tags: ["In progress"],
      link: "",
    },
  ],

  // ── Learning log ──────────────────────────────────────────
  // Short notes on what you learned, newest first. Small, frequent entries
  // add up and become a record of your growth over time.
  log: [
    {
      date: "Oct 2026",
      title: "Launched this website",
      text: "Set up a home for my work and goals. Next step: write my first real project write-up.",
    },
    {
      date: "Sep 2026",
      title: "Finished a course on ______",
      text: "The biggest takeaway was ______. I'm applying it by ______.",
    },
    {
      date: "Aug 2026",
      title: "Gave feedback I was nervous about",
      text: "It went better than expected. Being direct and kind at the same time is a skill I want to keep practicing.",
    },
  ],

  // ── Reading list ──────────────────────────────────────────
  // status: "Reading", "Finished" or "Up next"
  reading: [
    { title: "Atomic Habits", author: "James Clear", status: "Finished" },
    { title: "Deep Work", author: "Cal Newport", status: "Reading" },
    { title: "So Good They Can't Ignore You", author: "Cal Newport", status: "Up next" },
    { title: "Mindset", author: "Carol S. Dweck", status: "Finished" },
  ],

  // ── Contact ───────────────────────────────────────────────
  contactText:
    "I'm always happy to talk about new opportunities, collaborations, or simply compare notes on what we're learning.",
};
