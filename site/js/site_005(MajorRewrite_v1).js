// =========================================================
// Big palette table (ALL 8-digit hex) + family ranges
// =========================================================

const palettes = [
  ["#FFFFFFFF","#FFFFFFFF","#FFFFFFFF","#FFFFFFFF","#FFFFFFFF"],
  ["#FFFFF4FF","#FFFFF4FF","#FFFFF4FF","#FFFFF4FF","#FFFFF4FF"],
  ["#FFFFF2FF","#FFFFF2FF","#FFFFF2FF","#FFFFF2FF","#FFFFF2FF"],
  ["#FFFFF0FF","#FFFFF0FF","#FFFFF0FF","#FFFFF0FF","#FFFFF0FF"],
  ["#FFFAFAFF","#FFFAFAFF","#FFFAFAFF","#FFFAFAFF","#FFFAFAFF"],
  ["#F9F9F9FF","#F9F9F9FF","#F9F9F9FF","#F9F9F9FF","#F9F9F9FF"],
  ["#F7F7F7FF","#F7F7F7FF","#F7F7F7FF","#F7F7F7FF","#F7F7F7FF"],
  ["#F2F2F2FF","#F2F2F2FF","#F2F2F2FF","#F2F2F2FF","#F2F2F2FF"],
  ["#FDFCF3FF","#FDFCF3FF","#FDFCF3FF","#FDFCF3FF","#FDFCF3FF"],
  ["#FFFFF4FF","#FFFFF4FF","#FFFFF4FF","#FFFFF4FF","#FFFFF4FF"],

  ["#FFFDD0FF","#FFFDD0FF","#FFFDD0FF","#FFFDD0FF","#FFFDD0FF"],
  ["#FFF8DCFF","#FFF8DCFF","#FFF8DCFF","#FFF8DCFF","#FFF8DCFF"],
  ["#FFFAF0FF","#FFFAF0FF","#FFFAF0FF","#FFFAF0FF","#FFFAF0FF"],
  ["#FFF5EEFF","#FFF5EEFF","#FFF5EEFF","#FFF5EEFF","#FFF5EEFF"],
  ["#FFEFDBFF","#FFEFDBFF","#FFEFDBFF","#FFEFDBFF","#FFEFDBFF"],
  ["#FFEBCDFF","#FFEBCDFF","#FFEBCDFF","#FFEBCDFF","#FFEBCDFF"],
  ["#FEF5D5FF","#FEF5D5FF","#FEF5D5FF","#FEF5D5FF","#FEF5D5FF"],
  ["#FEF2D4FF","#FEF2D4FF","#FEF2D4FF","#FEF2D4FF","#FEF2D4FF"],
  ["#FEF1D6FF","#FEF1D6FF","#FEF1D6FF","#FEF1D6FF","#FEF1D6FF"],
  ["#FCEFD3FF","#FCEFD3FF","#FCEFD3FF","#FCEFD3FF","#FCEFD3FF"],

  ["#FBF7F5FF","#FBF7F5FF","#FBF7F5FF","#FBF7F5FF","#FBF7F5FF"],
  ["#FBF4DDFF","#FBF4DDFF","#FBF4DDFF","#FBF4DDFF","#FBF4DDFF"],
  ["#FAF0E6FF","#FAF0E6FF","#FAF0E6FF","#FAF0E6FF","#FAF0E6FF"],
  ["#FAEBD7FF","#FAEBD7FF","#FAEBD7FF","#FAEBD7FF","#FAEBD7FF"],
  ["#F9F1F1FF","#F9F1F1FF","#F9F1F1FF","#F9F1F1FF","#F9F1F1FF"],
  ["#F9F0D8FF","#F9F0D8FF","#F9F0D8FF","#F9F0D8FF","#F9F0D8FF"],
  ["#FDF5E6FF","#FDF5E6FF","#FDF5E6FF","#FDF5E6FF","#FDF5E6FF"],
  ["#FDF3D6FF","#FDF3D6FF","#FDF3D6FF","#FDF3D6FF","#FDF3D6FF"],
  ["#F0EAD6FF","#F0EAD6FF","#F0EAD6FF","#F0EAD6FF","#F0EAD6FF"],
  ["#E2DBC5FF","#E2DBC5FF","#E2DBC5FF","#E2DBC5FF","#E2DBC5FF"],

  ["#BDBCA7FF","#BDBCA7FF","#BDBCA7FF","#BDBCA7FF","#BDBCA7FF"],
  ["#BBD58EFF","#BBD58EFF","#BBD58EFF","#BBD58EFF","#BBD58EFF"],
  ["#919481FF","#919481FF","#919481FF","#919481FF","#919481FF"],
  ["#656E5BFF","#656E5BFF","#656E5BFF","#656E5BFF","#656E5BFF"],
  ["#5A6F4EFF","#5A6F4EFF","#5A6F4EFF","#5A6F4EFF","#5A6F4EFF"],
  ["#588157FF","#588157FF","#588157FF","#588157FF","#588157FF"],
  ["#4A4A4AFF","#4A4A4AFF","#4A4A4AFF","#4A4A4AFF","#4A4A4AFF"],
  ["#47593FFF","#47593FFF","#47593FFF","#47593FFF","#47593FFF"],
  ["#415B38FF","#415B38FF","#415B38FF","#415B38FF","#415B38FF"],
  ["#3F523FFF","#3F523FFF","#3F523FFF","#3F523FFF","#3F523FFF"],

  ["#3E4F3EFF","#3E4F3EFF","#3E4F3EFF","#3E4F3EFF","#3E4F3EFF"],
  ["#3A5A40FF","#3A5A40FF","#3A5A40FF","#3A5A40FF","#3A5A40FF"],
  ["#3A4D38FF","#3A4D38FF","#3A4D38FF","#3A4D38FF","#3A4D38FF"],
  ["#344E41FF","#344E41FF","#344E41FF","#344E41FF","#344E41FF"],
  ["#33482FFF","#33482FFF","#33482FFF","#33482FFF","#33482FFF"],
  ["#313131FF","#313131FF","#313131FF","#313131FF","#313131FF"],
  ["#29412AFF","#29412AFF","#29412AFF","#29412AFF","#29412AFF"],
  ["#263B28FF","#263B28FF","#263B28FF","#263B28FF","#263B28FF"],
  ["#233A24FF","#233A24FF","#233A24FF","#233A24FF","#233A24FF"],
  ["#1D311DFF","#1D311DFF","#1D311DFF","#1D311DFF","#1D311DFF"]
];

