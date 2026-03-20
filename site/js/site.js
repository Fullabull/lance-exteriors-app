// =========================================================
// Big palette table (ALL 8-digit hex) + family ranges
// =========================================================
//
// palettes[0] MUST mirror the CSS defaults in css/site.css 
// palettes[0] is currently ["#FFFFFFFF", "#FFFFFFFF", "#FFFFFFFF", "#FFFFFFFF", "#FFFFFFFF"],

const palettes = [
  ["#FFFFFFFF", "#FFFFFFFF", "#FFFFFFFF", "#FFFFFFFF", "#FFFFFFFF"],
  ["#FFFFF4FF", "#FFFFF4FF", "#FFFFF4FF", "#FFFFF4FF", "#FFFFF4FF"],
  ["#FFFFF2FF", "#FFFFF2FF", "#FFFFF2FF", "#FFFFF2FF", "#FFFFF2FF"],
  ["#FFFFF0FF", "#FFFFF0FF", "#FFFFF0FF", "#FFFFF0FF", "#FFFFF0FF"],
  ["#FFFAFAFF", "#FFFAFAFF", "#FFFAFAFF", "#FFFAFAFF", "#FFFAFAFF"],
  ["#F9F9F9FF", "#F9F9F9FF", "#F9F9F9FF", "#F9F9F9FF", "#F9F9F9FF"],
  ["#F7F7F7FF", "#F7F7F7FF", "#F7F7F7FF", "#F7F7F7FF", "#F7F7F7FF"],
  ["#F2F2F2FF", "#F2F2F2FF", "#F2F2F2FF", "#F2F2F2FF", "#F2F2F2FF"],
  ["#FDFCF3FF", "#FDFCF3FF", "#FDFCF3FF", "#FDFCF3FF", "#FDFCF3FF"],
  ["#FFFFF4FF", "#FFFFF4FF", "#FFFFF4FF", "#FFFFF4FF", "#FFFFF4FF"],

  ["#FFFDD0FF", "#FFFDD0FF", "#FFFDD0FF", "#FFFDD0FF", "#FFFDD0FF"],
  ["#FFF8DCFF", "#FFF8DCFF", "#FFF8DCFF", "#FFF8DCFF", "#FFF8DCFF"],
  ["#FFFAF0FF", "#FFFAF0FF", "#FFFAF0FF", "#FFFAF0FF", "#FFFAF0FF"],
  ["#FFF5EEFF", "#FFF5EEFF", "#FFF5EEFF", "#FFF5EEFF", "#FFF5EEFF"],
  ["#FFEFDBFF", "#FFEFDBFF", "#FFEFDBFF", "#FFEFDBFF", "#FFEFDBFF"],
  ["#FFEBCDFF", "#FFEBCDFF", "#FFEBCDFF", "#FFEBCDFF", "#FFEBCDFF"],
  ["#FEF5D5FF", "#FEF5D5FF", "#FEF5D5FF", "#FEF5D5FF", "#FEF5D5FF"],
  ["#FEF2D4FF", "#FEF2D4FF", "#FEF2D4FF", "#FEF2D4FF", "#FEF2D4FF"],
  ["#FEF1D6FF", "#FEF1D6FF", "#FEF1D6FF", "#FEF1D6FF", "#FEF1D6FF"],
  ["#FCEFD3FF", "#FCEFD3FF", "#FCEFD3FF", "#FCEFD3FF", "#FCEFD3FF"],

  ["#FBF7F5FF", "#FBF7F5FF", "#FBF7F5FF", "#FBF7F5FF", "#FBF7F5FF"],
  ["#FBF4DDFF", "#FBF4DDFF", "#FBF4DDFF", "#FBF4DDFF", "#FBF4DDFF"],
  ["#FAF0E6FF", "#FAF0E6FF", "#FAF0E6FF", "#FAF0E6FF", "#FAF0E6FF"],
  ["#FAEBD7FF", "#FAEBD7FF", "#FAEBD7FF", "#FAEBD7FF", "#FAEBD7FF"],
  ["#F9F1F1FF", "#F9F1F1FF", "#F9F1F1FF", "#F9F1F1FF", "#F9F1F1FF"],
  ["#F9F0D8FF", "#F9F0D8FF", "#F9F0D8FF", "#F9F0D8FF", "#F9F0D8FF"],
  ["#FDF5E6FF", "#FDF5E6FF", "#FDF5E6FF", "#FDF5E6FF", "#FDF5E6FF"],
  ["#FDF3D6FF", "#FDF3D6FF", "#FDF3D6FF", "#FDF3D6FF", "#FDF3D6FF"],
  ["#F0EAD6FF", "#F0EAD6FF", "#F0EAD6FF", "#F0EAD6FF", "#F0EAD6FF"],
  ["#E2DBC5FF", "#E2DBC5FF", "#E2DBC5FF", "#E2DBC5FF", "#E2DBC5FF"],

  ["#BDBCA7FF", "#BDBCA7FF", "#BDBCA7FF", "#BDBCA7FF", "#BDBCA7FF"],
  ["#BBD58EFF", "#BBD58EFF", "#BBD58EFF", "#BBD58EFF", "#BBD58EFF"],
  ["#919481FF", "#919481FF", "#919481FF", "#919481FF", "#919481FF"],
  ["#656E5BFF", "#656E5BFF", "#656E5BFF", "#656E5BFF", "#656E5BFF"],
  ["#5A6F4EFF", "#5A6F4EFF", "#5A6F4EFF", "#5A6F4EFF", "#5A6F4EFF"],
  ["#588157FF", "#588157FF", "#588157FF", "#588157FF", "#588157FF"],
  ["#4A4A4AFF", "#4A4A4AFF", "#4A4A4AFF", "#4A4A4AFF", "#4A4A4AFF"],
  ["#47593FFF", "#47593FFF", "#47593FFF", "#47593FFF", "#47593FFF"],
  ["#415B38FF", "#415B38FF", "#415B38FF", "#415B38FF", "#415B38FF"],
  ["#3F523FFF", "#3F523FFF", "#3F523FFF", "#3F523FFF", "#3F523FFF"],

  ["#3E4F3EFF", "#3E4F3EFF", "#3E4F3EFF", "#3E4F3EFF", "#3E4F3EFF"],
  ["#3A5A40FF", "#3A5A40FF", "#3A5A40FF", "#3A5A40FF", "#3A5A40FF"],
  ["#3A4D38FF", "#3A4D38FF", "#3A4D38FF", "#3A4D38FF", "#3A4D38FF"],
  ["#344E41FF", "#344E41FF", "#344E41FF", "#344E41FF", "#344E41FF"],
  ["#33482FFF", "#33482FFF", "#33482FFF", "#33482FFF", "#33482FFF"],
  ["#313131FF", "#313131FF", "#313131FF", "#313131FF", "#313131FF"],
  ["#29412AFF", "#29412AFF", "#29412AFF", "#29412AFF", "#29412AFF"],
  ["#263B28FF", "#263B28FF", "#263B28FF", "#263B28FF", "#263B28FF"],
  ["#233A24FF", "#233A24FF", "#233A24FF", "#233A24FF", "#233A24FF"],
  ["#1D311DFF", "#1D311DFF", "#1D311DFF", "#1D311DFF", "#1D311DFF"]
];

