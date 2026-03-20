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

  function updatePaletteIndexOverlay() {
    var el = document.getElementById("paletteIndexOverlay");
    if (!el) return;
  
    if (!designMode) {
      el.style.display = "none";
      return;
    }
  
    var fam = paletteFamilies[activeFamilyIndex];
    var absoluteIndex = fam.start + globalIndex + 1;
    el.textContent = fam.name + " · Tone " + absoluteIndex + " / " + palettes.length;
    el.style.display = "block";
  }
  
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
  
  function updateSectionToneOverlay(target) {
    var el = document.getElementById("tone-" + target);
    if (!el) return;
  
    // If we’re not in design mode, hide/clear the label
    if (!designMode) {
      el.textContent = "";
      return;
    }
  
    var fam = paletteFamilies[activeFamilyIndex];
    var idx = localIndex[target] || 0;      // local tone index for that section
    var absoluteIndex = fam.start + idx + 1; // 1..N across the big table
  
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

  function getPaletteRowByIndex(idxInFamily) {
        var fam = paletteFamilies[activeFamilyIndex];
        return palettes[fam.start + idxInFamily];
  }

  function applyGlobalAll() {
    // Sync all locals to the current global tone
    localIndex.header   = globalIndex;
    localIndex.hero     = globalIndex;
    localIndex.services = globalIndex;
    localIndex.reviews  = globalIndex;
    localIndex.contact  = globalIndex;
  
    // Apply that tone to all sections
    var row = getPaletteRowByIndex(globalIndex);

    applyPaletteToTarget(row, "all");
    updatePaletteIndexOverlay();
    updateAllSectionToneOverlays();
    recomputeHasLocalChanges();   // <- all sections now in sync
  }
  
  
  function applyLocal(target) {
    applyPaletteToTarget(getPaletteRowByIndex(localIndex[target]), target);
    updateSectionToneOverlay(target);
    recomputeHasLocalChanges();   // <- all sections now in sync
    // NO overlay update here (because global counter must not change)
  }

  // ---- state ----
  var hasLocalChanges = false;
  var designMode = false;     // OFF until first logo tap or long-press
  var activeFamilyIndex = 0;  // default family selection (menu will override)
  var globalIndex = 0; // ONLY the logo increments this (overlay uses this)

  var localIndex = {
        header: 0,
        hero: 0,
        services: 0,
        reviews: 0,
        contact: 0
  };


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
      hasLocalChanges = false;
      updatePaletteIndexOverlay();
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
  
    // -------------------------------
    // Switch family, preserving tones
    // -------------------------------
    var oldGlobalIndex = globalIndex;
    var fam = paletteFamilies[idx];
    var maxIndex = fam.count - 1;
  
    // Clamp global index to this family's range
    if (globalIndex > maxIndex) {
      globalIndex = maxIndex;
    }
  
    // For each section:
    // - If it was in sync with the *old* globalIndex, let it track the new global.
    // - If it was out of sync, DO NOT change its counter.
    var keys = ["header", "hero", "services", "reviews", "contact"];
  
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      var li = localIndex[k] || 0;
  
      if (li === oldGlobalIndex) {
        // This section was in sync with the logo before switching families.
        // Keep it in sync with the new (possibly clamped) globalIndex.
        // (globalIndex is already <= maxIndex, so no extra clamp needed.)
        localIndex[k] = globalIndex;
      } else {
        // This section was out of sync (user changed it); do not touch its counter.
        // It will keep its own localIndex across family changes.
      }
    }
  
    // Now actually switch families
    activeFamilyIndex = idx;
    designMode = true;
    document.body.classList.add("design-mode");
    setDesignCursors(true);
  
    // Paint based on current indices:
    // - If nothing is out of sync anymore, just sweep with the global tone.
    // - If some sections are out of sync, repaint each from its own localIndex.
    recomputeHasLocalChanges();
  
    if (!hasLocalChanges) {
      // everything matches the logo; one clean sweep
      applyGlobalAll();
    } else {
      // at least one section is custom; re-apply per section
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
    
      // When designMode is OFF, logo click should do nothing (freeze behavior)
      if (!designMode) return;
    
      // Only warn if the user actually clicked a section since the last sweep
      if (hasLocalChanges) {
        var ok = window.confirm(
          "This will reset your section tones to match the logo tone. Continue?"
        );
        if (!ok) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
      }
    
      e.preventDefault();
      e.stopPropagation();
    
      var fam = paletteFamilies[activeFamilyIndex];
      globalIndex = (globalIndex + 1) % fam.count;
    
      applyGlobalAll();      // your existing global sweep
      hasLocalChanges = false;  // we just intentionally overwrote sections
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

      var fam = paletteFamilies[activeFamilyIndex];
      localIndex[target]++;
      if (localIndex[target] >= fam.count) localIndex[target] = 0;

      applyLocal(target);

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
  updatePaletteIndexOverlay();

});
