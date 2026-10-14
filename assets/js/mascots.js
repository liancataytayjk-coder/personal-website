// The animal illustrations, drawn as inline SVG so they can be animated with CSS.
// Each one sits on a colored tile. To use a different animal for a section, change
// the data-mascot="..." attribute on its tile in index.html (or `mascot` on a post).
// Available: fox, crow, turtle, giraffe, penguin, snail, bear, pigeon.
(function () {
  "use strict";

  var INK = "#141414";
  var W = "#fff";

  // A pivot point for CSS transforms, in the SVG's own coordinates.
  function at(x, y) {
    return ' style="transform-box:view-box;transform-origin:' + x + "px " + y + 'px"';
  }

  function eye(cx, cy, r, px, py) {
    return (
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + W + '" stroke="' + INK + '" stroke-width="3.5"/>' +
      '<circle class="m-pupil" cx="' + (cx + px) + '" cy="' + (cy + py) + '" r="' + (r * 0.46).toFixed(1) + '" fill="' + INK + '"/>'
    );
  }

  function eyes(list) {
    return '<g class="m-blink">' + list.map(function (e) { return eye.apply(null, e); }).join("") + "</g>";
  }

  function svg(name, body) {
    return (
      '<svg class="mascot mascot-' + name + '" viewBox="0 0 200 150" aria-hidden="true" focusable="false">' +
      body +
      "</svg>"
    );
  }

  var M = {};

  // A fox, waving hello.
  M.fox = svg("fox",
    '<g class="m-tail"' + at(122, 120) + ">" +
      '<path d="M120 126 C150 130 178 104 168 72 C164 62 156 60 152 66 C156 90 140 106 118 108 Z" fill="' + INK + '"/>' +
      '<path d="M168 72 C164 62 156 60 152 66 C153 72 154 78 152 85 C161 85 166 80 168 72 Z" fill="' + W + '"/>' +
    "</g>" +
    '<path d="M74 136 C68 104 80 84 100 84 C120 84 132 104 126 136 Z" fill="' + INK + '"/>' +
    '<path d="M92 136 C90 114 94 100 100 98 C106 100 110 114 108 136 Z" fill="' + W + '"/>' +
    '<g class="m-wave"' + at(84, 100) + ">" +
      '<path d="M84 100 L60 70" stroke="' + INK + '" stroke-width="12" stroke-linecap="round"/>' +
    "</g>" +
    '<path d="M74 58 L68 18 L94 40 Q100 38 106 40 L132 18 L126 58 Q124 86 100 90 Q76 86 74 58 Z" fill="' + INK + '"/>' +
    '<path d="M74 29 L76 46 L87 40 Z M126 29 L124 46 L113 40 Z" fill="' + W + '"/>' +
    '<path d="M84 67 Q100 96 116 67 Q108 73 100 71 Q92 73 84 67 Z" fill="' + W + '"/>' +
    '<ellipse cx="100" cy="78" rx="5" ry="3.5" fill="' + INK + '"/>' +
    eyes([[89, 56, 8, 1.5, 1], [111, 56, 8, 1.5, 1]])
  );

  // A crow, writing with a pencil held in its beak.
  M.crow = svg("crow",
    '<g transform="rotate(-8 70 122)">' +
      '<rect x="32" y="104" width="76" height="36" rx="3" fill="' + W + '" stroke="' + INK + '" stroke-width="4"/>' +
      '<path class="m-ink" d="M42 116 H98 M42 127 H86" stroke="' + INK + '" stroke-width="3" stroke-linecap="round"/>' +
    "</g>" +
    '<path d="M150 104 L188 130 L178 137 L142 117 Z" fill="' + INK + '"/>' +
    '<path d="M112 124 C98 112 102 80 126 76 C150 72 162 92 156 112 C150 124 128 130 112 124 Z" fill="' + INK + '"/>' +
    '<path d="M128 94 Q146 92 152 110" stroke="' + W + '" stroke-width="3" fill="none" stroke-linecap="round"/>' +
    '<path d="M122 124 L120 140 M136 124 L138 140 M112 140 H128 M130 140 H146" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>' +
    '<g class="m-peck"' + at(126, 86) + ">" +
      '<g transform="rotate(25 82 92)">' +
        '<rect x="78" y="70" width="9" height="34" fill="' + W + '" stroke="' + INK + '" stroke-width="3"/>' +
        '<path d="M78 104 L82.5 114 L87 104 Z" fill="' + INK + '"/>' +
      "</g>" +
      '<circle cx="120" cy="62" r="20" fill="' + INK + '"/>' +
      '<path d="M104 60 L80 80 L107 72 Z" fill="' + INK + '"/>' +
      eyes([[117, 56, 7, -2, 2]]) +
    "</g>"
  );

  // A turtle, carrying a wobbly stack of projects.
  M.turtle = svg("turtle",
    '<g class="m-legs-a">' +
      '<rect x="56" y="104" width="15" height="26" rx="7" fill="' + INK + '"/>' +
      '<rect x="112" y="104" width="15" height="26" rx="7" fill="' + INK + '"/>' +
    "</g>" +
    '<g class="m-legs-b">' +
      '<rect x="78" y="104" width="15" height="26" rx="7" fill="' + INK + '"/>' +
      '<rect x="132" y="104" width="15" height="26" rx="7" fill="' + INK + '"/>' +
    "</g>" +
    '<g class="m-bob">' +
      '<path d="M48 108 L32 116 L50 117 Z" fill="' + INK + '"/>' +
      '<path d="M138 108 C146 96 154 84 168 84 C182 84 188 98 180 108 C172 116 152 118 138 114 Z" fill="' + INK + '"/>' +
      '<path d="M172 107 Q179 106 182 100" stroke="' + W + '" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
      eyes([[169, 94, 7, 2, 0]]) +
      '<path d="M46 112 C48 70 144 70 146 112 Z" fill="' + INK + '"/>' +
      '<rect x="40" y="105" width="112" height="11" rx="5.5" fill="' + INK + '"/>' +
      '<path d="M62 105 L72 90 L120 90 L130 105 M96 90 V105" stroke="' + W + '" stroke-width="3" fill="none" stroke-linejoin="round" stroke-linecap="round"/>' +
      '<g class="m-stack"' + at(96, 80) + ">" +
        '<rect x="70" y="62" width="52" height="19" rx="4" fill="' + W + '" stroke="' + INK + '" stroke-width="4"/>' +
        '<rect x="76" y="43" width="42" height="19" rx="4" fill="' + W + '" stroke="' + INK + '" stroke-width="4"/>' +
        '<rect x="72" y="24" width="46" height="19" rx="4" fill="' + W + '" stroke="' + INK + '" stroke-width="4"/>' +
        '<path d="M86 71.5 H106 M88 52.5 H106 M84 33.5 H102" stroke="' + INK + '" stroke-width="3" stroke-linecap="round"/>' +
      "</g>" +
    "</g>"
  );

  // A giraffe, stretching to reach a little higher.
  M.giraffe = svg("giraffe",
    '<path d="M80 112 V142 M94 112 V142 M124 112 V142 M138 112 V142" stroke="' + INK + '" stroke-width="8" stroke-linecap="round"/>' +
    '<path d="M70 98 Q60 108 62 122" stroke="' + INK + '" stroke-width="3" fill="none"/>' +
    '<circle cx="62" cy="124" r="4" fill="' + INK + '"/>' +
    '<g class="m-neck"' + at(136, 98) + ">" +
      '<path d="M122 98 L125 42 L145 42 L150 98 Z" fill="' + INK + '"/>' +
      '<circle cx="134" cy="60" r="4" fill="' + W + '"/>' +
      '<circle cx="139" cy="80" r="4.5" fill="' + W + '"/>' +
    "</g>" +
    '<rect x="66" y="86" width="86" height="32" rx="16" fill="' + INK + '"/>' +
    '<circle cx="84" cy="100" r="5" fill="' + W + '"/>' +
    '<circle cx="102" cy="108" r="4" fill="' + W + '"/>' +
    '<circle cx="118" cy="97" r="5" fill="' + W + '"/>' +
    '<circle cx="136" cy="107" r="3.5" fill="' + W + '"/>' +
    '<g class="m-head">' +
      '<path d="M132 34 L130 18 M144 32 L146 16" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>' +
      '<circle cx="130" cy="17" r="4" fill="' + INK + '"/>' +
      '<circle cx="146" cy="15" r="4" fill="' + INK + '"/>' +
      '<path d="M127 37 L112 31 L123 44 Z" fill="' + INK + '"/>' +
      '<path d="M123 44 C119 30 140 24 158 34 C170 40 168 52 156 54 C144 56 130 54 123 44 Z" fill="' + INK + '"/>' +
      '<circle cx="162" cy="43" r="2" fill="' + W + '"/>' +
      eyes([[141, 40, 6.5, 2, 0]]) +
    "</g>"
  );

  // A penguin in a bow tie, off to work with a briefcase.
  M.penguin = svg("penguin",
    '<g class="m-waddle"' + at(100, 142) + ">" +
      '<path d="M78 141 Q87 131 96 141 Z M104 141 Q113 131 122 141 Z" fill="' + INK + '"/>' +
      '<path d="M66 74 Q46 98 54 118 Q66 102 70 88 Z" fill="' + INK + '"/>' +
      '<path d="M100 28 C130 28 140 70 138 104 C136 130 120 140 100 140 C80 140 64 130 62 104 C60 70 70 28 100 28 Z" fill="' + INK + '"/>' +
      '<path d="M100 60 C118 60 125 88 123 108 C121 126 112 134 100 134 C88 134 79 126 77 108 C75 88 82 60 100 60 Z" fill="' + W + '"/>' +
      '<path d="M100 70 L86 62 L86 78 Z M100 70 L114 62 L114 78 Z" fill="' + INK + '"/>' +
      '<circle cx="100" cy="70" r="3.5" fill="' + INK + '"/>' +
      '<path d="M92 50 L100 59 L108 50 Z" fill="' + W + '" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/>' +
      eyes([[89, 42, 7.5, 0, 1.5], [111, 42, 7.5, 0, 1.5]]) +
      '<g class="m-swing"' + at(140, 96) + ">" +
        '<path d="M134 74 Q154 92 148 112 Q136 100 130 88 Z" fill="' + INK + '"/>' +
        '<path d="M150 112 V104 Q150 98 156 98 H162 Q168 98 168 104 V112" stroke="' + INK + '" stroke-width="4" fill="none"/>' +
        '<rect x="140" y="110" width="38" height="26" rx="4" fill="' + W + '" stroke="' + INK + '" stroke-width="4"/>' +
        '<path d="M140 120 H178" stroke="' + INK + '" stroke-width="3"/>' +
      "</g>" +
    "</g>"
  );

  // A snail. Slow and steady, small steps add up.
  M.snail = svg("snail",
    '<path class="m-trail" d="M8 135 H30" stroke="' + INK + '" stroke-width="3" stroke-dasharray="2 7" stroke-linecap="round"/>' +
    '<g class="m-slide">' +
      '<path d="M28 132 C28 122 50 120 120 120 L150 120 C154 104 150 84 158 74 C168 64 182 72 180 88 C178 104 176 118 170 128 C164 136 40 138 28 132 Z" fill="' + INK + '"/>' +
      '<g class="m-stalks"' + at(168, 76) + ">" +
        '<path d="M162 78 L152 46 M173 78 L182 46" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>' +
        eyes([[151, 43, 7, -1, 0.5], [183, 43, 7, 1, 0.5]]) +
      "</g>" +
      '<path d="M163 96 Q170 101 177 94" stroke="' + W + '" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
      '<circle cx="96" cy="84" r="38" fill="' + W + '" stroke="' + INK + '" stroke-width="6"/>' +
      '<path d="M92 84 A4 4 0 0 1 100 84 A8 8 0 0 1 84 84 A12 12 0 0 1 108 84 A16 16 0 0 1 76 84 A20 20 0 0 1 116 84 A24 24 0 0 1 68 84 A28 28 0 0 1 124 84" stroke="' + INK + '" stroke-width="5" fill="none" stroke-linecap="round"/>' +
    "</g>"
  );

  // A bear, reading. Its eyes follow the lines and it turns the page.
  M.bear = svg("bear",
    '<path d="M58 148 C54 104 72 86 100 86 C128 86 146 104 142 148 Z" fill="' + INK + '"/>' +
    '<circle cx="74" cy="26" r="12" fill="' + INK + '"/><circle cx="126" cy="26" r="12" fill="' + INK + '"/>' +
    '<circle cx="74" cy="26" r="5" fill="' + W + '"/><circle cx="126" cy="26" r="5" fill="' + W + '"/>' +
    '<circle cx="100" cy="54" r="32" fill="' + INK + '"/>' +
    '<ellipse cx="100" cy="67" rx="13" ry="10" fill="' + W + '"/>' +
    '<ellipse cx="100" cy="62" rx="5" ry="3.5" fill="' + INK + '"/>' +
    '<path d="M100 64 V71" stroke="' + INK + '" stroke-width="2.5" stroke-linecap="round"/>' +
    '<g class="m-read">' + eyes([[88, 47, 7.5, 0, 2.5], [112, 47, 7.5, 0, 2.5]]) + "</g>" +
    '<path d="M100 108 L62 100 L60 136 L100 144 Z" fill="' + W + '" stroke="' + INK + '" stroke-width="4" stroke-linejoin="round"/>' +
    '<path d="M100 108 L138 100 L140 136 L100 144 Z" fill="' + W + '" stroke="' + INK + '" stroke-width="4" stroke-linejoin="round"/>' +
    '<path d="M70 110 L92 114 M70 118 L92 122 M70 126 L86 129 M108 114 L130 110 M108 122 L130 118 M108 129 L124 126" stroke="' + INK + '" stroke-width="2.5" stroke-linecap="round"/>' +
    '<path class="m-flip"' + at(100, 120) + ' d="M100 108 L138 100 L140 136 L100 144 Z" fill="' + W + '" stroke="' + INK + '" stroke-width="4" stroke-linejoin="round"/>' +
    '<circle cx="58" cy="118" r="11" fill="' + INK + '"/><circle cx="142" cy="118" r="11" fill="' + INK + '"/>'
  );

  // A pigeon, flying a letter over.
  M.pigeon = svg("pigeon",
    '<g class="m-fly">' +
      '<path d="M96 106 L94 118 M108 106 L110 118" stroke="' + INK + '" stroke-width="3.5" stroke-linecap="round"/>' +
      '<rect x="80" y="116" width="44" height="28" rx="3" fill="' + W + '" stroke="' + INK + '" stroke-width="4"/>' +
      '<path d="M80 117 L102 133 L124 117" stroke="' + INK + '" stroke-width="3.5" fill="none" stroke-linejoin="round"/>' +
      '<path d="M146 84 L184 74 L180 98 L146 96 Z" fill="' + INK + '"/>' +
      '<path d="M64 86 C70 70 112 66 150 84 C150 98 132 110 100 110 C80 110 64 100 64 86 Z" fill="' + INK + '"/>' +
      '<circle cx="66" cy="74" r="19" fill="' + INK + '"/>' +
      '<path d="M50 70 L32 79 L50 82 Z" fill="' + INK + '"/>' +
      eyes([[62, 69, 6.5, -2, 0]]) +
      '<g class="m-flap"' + at(110, 86) + ">" +
        '<path d="M96 86 C100 56 120 30 152 20 C144 44 138 70 124 90 Z" fill="' + INK + '"/>' +
        '<path d="M112 78 Q126 52 143 34" stroke="' + W + '" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      "</g>" +
    "</g>"
  );

  window.MASCOTS = M;
})();
