const palettes = [
  // palettes[0] = current/default site settings
  ["#FFFFFFFF", "#FFFFFFFF", "#FFFFFFFF", "#F7F7F7FF", "#FFFFFFFF"],
  // palettes[1..12] = extracted from coolors_creme.txt (CSS HEX with alpha)
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
  ["#919481FF", "#656E5BFF", "#1D311DFF", "#47593FFF", "#FDF3D6FF"]
];

// Footer year
document.addEventListener("DOMContentLoaded", function () {
  
  var paletteTarget = "all"; // design only

  var y = document.getElementById("year");
  if (y) {
    y.textContent = new Date().getFullYear();
  }

  var control = document.getElementById("paletteControl");
  if (control) {
    control.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;
  
      paletteTarget = btn.getAttribute("data-target");
      console.log("Palette target set to:", paletteTarget);
    });
  }

function withAlpha(hex, alphaHex) {
  // expects #RRGGBBAA or #RRGGBB
  if (hex.length === 9) return hex.slice(0, 7) + alphaHex;
  if (hex.length === 7) return hex + alphaHex;
  return hex;
}

function normHex8(hex) {
  // ensure #RRGGBBAA
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

  // perceived brightness (simple/standard-ish)
  return (r * 299 + g * 587 + b * 114) / 1000; // 0..255
}

function lightenHex8(hex, amt) {
  // amt: 0..1 (0 = no change, 1 = white)
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
  // amt: 0..1 (0 = no change, 1 = black)
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

  // ---- Palette cycler ----
  var paletteIndex = 0;
  var designMode = false;     // OFF by default
  var activeSection = "all";  // "all" or: header hero services reviews contact

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

  function applyPalette(p) {
    applyPaletteToTarget(p, activeSection);
  }

  // Start at your default (palettes[0])
  if (typeof palettes !== "undefined" && palettes.length) {
    applyPalette(palettes[0]);
  }

  var btn = document.getElementById("paletteToggle");
  if (btn && typeof palettes !== "undefined" && palettes.length) {
    btn.style.cursor = "pointer";

    btn.addEventListener("click", function (e) {
      e.preventDefault();

      // Toggle design mode ON the first click; subsequent clicks keep it ON unless you toggle it off elsewhere
      designMode = true;
      document.body.classList.add("design-mode");

      // Logo ALWAYS cycles ALL sections
      activeSection = "all";

      paletteIndex = (paletteIndex + 1) % palettes.length;
      applyPalette(palettes[paletteIndex]);
    });
  }

  function hookSection(target, selector) {
    var el = document.querySelector(selector);
    if (!el) return;
  
    el.style.cursor = "pointer";
  
    el.addEventListener("click", function (e) {
      if (!designMode) return;
  
      // In design mode, section click cycles THAT section only
      e.preventDefault();
      e.stopPropagation();
  
      activeSection = target;
  
      paletteIndex = (paletteIndex + 1) % palettes.length;
      applyPalette(palettes[paletteIndex]);
    });
  }
  
  hookSection("header", ".site-header");
  hookSection("hero", ".hero");
  hookSection("services", "#services");
  hookSection("reviews", "#reviews");
  hookSection("contact", "#contact");

  document.addEventListener("click", function (e) {
    if (!designMode) return;
  
    var a = e.target.closest("a");
    if (a) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

});
