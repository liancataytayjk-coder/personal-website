// Renders the content from content.js into the page.
// You normally only need to edit content.js.
(function () {
  "use strict";

  var S = window.SITE || {};
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  // Create an element with optional class and text (text is never parsed as HTML).
  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function hideSection(id) {
    var s = document.getElementById(id);
    if (s) s.hidden = true;
  }

  function initials(name) {
    return (name || "")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(function (w) { return w[0].toUpperCase(); })
      .join("");
  }

  // ── Simple text bindings ──────────────────────────────────
  $$("[data-bind]").forEach(function (node) {
    var v = S[node.getAttribute("data-bind")];
    if (v) node.textContent = v;
  });
  if (S.name) document.title = S.name + (S.role ? " · " + S.role : "");
  $("#year").textContent = new Date().getFullYear();

  // ── Hero ──────────────────────────────────────────────────
  var resume = $("#resume-btn");
  if (S.resumeUrl) resume.href = S.resumeUrl;
  else resume.remove();

  var photo = $("#photo");
  if (S.photo) {
    var img = el("img");
    img.src = S.photo;
    img.alt = S.name || "Profile photo";
    photo.appendChild(img);
    photo.removeAttribute("aria-hidden");
  } else {
    photo.appendChild(el("span", "initials", initials(S.name)));
  }

  var social = $("#social");
  (S.social || []).forEach(function (s) {
    var li = el("li");
    var a = el("a", null, s.label);
    a.href = s.url;
    a.target = "_blank";
    a.rel = "noopener";
    li.appendChild(a);
    social.appendChild(li);
  });

  // ── About & Now ───────────────────────────────────────────
  var about = $("#about-text");
  (S.about || []).forEach(function (p) { about.appendChild(el("p", null, p)); });

  var values = $("#values");
  (S.values || []).forEach(function (v) {
    var card = el("div", "value");
    card.appendChild(el("h3", null, v.title));
    card.appendChild(el("p", null, v.text));
    values.appendChild(card);
  });

  if (S.now && S.now.length) {
    var now = $("#now");
    S.now.forEach(function (item) { now.appendChild(el("li", null, item)); });
  } else {
    $("#now-wrap").hidden = true;
  }

  // ── Goals ─────────────────────────────────────────────────
  if (S.goals && S.goals.length) {
    var goals = $("#goals");
    S.goals.forEach(function (g) {
      var pct = Math.max(0, Math.min(100, Number(g.progress) || 0));
      var card = el("article", "card goal");
      var top = el("div", "goal-top");
      top.appendChild(el("span", "tag", g.area));
      top.appendChild(el("span", "muted small", g.target));
      card.appendChild(top);
      card.appendChild(el("h3", null, g.title));

      var bar = el("div", "bar");
      bar.setAttribute("role", "progressbar");
      bar.setAttribute("aria-valuemin", "0");
      bar.setAttribute("aria-valuemax", "100");
      bar.setAttribute("aria-valuenow", String(pct));
      bar.setAttribute("aria-label", g.title + " progress");
      var fill = el("span");
      fill.style.width = pct + "%";
      bar.appendChild(fill);
      card.appendChild(bar);

      var meta = el("div", "goal-meta");
      meta.appendChild(el("span", "muted small", g.note || ""));
      meta.appendChild(el("strong", "pct", pct + "%"));
      card.appendChild(meta);
      goals.appendChild(card);
    });
  } else {
    hideSection("growth");
  }

  // ── Experience ────────────────────────────────────────────
  var timeline = $("#timeline");
  (S.experience || []).forEach(function (x) {
    var li = el("li");
    li.appendChild(el("span", "period", x.period));
    li.appendChild(el("h3", null, x.title));
    li.appendChild(el("p", "org", x.org));
    if (x.points && x.points.length) {
      var ul = el("ul");
      x.points.forEach(function (p) { ul.appendChild(el("li", null, p)); });
      li.appendChild(ul);
    }
    timeline.appendChild(li);
  });

  // ── Skills ────────────────────────────────────────────────
  var skills = $("#skills");
  (S.skills || []).forEach(function (grp) {
    var block = el("div", "skill-group");
    block.appendChild(el("h3", null, grp.group));
    var wrap = el("div", "skill-list");
    (grp.items || []).forEach(function (s) {
      var pill = el("span", "skill");
      var dot = el("i", "lvl lvl-" + String(s.level || "").replace(/\s+/g, ""));
      pill.appendChild(dot);
      pill.appendChild(document.createTextNode(s.name));
      pill.title = s.level || "";
      wrap.appendChild(pill);
    });
    block.appendChild(wrap);
    skills.appendChild(block);
  });

  // ── Projects ──────────────────────────────────────────────
  if (S.projects && S.projects.length) {
    var grid = $("#projects-grid");
    S.projects.forEach(function (p) {
      var card = el(p.link ? "a" : "article", "card project");
      if (p.link) {
        card.href = p.link;
        card.target = "_blank";
        card.rel = "noopener";
      }
      card.appendChild(el("h3", null, p.title + (p.link ? " ↗" : "")));
      card.appendChild(el("p", null, p.summary));
      var tags = el("div", "tags");
      (p.tags || []).forEach(function (t) { tags.appendChild(el("span", "tag", t)); });
      card.appendChild(tags);
      grid.appendChild(card);
    });
  } else {
    hideSection("projects");
  }

  // ── Learning log ──────────────────────────────────────────
  var log = $("#log-list");
  (S.log || []).forEach(function (entry) {
    var item = el("article", "log-item");
    item.appendChild(el("time", "period", entry.date));
    var body = el("div");
    body.appendChild(el("h3", null, entry.title));
    body.appendChild(el("p", null, entry.text));
    item.appendChild(body);
    log.appendChild(item);
  });

  // ── Reading list ──────────────────────────────────────────
  var books = $("#books");
  function renderBooks(filter) {
    books.textContent = "";
    (S.reading || [])
      .filter(function (b) { return filter === "All" || b.status === filter; })
      .forEach(function (b) {
        var li = el("li", "book");
        var text = el("div");
        text.appendChild(el("strong", null, b.title));
        text.appendChild(el("span", "muted small", b.author));
        li.appendChild(text);
        li.appendChild(el("span", "status status-" + b.status.replace(/\s+/g, ""), b.status));
        books.appendChild(li);
      });
    if (!books.children.length) books.appendChild(el("li", "muted small", "Nothing here yet."));
  }
  renderBooks("All");
  $$(".filters .chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      $$(".filters .chip").forEach(function (c) { c.classList.remove("active"); });
      chip.classList.add("active");
      renderBooks(chip.dataset.filter);
    });
  });

  // ── Contact ───────────────────────────────────────────────
  var emailBtn = $("#email-btn");
  if (S.email) emailBtn.href = "mailto:" + S.email;
  else emailBtn.remove();

  // ── Theme toggle ──────────────────────────────────────────
  var root = document.documentElement;
  $(".theme-toggle").addEventListener("click", function () {
    var current = root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // ── Mobile menu ───────────────────────────────────────────
  var toggle = $(".menu-toggle");
  var links = $("#nav-links");
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  $$("#nav-links a").forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // ── Reveal on scroll (progress bars grow in via CSS) ──────
  var revealables = $$(".section .container > *, .goal, .project, .log-item");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealables.forEach(function (n) { n.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealables.forEach(function (n) { io.observe(n); });
  }

  // ── Highlight the current section in the nav ──────────────
  var navLinks = $$("#nav-links a[href^='#']");
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle("current", a.getAttribute("href") === "#" + e.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(function (s) { spy.observe(s); });
  }
})();