const paletteFamilies = [
  { name: "White to Light", start: 0, count: 10 },
  { name: "Light and Creme", start: 10, count: 10 },
  { name: "Skin to Medium", start: 20, count: 10 },
  { name: "Medium to Earth", start: 30, count: 10 },
  { name: "Earth to Dark", start: 40, count: 10 },
  { name: "All (Full Range)", start: 0, count: palettes.length }
];

// =========================================================
// Site logic
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  function isColorDark(hex) {
    // Parse R,G,B
    var r = parseInt(hex.slice(0,2), 16);
    var g = parseInt(hex.slice(2,4), 16);
    var b = parseInt(hex.slice(4,6), 16);
  
    // Perceived brightness (0-255)
    var brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
    return brightness < 128;
  }

/* color persistence starts here */

  // ---- persistence (localStorage + JSON files) ----
  var LS_KEY_STATE = "lanceExteriorsPaletteState";


  (function () {
    // Each tagline has its own min/max display time in seconds
    const taglines = [
      { text: "Roof Protection", min: 7, max: 10 },
      { text: "Roof Moss Removal", min: 7, max: 10 },
      { text: "Roof Moss Prevention", min: 7, max: 10 },
      { text: "Roof Restoration", min: 7, max: 10 },
      { text: "Roof Restoration & Preservation", min: 7, max: 10 },
      { text: "Roof Restoration, Construction, & Demolition", min: 7, max: 10 },
      { text: "Roof Care & Moss Control", min: 7, max: 10 },
      { text: "Roof Cleaning & Care", min: 10, max: 15 },                 // extra time
    //{ text: "Roof Moss Removal & Prevention", min: 10, max: 15 },       // extra time
      { text: "Roof Cleaning & Moss Control", min: 9, max: 12 },
      { text: "Roof Cleaning & Moss Prevention", min: 7, max: 10 },
    //{ text: "Roof Moss Clearing & Prevention", min: 6, max: 10 },
    //{ text: "Roof Moss Removal & Prevention", min: 10, max: 15 },       // extra time
      { text: "Roof Cleaning & Care", min: 10, max: 15 },                 // extra time
      { text: "Roof Moss Removal + Zinc Protection", min: 6, max: 9 },
      { text: "Roof Moss Removal + Zinc Treatment", min: 6, max: 9 },
      { text: "Roof Moss Removal + Long-Term Control", min: 6, max: 9 },
      { text: "Moss Removal + Roof Protection", min: 7, max: 10 },
      { text: "Roof Cleaning & Care", min: 10, max: 15 },                 // extra time
    //{ text: "Roof Moss Removal & Prevention", min: 10, max: 15 },       // extra time
      { text: "Roof Moss Removal + Treatment Included", min: 6, max: 8 },
      { text: "Roof Moss Removal + Deep Treatment Upgrade", min: 6, max: 8 },
      { text: "Roof Moss Removal + Long-Term Treatment Option", min: 6, max: 8 },
      { text: "Architectural Shingle Roof Care", min: 8, max: 11 },
      { text: "Roof Cleaning & Care", min: 10, max: 15 },                 // extra time
    //{ text: "Roof Moss Removal & Prevention", min: 10, max: 15 },       // extra time
      { text: "Architectural Shingle Moss Control", min: 8, max: 11 },
      { text: "Architectural Shingle Moss Removal", min: 8, max: 11 }
    ];
  
    const el = document.getElementById("heroTagline");
    if (!el) return;
  
    function pickAndSchedule() {
      const choice = taglines[Math.floor(Math.random() * taglines.length)];
      el.textContent = choice.text;

      const min = choice.min;
      const max = choice.max;
      const delaySeconds = min + Math.random() * (max - min); // random between min/max
      const delayMs = delaySeconds * 1000;
  
      // DEBUG
      //console.log("Tagline now:", choice.text, "for", delaySeconds.toFixed(1), "sec");
  
      setTimeout(pickAndSchedule, delayMs);
    }
  
    pickAndSchedule(); // kick it off once on load
  })();

  function getCurrentPaletteState() {
    return {
      designMode: designMode,
      activeFamilyIndex: activeFamilyIndex,
      globalIndex: globalIndex,
      absTone: {
        header: absTone.header,
        hero: absTone.hero,
        services: absTone.services,
        reviews: absTone.reviews,
        contact: absTone.contact
      },
      textColors: {
        header: textColors.header,
        hero: textColors.hero,
        services: textColors.services,
        reviews: textColors.reviews,
        contact: textColors.contact
      },
      lastTextHex: lastTextHex
    };
  }

  function applyPaletteState(state, options) {
    if (!state) return;
    options = options || {};

    // Clamp / validate family
    var famIdx =
      typeof state.activeFamilyIndex === "number" ? state.activeFamilyIndex : 0;
    if (famIdx < 0 || famIdx >= paletteFamilies.length) famIdx = 0;
    activeFamilyIndex = famIdx;

    var fam = paletteFamilies[activeFamilyIndex];
    var maxIndex = fam.count - 1;

    // Clamp / validate global index (family-relative)
    var gIndex =
      typeof state.globalIndex === "number" ? state.globalIndex : 0;
    if (gIndex < 0) gIndex = 0;
    if (gIndex > maxIndex) gIndex = maxIndex;
    globalIndex = gIndex;

    var sections = ["header", "hero", "services", "reviews", "contact"];

    for (var i = 0; i < sections.length; i++) {
      var key = sections[i];

      var abs =
        state.absTone && typeof state.absTone[key] === "number"
          ? state.absTone[key]
          : fam.start + globalIndex;

      if (abs < 0) abs = 0;
      if (abs >= palettes.length) abs = palettes.length - 1;
      absTone[key] = abs;

      // derive family-relative local index from absolute tone
      var rel = abs - fam.start;
      if (rel < 0) rel = 0;
      if (rel > maxIndex) rel = maxIndex;
      localIndex[key] = rel;

      var row = palettes[abs];
      applyPaletteToTarget(row, key);
    }

    // After backgrounds are applied, re-apply any saved text colors
    if (state.textColors) {
      for (var j = 0; j < sections.length; j++) {
        var key2 = sections[j];
        var savedText = state.textColors[key2];
    
        if (typeof savedText === "string" && savedText) {
          applySectionTextColor(key2, savedText);
        } else {
          // No saved text override for this section: clear any inline color
          clearSectionTextColor(key2);
        }
      }
    } else {
      // No textColors block at all in this state: clear all overrides
      for (var k = 0; k < sections.length; k++) {
        clearSectionTextColor(sections[k]);
      }
    }
    
    // Restore lastTextHex if present
    if (typeof state.lastTextHex === "string" && state.lastTextHex) {
      lastTextHex = state.lastTextHex;
    } else {
      lastTextHex = null;
    }

    // Design mode handling:
    var shouldDesignMode =
      options.forceDesignModeOff ? false : !!state.designMode;

    designMode = shouldDesignMode;

    if (designMode) {
      document.body.classList.add("design-mode");
      setDesignCursors(true);
    } else {
      document.body.classList.remove("design-mode");
      setDesignCursors(false);
    }

    updateAllSectionToneOverlays();
    recomputeHasLocalChanges();
    updatePaletteIndexOverlay();
  }

  function saveLocalState() {
    try {
      var s = getCurrentPaletteState();
      window.localStorage.setItem(LS_KEY_STATE, JSON.stringify(s));
    } catch (err) {
      // localStorage might be blocked; ignore
    }
  }

  function loadLocalState() {
    try {
      var raw = window.localStorage.getItem(LS_KEY_STATE);
      if (!raw) return;
      var s = JSON.parse(raw);
      applyPaletteState(s);
    } catch (err) {
      // ignore parse / storage errors
    }
  }

  function loadJsonState(url, onDone) {
    // Add a cache-busting query param so we always get fresh JSON
    var sep = url.indexOf("?") === -1 ? "?" : "&";
    var realUrl = url + sep + "cb=" + Date.now();
  
    fetch(realUrl, { cache: "no-store" })
      .then(function (resp) {
        if (!resp.ok) throw new Error("HTTP " + resp.status);
        return resp.json();
      })
      .then(function (json) {
        // For shared JSON, force design mode OFF by default
        applyPaletteState(json, { forceDesignModeOff: true });
        if (onDone) onDone(true);
      })
      .catch(function () {
        if (onDone) onDone(false);
      });
  }

  function exitDesignModeAndSave() {
    designMode = false;
    document.body.classList.remove("design-mode");
    setDesignCursors(false);
    hasLocalChanges = false;

    // Clear any pending "click a section" actions
    armedAction = null;
    pendingTextColor = null;

    updatePaletteIndexOverlay();
    updateAllSectionToneOverlays();
    saveLocalState();
    hideMenu();
  }

  function resetToDefaults() {
    // Clear manual text overrides BEFORE loading defaults
    clearSectionTextColor("header");
    clearSectionTextColor("hero");
    clearSectionTextColor("services");
    clearSectionTextColor("reviews");
    clearSectionTextColor("contact");
  
    armedAction = null;
    pendingTextColor = null;
    lastTextHex = null;
  
    // 1) Load baseline defaults
    loadJsonState("defaultColors.json", function (ok) {
      if (!ok) {
        window.alert(
          "defaultColors.json not found. Place it next to index.html to use Reset."
        );
        return;
      }
  
      // 2) Then overlay shared/dev palette if it exists
      loadJsonState("currentColors.json", function (ok2) {
        // If currentColors.json is missing or bad, we just keep defaults.
        // No extra alert needed.
  
        exitDesignModeAndSave();
        window.alert("Palette and text colors reset.");
      });
    });
  }

  function saveCurrentColorsToFile() {
    var state = getCurrentPaletteState();
  
    // Do not force all users into design mode when they load the shared JSON
    state.designMode = false;
  
    var json = JSON.stringify(state, null, 2);
    var blob = new Blob([json], { type: "application/json" });
    var url = URL.createObjectURL(blob);
  
    var a = document.createElement("a");
    a.href = url;
    a.download = "currentColors.json";
  
    a.click();  // same pattern as your working test
    URL.revokeObjectURL(url);
  
    exitDesignModeAndSave();
    window.alert("Your palette has been saved locally.");

  }

  function saveCurrentColorsToFile_BROKEN() {
    var state = getCurrentPaletteState();

    // Do not force all users into design mode when they load the shared JSON
    state.designMode = false;

    var json = JSON.stringify(state, null, 2);
    var blob = new Blob([json], { type: "application/json" });
    var url = URL.createObjectURL(blob);

    var a = document.createElement("a");
    a.href = url;
    a.download = "currentColors.json";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);

    saveLocalState();
    window.alert(
      "Downloaded currentColors.json."
    );
  }



