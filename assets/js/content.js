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

  // ── Projects ──────────────────────────────────────────────
  projects: [
    {
      title: "Project name",
      summary: "One or two sentences: the problem, what you built, and why it matters.",
      tags: ["Tag", "Another tag"],
      link: "",
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
