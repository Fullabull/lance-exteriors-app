// =========================================================
// Big palette table (ALL 8-digit hex) + family ranges
// =========================================================

const palettes = [
  // [0] Global reset / site default
  ["#FFFFFFFF", "#FFFFFFFF", "#FFFFFFFF", "#F7F7F7FF", "#FFFFFFFF"],

  // =========================================================
  // FAMILY 1: Original Icon (Coolors)
  // start: 1, count: 13  (includes default row)
  // =========================================================
  ["#FFFFFFFF", "#FFFFFFFF", "#FFFFFFFF", "#F7F7F7FF", "#FFFFFFFF"],
  ["#1D311DFF", "#415B38FF", "#BDBCA7FF", "#FCEFD3FF", "#263B28FF"],
  ["#F9F0D8FF", "#33482FFF", "#233A24FF", "#1D311DFF", "#263B28FF"],
  ["#FEF2D4FF", "#656E5BFF", "#3A4D38FF", "#33482FFF", "#415B38FF"],
  ["#33482FFF", "#E2DBC5FF", "#FEF2D4FF", "#47593FFF", "#FEF5D5FF"],
  ["#FEF5D5FF", "#47593FFF", "#E2DBC5FF", "#FBF4DDFF", "#1F3923FF"],
  ["#415B38FF", "#F9F0D8FF", "#233A24FF", "#BDBCA7FF", "#29412AFF"],
  ["#233A24FF", "#3A4D38FF", "#919481FF", "#656E5BFF", "#FEF1D6FF"],
  ["#656E5BFF", "#1D311DFF", "#47593FFF", "#FDF3D6FF", "#233A24FF"],
  ["#FEF1D6FF", "#29412AFF", "#FEF2D4FF", "#415B38FF", "#FCEFD3FF"],
  ["#3A4D38FF", "#656E5BFF", "#1D311DFF", "#47593FFF", "#FDF3D6FF"],
  ["#263B28FF", "#1D311DFF", "#29412AFF", "#415B38FF", "#FEF2D4FF"],
  ["#919481FF", "#656E5BFF", "#1D311DFF", "#47593FFF", "#FDF3D6FF"],

  // =========================================================
  // FAMILY 2: Balanced Greens
  // start: 14, count: 11 (includes default row)
  // =========================================================
  ["#FFFFFFFF", "#FFFFFFFF", "#FFFFFFFF", "#F7F7F7FF", "#FFFFFFFF"],
  ["#1D311DFF", "#656E5BFF", "#FCEFD3FF", "#FBF4DDFF", "#263B28FF"],
  ["#FFFFFFFF", "#FEF2D4FF", "#33482FFF", "#1D311DFF", "#FBF4DDFF"],
  ["#263B28FF", "#1D311DFF", "#FBF4DDFF", "#FEF2D4FF", "#313131FF"],
  ["#FCEFD3FF", "#FBF4DDFF", "#1D311DFF", "#263B28FF", "#656E5BFF"],
  ["#33482FFF", "#263B28FF", "#FEF2D4FF", "#FCEFD3FF", "#FFFFFFFF"],
  ["#FBF4DDFF", "#FCEFD3FF", "#656E5BFF", "#33482FFF", "#1D311DFF"],
  ["#656E5BFF", "#313131FF", "#FFFFFFFF", "#919481FF", "#FEF2D4FF"],
  ["#FEF2D4FF", "#FFFFFFFF", "#263B28FF", "#656E5BFF", "#33482FFF"],
  ["#919481FF", "#33482FFF", "#FBF4DDFF", "#FEF2D4FF", "#313131FF"],
  ["#313131FF", "#919481FF", "#1D311DFF", "#FFFFFFFF", "#FCEFD3FF"],

  // =========================================================
  // FAMILY 3: Softened Greens
  // start: 25, count: 11 (includes default row)
  // =========================================================
  ["#FFFFFFFF", "#FFFFFFFF", "#FFFFFFFF", "#F7F7F7FF", "#FFFFFFFF"],
  ["#3E4F3EFF", "#656E5BFF", "#FCEFD3FF", "#FBF4DDFF", "#3F523FFF"],
  ["#FFFFFFFF", "#FEF2D4FF", "#33482FFF", "#3E4F3EFF", "#FBF4DDFF"],
  ["#3F523FFF", "#3E4F3EFF", "#FBF4DDFF", "#FEF2D4FF", "#313131FF"],
  ["#FCEFD3FF", "#FBF4DDFF", "#3E4F3EFF", "#3F523FFF", "#656E5BFF"],
  ["#33482FFF", "#3F523FFF", "#FEF2D4FF", "#FCEFD3FF", "#FFFFFFFF"],
  ["#FBF4DDFF", "#FCEFD3FF", "#656E5BFF", "#33482FFF", "#3E4F3EFF"],
  ["#656E5BFF", "#313131FF", "#FFFFFFFF", "#919481FF", "#FEF2D4FF"],
  ["#FEF2D4FF", "#FFFFFFFF", "#3F523FFF", "#656E5BFF", "#33482FFF"],
  ["#919481FF", "#33482FFF", "#FBF4DDFF", "#FEF2D4FF", "#313131FF"],
  ["#313131FF", "#919481FF", "#3E4F3EFF", "#FFFFFFFF", "#FCEFD3FF"],

  // =========================================================
  // FAMILY 4: Natural Greens
  // start: 36, count: 11 (includes default row)
  // =========================================================
  ["#FFFFFFFF", "#FFFFFFFF", "#FFFFFFFF", "#F7F7F7FF", "#FFFFFFFF"],
  ["#3A5A40FF", "#588157FF", "#FCEFD3FF", "#FBF4DDFF", "#5A6F4EFF"],
  ["#FFFFFFFF", "#BBD58EFF", "#344E41FF", "#3A5A40FF", "#FBF4DDFF"],
  ["#5A6F4EFF", "#344E41FF", "#FBF4DDFF", "#BBD58EFF", "#4A4A4AFF"],
  ["#FCEFD3FF", "#FBF4DDFF", "#3A5A40FF", "#5A6F4EFF", "#588157FF"],
  ["#344E41FF", "#5A6F4EFF", "#BBD58EFF", "#FCEFD3FF", "#FFFFFFFF"],
  ["#FBF4DDFF", "#FCEFD3FF", "#588157FF", "#344E41FF", "#3A5A40FF"],
  ["#588157FF", "#4A4A4AFF", "#FFFFFFFF", "#BBD58EFF", "#FCEFD3FF"],
  ["#BBD58EFF", "#FFFFFFFF", "#5A6F4EFF", "#588157FF", "#344E41FF"],
  ["#919481FF", "#344E41FF", "#FBF4DDFF", "#BBD58EFF", "#4A4A4AFF"],
  ["#4A4A4AFF", "#919481FF", "#3A5A40FF", "#FFFFFFFF", "#FCEFD3FF"],

  // =========================================================
  // FAMILY 5: Warm Neutrals
  // start: 47, count: 10 (includes default row)
  // =========================================================
  ["#FFFFFFFF", "#FFFFFFFF", "#FFFFFFFF", "#F7F7F7FF", "#FFFFFFFF"],
  ["#FFFFF2FF", "#F9F9F9FF", "#FFFDD0FF", "#FFFAFAFF", "#F0EAD6FF"],
  ["#FDFCF3FF", "#FFFFF4FF", "#FFF8DCFF", "#FBF7F5FF", "#FFEBCDFF"],
  ["#FFFAF0FF", "#F2F2F2FF", "#FFEFDBFF", "#F9F1F1FF", "#FAF0E6FF"],
  ["#FFF5EEFF", "#FFFFF0FF", "#FDF5E6FF", "#FFFAFAFF", "#FAEBD7FF"],
  ["#FBF7F5FF", "#F9F9F9FF", "#FFFDD0FF", "#FDFCF3FF", "#F0EAD6FF"],
  ["#FFFFF4FF", "#F2F2F2FF", "#FFF8DCFF", "#FFEFDBFF", "#FAF0E6FF"],
  ["#FFFAFAFF", "#FFFFF2FF", "#FFEBCDFF", "#FDF5E6FF", "#F9F1F1FF"],
  ["#FDFCF3FF", "#FFF5EEFF", "#F0EAD6FF", "#FBF7F5FF", "#FFFDD0FF"],
  ["#FFFFF0FF", "#F9F9F9FF", "#FAEBD7FF", "#FFFAF0FF", "#FDF5E6FF"]
];

