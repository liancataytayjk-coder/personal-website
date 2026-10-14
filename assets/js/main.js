// Renders the content from content.js into the page, and shows blog posts and
// project pages at addresses like #/writing/my-post. You normally only need to
// edit content.js.
(function () {
  "use strict";

  var S = window.SITE || {};
  var MASCOTS = window.MASCOTS || {};
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Create an element with optional class and text (text is never parsed as HTML).
  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function link(href, cls, text) {
    var a = el("a", cls, text);
    a.href = href;
    if (/^https?:/.test(href)) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    return a;
  }

  function hideSection(id) {
    var s = document.getElementById(id);
    if (s) s.hidden = true;
  }

  // ── Mascots ───────────────────────────────────────────────
  // Draws the animal named in data-mascot. A random delay keeps the animals
  // from all blinking in unison.
  function drawMascot(node, name) {
    var art = MASCOTS[name] || MASCOTS.fox;
    if (!art) return;
    node.innerHTML = art;
    node.style.setProperty("--delay", -(Math.random() * 4).toFixed(2) + "s");
    watchMotion(node);
  }

  // A colored tile with an animal on it, optionally a link.
  function tile(mascot, color, href, label) {
    var t = el(href ? "a" : "div", "tile tile-" + (color || "lavender"));
    if (href) {
      t.href = href;
      t.setAttribute("aria-label", label || "");
    }
    drawMascot(t, mascot);
    return t;
  }

  // Pause animations that are off screen.
  var motionObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { e.target.classList.toggle("paused", !e.isIntersecting); });
      })
    : null;
  function watchMotion(node) {
    if (motionObserver) motionObserver.observe(node);
  }

  // ── A tiny Markdown-style formatter for post bodies ───────
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function safeUrl(url) {
    return /^\s*(javascript|data|vbscript):/i.test(url) ? "#" : url;
  }

  function inline(text) {
    return escapeHtml(text)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (_, label, url) {
        var ext = /^https?:/i.test(url) ? ' target="_blank" rel="noopener"' : "";
        return '<a href="' + safeUrl(url) + '"' + ext + ">" + label + "</a>";
      });
  }

  function renderBody(lines) {
    var frag = document.createDocumentFragment();
    var list = null;
    (lines || []).forEach(function (line) {
      line = String(line);
      var img = line.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/);
      if (/^- /.test(line)) {
        if (!list) list = frag.appendChild(el("ul"));
        list.appendChild(el("li")).innerHTML = inline(line.slice(2));
        return;
      }
      list = null;
      if (/^## /.test(line)) frag.appendChild(el("h2", null, line.slice(3)));
      else if (/^> /.test(line)) frag.appendChild(el("blockquote")).innerHTML = inline(line.slice(2));
      else if (img) {
        var fig = el("figure");
        var im = el("img");
        im.src = safeUrl(img[2]);
        im.alt = img[1];
        im.loading = "lazy";
        fig.appendChild(im);
        if (img[1]) fig.appendChild(el("figcaption", null, img[1]));
        frag.appendChild(fig);
      } else frag.appendChild(el("p")).innerHTML = inline(line);
    });
    return frag;
  }

  // ── Data helpers ──────────────────────────────────────────
  var posts = S.posts || [];
  var projects = S.projects || [];

  function postHref(p) { return "#/writing/" + encodeURIComponent(p.slug); }
  function projectHref(p) {
    if (p.slug && p.body && p.body.length) return "#/projects/" + encodeURIComponent(p.slug);
    return p.link || "";
  }

  // A row in one of the right-hand lists.
  function entry(title, href, meta, summary) {
    var li = el("li", "entry");
    li.appendChild(href ? link(href, "entry-title", title) : el("span", "entry-title", title));
    if (summary) li.appendChild(el("p", "entry-summary", summary));
    if (meta) li.appendChild(el("p", "entry-meta", meta));
    return li;
  }

  function tagLine(tags) {
    return (tags || []).join(" · ");
  }

  // The big left-hand feature: tile, title, short description, link.
  function feature(root, opts) {
    root.appendChild(tile(opts.mascot, opts.color, opts.href, opts.title));
    var h = el("h3", "feature-title");
    h.appendChild(opts.href ? link(opts.href, null, opts.title) : document.createTextNode(opts.title));
    root.appendChild(h);
    if (opts.dek) root.appendChild(el("p", "feature-dek", opts.dek));
    if (opts.href && opts.cta) root.appendChild(link(opts.href, "cta", opts.cta));
  }

  // ── Simple text bindings ──────────────────────────────────
  $$("[data-bind]").forEach(function (node) {
    var v = S[node.getAttribute("data-bind")];
    if (v) node.textContent = v;
  });
  var baseTitle = S.name ? S.name + (S.role ? " · " + S.role : "") : document.title;
  document.title = baseTitle;
  $("#year").textContent = new Date().getFullYear();
  $$("[data-mascot]").forEach(function (n) { drawMascot(n, n.getAttribute("data-mascot")); });

  // ── Masthead & notice ─────────────────────────────────────
  var social = $("#social");
  (S.social || []).forEach(function (s) {
    var li = el("li");
    li.appendChild(link(s.url, null, s.label));
    social.appendChild(li);
  });
  if (S.resumeUrl) {
    var li = el("li");
    li.appendChild(link(S.resumeUrl, null, "Résumé"));
    social.appendChild(li);
  }

  var N = S.notice;
  if (N && (N.bold || N.text)) {
    $("#notice-bold").textContent = N.bold || "";
    $("#notice-text").textContent = (N.bold ? ": " : "") + (N.text || "");
    var nl = $("#notice-link");
    if (N.link && N.linkText) {
      nl.href = N.link === "#/writing" && posts[0] ? postHref(posts[0]) : N.link;
      nl.textContent = N.linkText;
    } else nl.remove();
  } else {
    $("#notice").hidden = true;
  }

  // ── About & Now ───────────────────────────────────────────
  if (S.photo) {
    var aboutTile = $("#about-tile");
    var img = el("img");
    img.src = S.photo;
    img.alt = S.name || "Profile photo";
    aboutTile.textContent = "";
    aboutTile.classList.add("tile-photo");
    aboutTile.appendChild(img);
  }

  var about = $("#about-text");
  (S.about || []).forEach(function (p) { about.appendChild(el("p", null, p)); });

  var values = $("#values");
  (S.values || []).forEach(function (v) {
    var card = el("div", "value");
    card.appendChild(el("h4", null, v.title));
    card.appendChild(el("p", null, v.text));
    values.appendChild(card);
  });

  if (S.now && S.now.length) {
    var now = $("#now");
    S.now.forEach(function (item) { now.appendChild(el("li", null, item)); });
  } else {
    $("#now-wrap").hidden = true;
  }

  // ── Writing ───────────────────────────────────────────────
  if (posts.length) {
    var first = posts[0];
    feature($("#writing-feature"), {
      mascot: first.mascot || "crow",
      color: first.color || "pink",
      href: postHref(first),
      title: first.title,
      dek: first.summary,
      cta: "Read the post »",
    });
    var wl = $("#writing-list");
    posts.slice(1, 6).forEach(function (p) {
      wl.appendChild(entry(p.title, postHref(p), p.date));
    });
    if (posts.length === 1) wl.appendChild(entry("More posts coming soon.", null, ""));
  } else {
    hideSection("writing");
  }

  // ── Projects ──────────────────────────────────────────────
  if (projects.length) {
    var top = projects[0];
    feature($("#projects-feature"), {
      mascot: top.mascot || "turtle",
      color: top.color || "green",
      href: projectHref(top),
      title: top.title,
      dek: top.summary,
      cta: "See the project »",
    });
    var pl = $("#projects-list");
    projects.slice(1).forEach(function (p) {
      pl.appendChild(entry(p.title, projectHref(p), tagLine(p.tags), p.summary));
    });
  } else {
    hideSection("projects");
  }

  // ── Goals ─────────────────────────────────────────────────
  if (S.goals && S.goals.length) {
    var goals = $("#goals");
    S.goals.forEach(function (g) {
      var pct = Math.max(0, Math.min(100, Number(g.progress) || 0));
      var item = el("li", "goal");
      item.appendChild(el("p", "entry-meta", [g.area, g.target].filter(Boolean).join(" · ")));
      item.appendChild(el("h4", "goal-title", g.title));

      var bar = el("div", "bar");
      bar.setAttribute("role", "progressbar");
      bar.setAttribute("aria-valuemin", "0");
      bar.setAttribute("aria-valuemax", "100");
      bar.setAttribute("aria-valuenow", String(pct));
      bar.setAttribute("aria-label", g.title + " progress");
      var fill = el("span");
      fill.style.width = pct + "%";
      bar.appendChild(fill);
      item.appendChild(bar);

      var meta = el("div", "goal-meta");
      meta.appendChild(el("span", null, g.note || ""));
      meta.appendChild(el("strong", null, pct + "%"));
      item.appendChild(meta);
      goals.appendChild(item);
    });
  } else {
    hideSection("growth");
  }

  // ── Experience & skills ───────────────────────────────────
  var resume = $("#resume-btn");
  if (S.resumeUrl) resume.href = S.resumeUrl;
  else resume.remove();

  var timeline = $("#timeline");
  (S.experience || []).forEach(function (x) {
    var li = el("li");
    li.appendChild(el("p", "entry-meta", x.period));
    li.appendChild(el("h4", null, x.title));
    li.appendChild(el("p", "org", x.org));
    if (x.points && x.points.length) {
      var ul = el("ul");
      x.points.forEach(function (p) { ul.appendChild(el("li", null, p)); });
      li.appendChild(ul);
    }
    timeline.appendChild(li);
  });

  var skills = $("#skills");
  (S.skills || []).forEach(function (grp) {
    var block = el("div", "skill-group");
    block.appendChild(el("h4", null, grp.group));
    var wrap = el("div", "skill-list");
    (grp.items || []).forEach(function (s) {
      var pill = el("span", "skill");
      pill.appendChild(el("i", "lvl lvl-" + String(s.level || "").replace(/\s+/g, "")));
      pill.appendChild(document.createTextNode(s.name));
      pill.title = s.level || "";
      wrap.appendChild(pill);
    });
    block.appendChild(wrap);
    skills.appendChild(block);
  });

  // ── Learning log ──────────────────────────────────────────
  if (S.log && S.log.length) {
    var log = $("#log-list");
    S.log.forEach(function (e) { log.appendChild(entry(e.title, null, e.date, e.text)); });
  } else {
    hideSection("log");
  }

  // ── Reading list ──────────────────────────────────────────
  var books = $("#books");
  function renderBooks(filter) {
    books.textContent = "";
    (S.reading || [])
      .filter(function (b) { return filter === "All" || b.status === filter; })
      .forEach(function (b) {
        var li = entry(b.title, null, "by " + b.author);
        li.appendChild(el("span", "status status-" + String(b.status).replace(/\s+/g, ""), b.status));
        books.appendChild(li);
      });
    if (!books.children.length) books.appendChild(entry("Nothing here yet.", null, ""));
  }
  if (S.reading && S.reading.length) {
    renderBooks("All");
    $$(".filters .chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        $$(".filters .chip").forEach(function (c) { c.classList.remove("active"); });
        chip.classList.add("active");
        renderBooks(chip.dataset.filter);
      });
    });
  } else {
    hideSection("reading");
  }

  // ── Contact ───────────────────────────────────────────────
  var emailBtn = $("#email-btn");
  if (S.email) emailBtn.href = "mailto:" + S.email;
  else emailBtn.remove();

  // ── Pages: #/writing, #/writing/<slug>, #/projects, #/projects/<slug> ──
  var home = $("#home");
  var page = $("#page");

  function pageHeader(opts) {
    var head = el("header", "page-head");
    head.appendChild(tile(opts.mascot, opts.color));
    if (opts.kicker) head.appendChild(link(opts.kickerHref, "kicker", opts.kicker));
    head.appendChild(el("h1", opts.display ? "display" : "page-title", opts.title));
    if (opts.dek) head.appendChild(el("p", "page-dek", opts.dek));
    if (opts.meta) head.appendChild(el("p", "entry-meta", opts.meta));
    return head;
  }

  function listPage(title, dek, mascot, color, items) {
    var wrap = el("div", "container narrow");
    wrap.appendChild(pageHeader({ title: title, dek: dek, mascot: mascot, color: color, display: true }));
    var ul = el("ul", "entries entries-page");
    items.forEach(function (li) { ul.appendChild(li); });
    wrap.appendChild(ul);
    return wrap;
  }

  function articlePage(item, section) {
    var isPost = section === "writing";
    var wrap = el("article", "container narrow");
    wrap.appendChild(pageHeader({
      mascot: item.mascot || (isPost ? "crow" : "turtle"),
      color: item.color || (isPost ? "pink" : "green"),
      kicker: isPost ? "Writing" : "Projects",
      kickerHref: "#/" + section,
      title: item.title,
      dek: item.summary,
      meta: [isPost ? item.date : "", tagLine(item.tags)].filter(Boolean).join(" · "),
    }));
    var body = el("div", "post-body");
    body.appendChild(renderBody(item.body));
    if (!isPost && item.link) {
      var p = el("p");
      p.appendChild(link(item.link, "cta", "Visit the project »"));
      body.appendChild(p);
    }
    wrap.appendChild(body);
    var back = el("p", "back");
    back.appendChild(link("#/" + section, "cta", isPost ? "« All writing" : "« All projects"));
    wrap.appendChild(back);
    return wrap;
  }

  function notFound() {
    return listPage("Lost?", "That page wandered off. Head back home and try again.", "snail", "mint", []);
  }

  function findBySlug(list, slug) {
    for (var i = 0; i < list.length; i++) if (list[i].slug === slug) return list[i];
    return null;
  }

  function route() {
    var hash = location.hash || "";
    if (hash.indexOf("#/") !== 0) {
      if (!page.hidden) {
        page.hidden = true;
        home.hidden = false;
        document.title = baseTitle;
        var target = hash.length > 1 && document.getElementById(hash.slice(1));
        if (target) target.scrollIntoView();
        else window.scrollTo(0, 0);
      }
      return;
    }

    var parts = hash.slice(2).split("/").map(decodeURIComponent);
    var view, title;
    if (parts[0] === "writing" && !parts[1]) {
      title = "Writing";
      view = listPage("Writing", "Notes, essays, and things I'm figuring out.", "crow", "pink",
        posts.map(function (p) { return entry(p.title, postHref(p), p.date, p.summary); }));
    } else if (parts[0] === "projects" && !parts[1]) {
      title = "Projects";
      view = listPage("Projects", "Things I've built, and what they taught me.", "turtle", "green",
        projects.map(function (p) { return entry(p.title, projectHref(p), tagLine(p.tags), p.summary); }));
    } else if (parts[0] === "writing" || parts[0] === "projects") {
      var item = findBySlug(parts[0] === "writing" ? posts : projects, parts[1]);
      view = item ? articlePage(item, parts[0]) : notFound();
      title = item ? item.title : "Not found";
    } else {
      view = notFound();
      title = "Not found";
    }

    page.textContent = "";
    page.appendChild(view);
    home.hidden = true;
    page.hidden = false;
    document.title = title + " · " + (S.name || "");
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  route();

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
  var navLinks = $("#nav-links");
  toggle.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  $$("#nav-links a").forEach(function (a) {
    a.addEventListener("click", function () {
      navLinks.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // ── Reveal on scroll ──────────────────────────────────────
  var revealables = $$(".dept-body > *, .contact-inner");
  if ("IntersectionObserver" in window && !reduceMotion) {
    revealables.forEach(function (n) { n.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    revealables.forEach(function (n) { io.observe(n); });
  }

  // ── Highlight the current section in the nav ──────────────
  var anchors = $$("#nav-links a[href^='#']");
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        anchors.forEach(function (a) {
          a.classList.toggle("current", a.getAttribute("href") === "#" + e.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("#home section[id]").forEach(function (s) { spy.observe(s); });
  }
})();