/* color persistence ends here */

  function updatePaletteIndexOverlay() {
    var el = document.getElementById("paletteIndexOverlay");
    if (!el) return;

    if (!designMode) {
      el.style.display = "none";
      return;
    }

    var fam = paletteFamilies[activeFamilyIndex];
    var globalAbs = fam.start + globalIndex;  // absolute row in palettes[]
    var toneNumber = globalAbs + 1;           // 1-based for display

    el.textContent = fam.name + " · Tone " + toneNumber + " / " + palettes.length;
    el.style.display = "block";
  }


  function recomputeHasLocalChanges() {
    var fam = paletteFamilies[activeFamilyIndex];
    var globalAbs = fam.start + globalIndex; // absolute tone for the logo

    var keys = ["header", "hero", "services", "reviews", "contact"];
    var dirty = false;

    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      if (absTone[k] !== globalAbs) {
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

    // Use the absolute tone index for this section
    var abs = absTone[target] || 0;
    var toneNumber = abs + 1; // 1-based

    el.textContent = "Tone " + toneNumber;
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

  function parseHexColorInput(rawInput) {
    if (!rawInput) return null;

    var input = String(rawInput).trim();

    if (!input) return null;

    // strip leading #
    if (input.charAt(0) === "#") {
      input = input.slice(1);
    }

    // allow commas or multiple spaces
    input = input.replace(/,/g, " ");
    var parts = input.split(/\s+/).filter(Boolean);

    var hex = "";

    if (parts.length === 1) {
      // expecting "FFCC99"
      hex = parts[0];
      if (hex.length !== 6) return null;
    } else if (parts.length === 3) {
      // expecting "FF CC 99"
      hex = parts.join("");
      if (hex.length !== 6) return null;
    } else {
      return null;
    }

    hex = hex.toUpperCase();
    if (!/^[0-9A-F]{6}$/.test(hex)) return null;

    return "#" + hex;
  }

  function getPaletteRowByIndex(idxInFamily) {
    var fam = paletteFamilies[activeFamilyIndex];
    return palettes[fam.start + idxInFamily];
  }

  function applyGlobalAll() {
    var fam = paletteFamilies[activeFamilyIndex];
    var globalAbs = fam.start + globalIndex; // absolute tone for logo

    // Sync all locals to the current global tone (family-relative index)
    localIndex.header   = globalIndex;
    localIndex.hero     = globalIndex;
    localIndex.services = globalIndex;
    localIndex.reviews  = globalIndex;
    localIndex.contact  = globalIndex;

    // Update absolute tones for every section
    absTone.header   = globalAbs;
    absTone.hero     = globalAbs;
    absTone.services = globalAbs;
    absTone.reviews  = globalAbs;
    absTone.contact  = globalAbs;

    // Apply that tone to all sections
    var row = palettes[globalAbs];
    applyPaletteToTarget(row, "all");

    updatePaletteIndexOverlay();
    updateAllSectionToneOverlays();
    recomputeHasLocalChanges();   // all sections now in sync
  }

  function applyLocal(target) {
    var fam = paletteFamilies[activeFamilyIndex];
    var idxInFamily = localIndex[target] || 0;

    // Compute absolute tone index for this section
    var abs = fam.start + idxInFamily;
    if (abs < 0) abs = 0;
    if (abs >= palettes.length) abs = palettes.length - 1;

    absTone[target] = abs;

    var row = palettes[abs];
    applyPaletteToTarget(row, target);
    updateSectionToneOverlay(target);
    recomputeHasLocalChanges();   // keep hasLocalChanges in sync
    // NO overlay update for global here (logo counter must not change)
  }

  // ---- state ----
  var hasLocalChanges = false;
  var designMode = false; // OFF until first logo tap or long-press
  var activeFamilyIndex = 0; // default family selection (menu will override)
  var globalIndex = 0; // ONLY the logo increments this (overlay uses this)

  var localIndex = {
    header: 0,
    hero: 0,
    services: 0,
    reviews: 0,
    contact: 0
  };

  // Absolute tone index (0..palettes.length-1) per section
  var absTone = {
    header: 0,
    hero: 0,
    services: 0,
    reviews: 0,
    contact: 0
  };

  // Per-section text colors (manual overrides in design mode)
  var textColors = {
    header: null,
    hero: null,
    services: null,
    reviews: null,
    contact: null
  };

  // Design-mode "armed" action for next section click
  var armedAction = null;        // e.g. "setTextHex"
  var pendingTextColor = null;   // e.g. "#FFCC99"

  // Remember the last successfully-entered hex color (for the prompt)
  var lastTextHex = null;

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

      var cardColor =
        b >= threshold ? darkenHex8(base, darkAmt) : lightenHex8(base, lightAmt);

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
      doHeader();
      doHero();
      doServices();
      doReviews();
      doContact();
      return;
    }

    if (target === "header") doHeader();
    else if (target === "hero") doHero();
    else if (target === "services") doServices();
    else if (target === "reviews") doReviews();
    else if (target === "contact") doContact();
  }

  function applySectionTextColor(target, hexColor) {
    if (!hexColor) return;

    var selector = null;

    if (target === "header") {
      selector = ".site-header";
    } else if (target === "hero") {
      selector = ".hero";
    } else if (target === "services") {
      selector = "#services";
    } else if (target === "reviews") {
      selector = "#reviews";
    } else if (target === "contact") {
      selector = "#contact";
    } else {
      return;
    }

    var el = document.querySelector(selector);
    if (!el) return;

    el.style.color = hexColor;

    // NEW: when header text color changes, mirror it to footer
    if (target === "header") {
      var footer = document.querySelector(".site-footer");
      if (footer) footer.style.color = hexColor;
    }

    // Update in-memory state for persistence
    textColors[target] = hexColor;
  }

  // NEW: clear inline text color for a section (back to CSS defaults)
  function clearSectionTextColor(target) {
    var selector = null;
  
    if (target === "header") {
      selector = ".site-header";
    } else if (target === "hero") {
      selector = ".hero";
    } else if (target === "services") {
      selector = "#services";
    } else if (target === "reviews") {
      selector = "#reviews";
    } else if (target === "contact") {
      selector = "#contact";
    } else {
      return;
    }
  
    var el = document.querySelector(selector);
    if (!el) return;
  
    el.style.color = "";   // remove inline override, let CSS take over
    textColors[target] = null;
 
    // Also clear footer if we’re clearing the header text color
    if (target === "header") {
    var footer = document.querySelector(".site-footer");
      if (footer) footer.style.color = "";
    }
  
  }

  // Start at global default (palettes[0])
  applyGlobalAll();