const paletteFamilies = [
  { name: "White to Light",  start: 0,  count: 10 },
  { name: "Light and Creme", start: 10, count: 10 },
  { name: "Skin to Medium",  start: 20, count: 10 },
  { name: "Medium to Earth", start: 30, count: 10 },
  { name: "Earth to Dark",   start: 40, count: 10 },
  { name: "All (Full Range)", start: 0, count: palettes.length }
];

// =========================================================
// Site logic
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // ---- state (absolute tone indices) ----
  var hasLocalChanges = false;
  var designMode = false;
  var activeFamilyIndex = 0;  // default family selection
  var globalIndex = 0;        // 0..palettes.length-1

  var localIndex = {
    header: 0,
    hero: 0,
    services: 0,
    reviews: 0,
    contact: 0
  };

  // ======================================================
  // Helpers
  // ======================================================

  function recomputeHasLocalChanges() {
    var keys = ["header", "hero", "services", "reviews", "contact"];
    var dirty = false;
    for (var i = 0; i < keys.length; i++) {
      if (localIndex[keys[i]] !== globalIndex) {
        dirty = true;
        break;
      }
    }
    hasLocalChanges = dirty;
  }

  function updatePaletteIndexOverlay() {
    var el = document.getElementById("paletteIndexOverlay");
    if (!el) return;

    if (!designMode) {
      el.style.display = "none";
      return;
    }

    var fam = paletteFamilies[activeFamilyIndex];
    var absoluteIndex = globalIndex + 1;

    el.textContent = fam.name + " · Tone " + absoluteIndex + " / " + palettes.length;
    el.style.display = "block";
  }

  function updateSectionToneOverlay(target) {
    var el = document.getElementById("tone-" + target);
    if (!el) return;

    if (!designMode) {
      el.textContent = "";
      return;
    }

    var idx = localIndex[target] || 0;
    var absoluteIndex = idx + 1;

    el.textContent = "Tone " + absoluteIndex;
  }

  function updateAllSectionToneOverlays() {
    updateSectionToneOverlay("header");
    updateSectionToneOverlay("hero");
    updateSectionToneOverlay("services");
    updateSectionToneOverlay("reviews");
    updateSectionToneOverlay("contact");
  }

  // ---- color helpers ----
  function normHex8(hex) {
    if (!hex || hex[0] !== "#") return hex;
    if (hex.length === 7) return hex + "FF";
    return hex;
  }

  function brightness(hex) {
    var h = normHex8(hex);
    if (!h || h.length !== 9) return 0;

    var r = parseInt(h.slice(1, 3), 16);
    var g = parseInt(h.slice(3, 5), 16);
    var b = parseInt(h.slice(5, 7), 16);

    return (r * 299 + g * 587 + b * 114) / 1000;
  }

  function lightenHex8(hex, amt) {
    var h = normHex8(hex);
    if (!h || h.length !== 9) return hex;

    var r = parseInt(h.slice(1, 3), 16);
    var g = parseInt(h.slice(3, 5), 16);
    var b = parseInt(h.slice(5, 7), 16);
    var a = h.slice(7, 9);

    r = Math.round(r + (255 - r) * amt);
    g = Math.round(g + (255 - g) * amt);
    b = Math.round(b + (255 - b) * amt);

    function to2(x) {
      var s = x.toString(16).toUpperCase();
      return s.length === 1 ? "0" + s : s;
    }

    return "#" + to2(r) + to2(g) + to2(b) + a;
  }

  function darkenHex8(hex, amt) {
    var h = normHex8(hex);
    if (!h || h.length !== 9) return hex;

    var r = parseInt(h.slice(1, 3), 16);
    var g = parseInt(h.slice(3, 5), 16);
    var b = parseInt(h.slice(5, 7), 16);
    var a = h.slice(7, 9);

    r = Math.round(r * (1 - amt));
    g = Math.round(g * (1 - amt));
    b = Math.round(b * (1 - amt));

    function to2(x) {
      var s = x.toString(16).toUpperCase();
      return s.length === 1 ? "0" + s : s;
    }

    return "#" + to2(r) + to2(g) + to2(b) + a;
  }

  function getPaletteRowByIndex(absIndex) {
    return palettes[absIndex];
  }

  function applyPaletteToTarget(p, target) {
    var header = document.querySelector(".site-header");
    var hero = document.querySelector(".hero");
    var services = document.querySelector("#services");
    var reviews = document.querySelector("#reviews");
    var contact = document.querySelector("#contact");
    var footer = document.querySelector(".site-footer");
    var cards = document.querySelectorAll(".card");

    function doHeader() {
      if (header) header.style.background = p[0];
      if (footer) footer.style.background = p[0];
    }

    function doHero() {
      if (hero) hero.style.background = p[1];
    }

    function doServices() {
      if (services) services.style.background = p[2];

      var base = p[2];
      var b = brightness(base);

      var lightAmt = 0.18;
      var darkAmt = 0.12;
      var threshold = 180;

      var cardColor = (b >= threshold) ? darkenHex8(base, darkAmt) : lightenHex8(base, lightAmt);

      for (var i = 0; i < cards.length; i++) {
        cards[i].style.background = cardColor;
      }
    }

    function doReviews() {
      if (reviews) reviews.style.background = p[3];
    }

    function doContact() {
      if (contact) contact.style.background = p[4];
    }

    if (target === "all") {
      doHeader(); doHero(); doServices(); doReviews(); doContact();
      return;
    }

    if (target === "header") doHeader();
    else if (target === "hero") doHero();
    else if (target === "services") doServices();
    else if (target === "reviews") doReviews();
    else if (target === "contact") doContact();
  }

  function applyGlobalAll() {
    localIndex.header   = globalIndex;
    localIndex.hero     = globalIndex;
    localIndex.services = globalIndex;
    localIndex.reviews  = globalIndex;
    localIndex.contact  = globalIndex;

    var row = getPaletteRowByIndex(globalIndex);

    applyPaletteToTarget(row, "all");
    updatePaletteIndexOverlay();
    updateAllSectionToneOverlays();
    recomputeHasLocalChanges();
  }

  function applyLocal(target) {
    applyPaletteToTarget(getPaletteRowByIndex(localIndex[target]), target);
    updateSectionToneOverlay(target);
    recomputeHasLocalChanges();
  }

  // Start at global default (palettes[0])
  applyGlobalAll();

  // ---- menu (family picker) ----
  var control = document.getElementById("paletteControl");

  function hideMenu() {
    if (!control) return;
    control.style.display = "none";
  }

  function showMenu() {
    if (!control) return;

    control.innerHTML = "";

    for (var i = 0; i < paletteFamilies.length; i++) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("data-family-index", String(i));
      b.textContent = paletteFamilies[i].name;
      control.appendChild(b);
    }

    control.style.display = "block";

    var exitBtn = document.createElement("button");
    exitBtn.type = "button";
    exitBtn.textContent = "Exit Design Mode";
    exitBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      hideMenu();

      designMode = false;
      document.body.classList.remove("design-mode");
      setDesignCursors(false);
      hasLocalChanges = false;
      updatePaletteIndexOverlay();
      updateAllSectionToneOverlays();
    });
    control.appendChild(exitBtn);
  }

  if (control) {
    hideMenu();

    control.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;

      var idxStr = btn.getAttribute("data-family-index");
      if (idxStr == null) return;

      var idx = parseInt(idxStr, 10);
      if (isNaN(idx) || idx < 0 || idx >= paletteFamilies.length) return;

      activeFamilyIndex = idx;
      designMode = true;
      document.body.classList.add("design-mode");
      setDesignCursors(true);

      recomputeHasLocalChanges();

      if (!hasLocalChanges) {
        applyGlobalAll();
      } else {
        applyLocal("header");
        applyLocal("hero");
        applyLocal("services");
        applyLocal("reviews");
        applyLocal("contact");
      }

      updatePaletteIndexOverlay();
      updateAllSectionToneOverlays();
      hideMenu();
    });

    // Click outside closes menu
    document.addEventListener("click", function (e) {
      if (!designMode) return;
      if (!control || control.style.display === "none") return;

      var insideMenu = e.target.closest("#paletteControl");
      var onLogo = e.target.closest("#paletteToggle");
      if (!insideMenu && !onLogo) {
        e.preventDefault();
        e.stopPropagation();
        hideMenu();
      }
    }, true);
  }

  // ---- logo: tap cycles ALL; long-press opens family menu ----
  var logo = document.getElementById("paletteToggle");

  if (logo) {
    logo.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
  }

  var pressTimer = null;
  var longPressFired = false;

  function clearPressTimer() {
    if (pressTimer) {
      clearTimeout(pressTimer);
      pressTimer = null;
    }
  }

  if (logo) {
    logo.addEventListener("pointerdown", function () {
      longPressFired = false;
      clearPressTimer();

      pressTimer = setTimeout(function () {
        longPressFired = true;

        designMode = true;
        document.body.classList.add("design-mode");
        setDesignCursors(true);

        updatePaletteIndexOverlay();
        updateAllSectionToneOverlays();
        showMenu();
      }, 700);
    });

    logo.addEventListener("pointerup", clearPressTimer);
    logo.addEventListener("pointerleave", clearPressTimer);
    logo.addEventListener("pointercancel", clearPressTimer);

    logo.addEventListener("click", function (e) {
      if (longPressFired) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      if (!designMode) return;

      recomputeHasLocalChanges();

      var fam = paletteFamilies[activeFamilyIndex];
      var famStart = fam.start;
      var famEnd = fam.start + fam.count - 1;

      var next;
      if (globalIndex < famStart || globalIndex > famEnd) {
        next = famStart;
      } else {
        next = globalIndex + 1;
        if (next > famEnd) next = famStart;
      }

      if (hasLocalChanges) {
        var ok = window.confirm(
          "This will reset your section tones to match Tone " + (next + 1) + ". Continue?"
        );
        if (!ok) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
      }

      globalIndex = next;
      applyGlobalAll();

      e.preventDefault();
      e.stopPropagation();
    });
  }

  // ---- section tap cycles that section (design mode only) ----
  function hookSection(target, selector) {
    var el = document.querySelector(selector);
    if (!el) return;

    el.addEventListener("click", function (e) {
      if (!designMode) return;
      if (e.target.closest("#paletteToggle")) return;

      e.preventDefault();
      e.stopPropagation();

      localIndex[target] = (localIndex[target] + 1) % palettes.length;

      applyLocal(target);
    });
  }

  hookSection("header", ".site-header");
  hookSection("hero", ".hero");
  hookSection("services", "#services");
  hookSection("reviews", "#reviews");
  hookSection("contact", "#contact");

  // ---- disable links in design mode ----
  document.addEventListener("click", function (e) {
    if (!designMode) return;

    var a = e.target.closest("a");
    if (a) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  function setDesignCursors(on) {
    var cursor = on ? "pointer" : "default";

    var logoEl = document.getElementById("paletteToggle");
    if (logoEl) logoEl.style.cursor = cursor;

    var selectors = [
      ".site-header",
      ".hero",
      "#services",
      "#reviews",
      "#contact"
    ];

    for (var i = 0; i < selectors.length; i++) {
      var el = document.querySelector(selectors[i]);
      if (el) el.style.cursor = cursor;
    }
  }

  setDesignCursors(false);
  updatePaletteIndexOverlay();
});