const paletteFamilies = [
  { name: "Original Icon (Coolors)", start: 1,  count: 13 },
  { name: "Balanced Greens",         start: 14, count: 11 },
  { name: "Softened Greens",         start: 25, count: 11 },
  { name: "Natural Greens",          start: 36, count: 11 },
  { name: "Warm Neutrals",           start: 47, count: 10 }
];

// =========================================================
// Site logic
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

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

  // ---- state ----
  var designMode = false;     // OFF until first logo tap or long-press
  var activeSection = "all";  // "all" | header | hero | services | reviews | contact

  var activeFamilyIndex = 0;  // default family selection (menu will override)
  var paletteIndex = 0;       // index within the active family range

  // ---- apply palette to target ----
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

  function getActivePaletteRow() {
    var fam = paletteFamilies[activeFamilyIndex];
    var idx = fam.start + paletteIndex;
    return palettes[idx];
  }

  function applyCurrentPalette() {
    var p = getActivePaletteRow();
    applyPaletteToTarget(p, activeSection);
  }

  function nextPalette() {
    var fam = paletteFamilies[activeFamilyIndex];
    paletteIndex = (paletteIndex + 1) % fam.count;
    //console.log("family", activeFamilyIndex, "paletteIndex", paletteIndex, "row", paletteFamilies[activeFamilyIndex].start + paletteIndex, getActivePaletteRow());

    applyCurrentPalette();
  }

  // Start at global default (palettes[0])
  applyPaletteToTarget(palettes[0], "all");
  applyCurrentPalette();

  // ---- menu (family picker) ----
  var control = document.getElementById("paletteControl");

  function hideMenu() {
    if (!control) return;
    control.style.display = "none";
  }

  function showMenu() {
    if (!control) return;

    // (Re)build menu buttons from paletteFamilies
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

      // Switch family, apply immediately
      activeFamilyIndex = idx;
      paletteIndex = 0;          // first row of family (your sentinel default)
      activeSection = "all";     // family selection feels global
      designMode = true;
      document.body.classList.add("design-mode");

      applyCurrentPalette();
      hideMenu();
    });

    // Click outside closes menu (design-only convenience)
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

  // ---- logo: tap cycles ALL; long-press (700ms) opens family menu ----
  var logo = document.getElementById("paletteToggle");
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
        setDesignCursors(true);        // add this when you wire cursors
  
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
  
      // When designMode is OFF, logo click should do nothing (freeze behavior)
      if (!designMode) return;
  
      e.preventDefault();
      e.stopPropagation();
  
      activeSection = "all";
      nextPalette();
    });
  }

  // ---- section tap cycles that section (design mode only) ----
  function hookSection(target, selector) {
    var el = document.querySelector(selector);
    if (!el) return;

    //el.style.cursor = "pointer";

    el.addEventListener("click", function (e) {
      if (!designMode) return;

      if (e.target.closest("#paletteToggle")) return;

      e.preventDefault();
      e.stopPropagation();

      activeSection = target;
      nextPalette();
    });
  }

  hookSection("header", ".site-header");
  hookSection("hero", ".hero");
  hookSection("services", "#services");
  hookSection("reviews", "#reviews");
  hookSection("contact", "#contact");

  // ---- disable links in design mode so he doesn't "Get a Quote" by accident ----
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

    var logo = document.getElementById("paletteToggle");
    if (logo) logo.style.cursor = cursor;

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

});