/* more color persistence code starts here */
  // After baseline, try to load shared dev palette, then local overrides
  loadJsonState("currentColors.json", function () {
    // Whether dev JSON exists or not, overlay my personal last state (if any)
    loadLocalState();
  });


/* more color persistence code ends here */

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

    // Spacer-ish
    var hr = document.createElement("div");
    hr.style.margin = "4px 0";
    control.appendChild(hr);

    // Save current colors (download JSON)
    var saveBtn = document.createElement("button");
    saveBtn.type = "button";
    saveBtn.textContent = "Save Colors";
    saveBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      saveCurrentColorsToFile();
    });


    control.appendChild(saveBtn);

    // Reset colors (via defaultColors.json)
    var resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.textContent = "Reset Colors";
    resetBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      resetToDefaults();
    });
    control.appendChild(resetBtn);

    // Set text color via hex input (applied on next section click)
    var setTextBtn = document.createElement("button");
    setTextBtn.type = "button";
    setTextBtn.textContent = "Set Text Color (hex)";
    setTextBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (!designMode) return;

    var baseMessage =
      "Enter text color as hex.\n\nExamples:\n- FFCC99\n- FF CC 99\n- #FFFFFF";

    if (lastTextHex) {
      baseMessage += "\n\nLast used: " + lastTextHex;
    }

    var defaultValue = lastTextHex
      ? lastTextHex.replace(/^#/, "")
      : "";

    var userInput = window.prompt(baseMessage, defaultValue);

      if (userInput === null) {
        // user cancelled
        return;
      }

      var parsed = parseHexColorInput(userInput);
      if (!parsed) {
        window.alert(
          "Invalid hex color. Please use either:\n" +
          "- One 6-digit hex (e.g. FFCC99)\n" +
          "- Three 2-digit hex values (e.g. FF CC 99)"
        );
        return;
      }

    // Remember this as the last chosen text color
    lastTextHex = parsed;
    armedAction = "setTextHex";
    pendingTextColor = parsed;
  
    // Persist the updated state (including lastTextHex)
    saveLocalState();
  
    // NEW: close the design menu after OK
    hideMenu();
  
    // console.log("Text color armed:", parsed);
    });

    control.appendChild(setTextBtn);

    // Exit
    var exitBtn = document.createElement("button");
    exitBtn.type = "button";
    exitBtn.textContent = "Exit Design Mode";
    exitBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      exitDesignModeAndSave();
    });

    control.appendChild(exitBtn);
    control.style.display = "block";
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

      var keys = ["header", "hero", "services", "reviews", "contact"];

      // Snapshot old family + global tone
      var oldFam = paletteFamilies[activeFamilyIndex];
      var oldGlobalIndex = globalIndex;
      var oldGlobalAbs = oldFam.start + oldGlobalIndex;

      // Snapshot absolute tones for each section BEFORE we change anything
      var absSnapshot = {
        header: absTone.header,
        hero: absTone.hero,
        services: absTone.services,
        reviews: absTone.reviews,
        contact: absTone.contact
      };

      // Detect whether there WERE local changes in the old family
      var hadLocalChanges = false;
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        if (absSnapshot[k] !== oldGlobalAbs) {
          hadLocalChanges = true;
          break;
        }
      }

      // Switch to the new family
      activeFamilyIndex = idx;
      var fam = paletteFamilies[activeFamilyIndex];
      var maxIndex = fam.count - 1;

      designMode = true;
      document.body.classList.add("design-mode");
      setDesignCursors(true);

      // New family always starts at its first tone for the logo
      globalIndex = 0;
      if (globalIndex > maxIndex) globalIndex = maxIndex;
      var newGlobalAbs = fam.start + globalIndex;

      if (!hadLocalChanges) {
        // Case 1: everything was in sync with the old logo.
        // Just move the whole page to the first tone of the new family.
        applyGlobalAll();  // updates absTone, overlays, and hasLocalChanges
      } else {
        // Case 2: some sections were custom.
        // Sections that matched the old logo track the NEW logo.
        // Custom sections keep their original absolute tone.

        for (var j = 0; j < keys.length; j++) {
          var k2 = keys[j];
          var oldAbs = absSnapshot[k2];

          if (oldAbs === oldGlobalAbs) {
            // This section was in sync with the logo before the switch.
            // It should now follow the NEW family’s first tone.
            absTone[k2] = newGlobalAbs;
            localIndex[k2] = globalIndex;  // family-relative
          } else {
            // Custom section: preserve its absolute tone across families.
            absTone[k2] = oldAbs;

            // Choose a safe family-relative index for future clicks.
            // If the tone lies outside this family's range, clamp to nearest.
            var candidate = oldAbs - fam.start;
            if (candidate < 0) candidate = 0;
            if (candidate > maxIndex) candidate = maxIndex;
            localIndex[k2] = candidate;
          }
        }

        // Repaint each section according to absTone
        for (var m = 0; m < keys.length; m++) {
          var k3 = keys[m];
          var row = palettes[absTone[k3]];
          applyPaletteToTarget(row, k3);
        }

        updateAllSectionToneOverlays();
        recomputeHasLocalChanges();
        updatePaletteIndexOverlay();
      }

      hideMenu();
    });

    // Click outside closes menu (design-only convenience)
    document.addEventListener(
      "click",
      function (e) {
        if (!designMode) return;
        if (!control || control.style.display === "none") return;

        var insideMenu = e.target.closest("#paletteControl");
        var onLogo = e.target.closest("#paletteToggle") || e.target.closest("#paletteToggleMobile");
        if (!insideMenu && !onLogo) {
          e.preventDefault();
          e.stopPropagation();
          hideMenu();
        }
      },
      true
    );
  }

  // ---- logo(s): tap cycles ALL; long-press (700ms) opens family menu ----
  var logoMain   = document.getElementById("paletteToggle");
  var logoMobile = document.getElementById("paletteToggleMobile");
  
  var logos = [];
  if (logoMain)   logos.push(logoMain);
  if (logoMobile) logos.push(logoMobile);
  
  logos.forEach(function (logoEl) {
    logoEl.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
  });
  
  var pressTimer = null;
  var longPressFired = false;
  
  function clearPressTimer() {
    if (pressTimer) {
      clearTimeout(pressTimer);
      pressTimer = null;
    }
  }
  
  logos.forEach(function (logoEl) {
    logoEl.addEventListener("pointerdown", function () {
      longPressFired = false;
      clearPressTimer();
  
      pressTimer = setTimeout(function () {
        longPressFired = true;
  
        designMode = true;
        document.body.classList.add("design-mode");
        setDesignCursors(true);
  
        updatePaletteIndexOverlay();
        updateAllSectionToneOverlays();
        saveLocalState()
        showMenu();
      }, 700);
    });
  
    logoEl.addEventListener("pointerup", clearPressTimer);
    logoEl.addEventListener("pointerleave", clearPressTimer);
    logoEl.addEventListener("pointercancel", clearPressTimer);
  
    logoEl.addEventListener("click", function (e) {
      if (longPressFired) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
  
      // When designMode is OFF, logo click should do nothing (freeze behavior)
      if (!designMode) return;
  
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
  
      applyGlobalAll();
      hasLocalChanges = false;
      saveLocalState()
    });
  });

  // ---- section tap cycles that section (design mode only) ----
  function hookSection(target, selector) {
    var el = document.querySelector(selector);
    if (!el) return;
  
    el.addEventListener("click", function (e) {
      if (!designMode) return;
  
      // Don’t let clicks on the logo bubble into here
      if (e.target.closest("#paletteToggle") || e.target.closest("#paletteToggleMobile")) {
        return;
      }
  
      e.preventDefault();
      e.stopPropagation();
  
      // 1) TEXT-BRUSH MODE: only change text color, NEVER the background
      if (armedAction === "setTextHex" && pendingTextColor) {
        applySectionTextColor(target, pendingTextColor);
        saveLocalState();
        return; // <- THIS guarantees no tone / background changes
      }
  
      // 2) NORMAL MODE: cycle this section’s tone within the current family
      var fam = paletteFamilies[activeFamilyIndex];
      localIndex[target]++;
      if (localIndex[target] >= fam.count) localIndex[target] = 0;
  
      applyLocal(target);   // background update happens here
      saveLocalState();
    });
  }
  
  hookSection("header", ".site-header");
  hookSection("hero", ".hero");
  hookSection("services", "#services");
  hookSection("reviews", "#reviews");
  hookSection("contact", "#contact");

  // ---- disable links in design mode so he doesn't "Get a Quote" by accident ----
  document.addEventListener(
    "click",
    function (e) {
      if (!designMode) return;

      var a = e.target.closest("a");
      if (a) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    true
  );

  function setDesignCursors(on) {
    var cursor = on ? "pointer" : "default";
  
    // Both logos: desktop + tiny-mobile
    var logoMain   = document.getElementById("paletteToggle");
    var logoMobile = document.getElementById("paletteToggleMobile");
  
    if (logoMain)   logoMain.style.cursor   = cursor;
    if (logoMobile) logoMobile.style.cursor = cursor;
  
    // Clickable sections in design mode
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
