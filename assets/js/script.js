/**
 * @file        script.js
 * @description Master-Optimized Core for Elite Vault v8.2.9
 *              Search Feedback & Instant Sync
 * @author      Frans Marcellino
 * @status      W3C Compliant & PageSpeed Optimized (Universal Excellence Edition)
 */

"use strict";

/* ══════════════════════════════════════
   1. VAULT DATA — Single Source of Truth
   ══════════════════════════════════════ */
const VAULT_DATA = {
  owner: {
    firstName: "FRANS",
    lastName:  "MARCELLINO",
    email:     "fransmarselinosroyer@gmail.com",
  },
  content: {
    heroTitle: "Architecting Digital Sovereignty.",
    footer:    "© 2026 FRANS MARCELLINO — ALL RIGHTS RESERVED",
  },
  products: [
    {
      name:  "Titan Core",
      price: "$1,290",
      desc:  "Enterprise SaaS Framework.",
      // FIX: spaces removed → kebab-case filename
      img:   "assets/img/titan-core.webp",
      // FIX: explicit intrinsic dimensions — matches aspect-ratio: 4/3 at 320px card min-width
      imgW:  640,
      imgH:  480,
    },
    {
      name:  "Quantum UI",
      price: "$750",
      desc:  "Kinetic React Components.",
      img:   "assets/img/quantum-ui.webp",
      imgW:  640,
      imgH:  480,
    },
    {
      name:  "SecureAuth X",
      price: "$490",
      desc:  "Zero-Knowledge Auth Suite.",
      img:   "assets/img/secure-auth-x.webp",
      imgW:  640,
      imgH:  480,
    },
    {
      name:  "Nebula AI",
      price: "$2,999",
      desc:  "Neural Integration Engine.",
      img:   "assets/img/nebula-ai.webp",
      imgW:  640,
      imgH:  480,
    },
    {
      name:  "Apex CMS",
      price: "$1,800",
      desc:  "Headless Content Engine.",
      img:   "assets/img/apex-cms.webp",
      imgW:  640,
      imgH:  480,
    },
    {
      name:  "Zenith ERP",
      price: "$4,500",
      desc:  "Global Logistics Logic.",
      img:   "assets/img/zenith-erp.webp",
      imgW:  640,
      imgH:  480,
    },
    {
      name:  "Vortex DB",
      price: "$980",
      desc:  "Real-time Vector Database.",
      img:   "assets/img/vortex-db.webp",
      imgW:  640,
      imgH:  480,
    },
    {
      name:  "Cipher Mesh",
      price: "$1,100",
      desc:  "P2P Encryption Layer.",
      img:   "assets/img/cipher-mesh.webp",
      imgW:  640,
      imgH:  480,
    },
  ],
  menu: [
    { label: "Home",  id: "home"   },
    { label: "Vault", id: "market" },
    { label: "About", id: "about"  },
    { label: "FAQ",   id: "faq"    },
  ],
  faq: [
    {
      q: "How is the code architecture and performance verified?",
      a: "Our technical integrity is paramount. This website has passed rigorous W3C Validation (HTML5 & CSS3) and is optimized for maximum Google PageSpeed scores.",
    },
    {
      q: "What components are included in the acquisition package?",
      a: "Upon a successful transaction, you will receive a structured .ZIP Digital Archive containing: Optimized Core Source Code (HTML5, CSS3, JS), Operational Documentation (README) for implementation, and an Official License Certificate.",
    },
    {
      q: "What are the legal restrictions of this license?",
      a: "This license is exclusive for personal use or client projects. RESELLING, redistributing, or broadcasting this asset as a standalone product on any marketplace is STRICTLY PROHIBITED.",
    },
    {
      q: "How secure is my financial data during the transaction?",
      a: "All payments are managed by Trusted Digital Marketplaces via global security infrastructure (SSL/TLS). We do not store or have access to your sensitive banking data.",
    },
    {
      q: "Why is the initial procedure conducted via Email?",
      a: "We implement Email-Inquiry protocols to guarantee client privacy and prevent data exposure on public forms. This ensures a secure, private, and personal assistance path.",
    },
    {
      q: "How can I contact technical support or the operator?",
      a: "We are committed to professional support. For specific asset inquiries or technical assistance, contact our operator directly at: <a href='mailto:fransmarselinosroyer@gmail.com' style='color:var(--primary); font-weight:bold; text-decoration:underline;'>fransmarselinosroyer@gmail.com</a>.",
    },
  ],
};

/* ══════════════════════════════════════
   2. STATE
   ══════════════════════════════════════ */
let curN = "";
let curP = "";
let selectedGateway = "PayPal";

/* ══════════════════════════════════════
   3. CONSTANTS — Cached DOM References
   ══════════════════════════════════════ */
const cursorEl   = document.getElementById("cursor");
const AI_CLASSES = [
  "ai-vid-1", "ai-vid-2", "ai-vid-3", "ai-vid-4",
  "ai-vid-5", "ai-vid-6", "ai-vid-7", "ai-vid-8",
];

/* ══════════════════════════════════════
   4. CURSOR ENGINE
   ══════════════════════════════════════ */
document.addEventListener("mousemove", (e) => {
  if (!cursorEl) return;
  window.requestAnimationFrame(() => {
    cursorEl.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  });
}, { passive: true });

/* ══════════════════════════════════════
   5. NAVIGATION
   ══════════════════════════════════════ */
function navigateTo(id) {
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.remove("active");
    p.style.display = "none";
  });

  const target = document.getElementById(id);
  if (target) {
    target.style.display = "block";
    requestAnimationFrame(() => target.classList.add("active"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  toggleMenu(true);
}

/* ══════════════════════════════════════
   6. THEME TOGGLE
   ══════════════════════════════════════ */
function toggleTheme() {
  const isLight = document.body.classList.toggle("light-mode");
  localStorage.setItem("theme", isLight ? "light" : "dark");

  const btn = document.getElementById("theme-btn");
  if (btn) btn.innerText = isLight ? "DARK MODE" : "LIGHT MODE";

  applyStructuralColoring();
}

/* ══════════════════════════════════════
   7. DROPDOWN MENU
   ══════════════════════════════════════ */
function toggleMenu(forceClose = false, event = null) {
  if (event) event.stopPropagation();

  const dropdown = document.getElementById("dropdown");
  if (!dropdown) return;

  if (forceClose || dropdown.classList.contains("active")) {
    dropdown.classList.remove("active");
    setTimeout(() => {
      if (!dropdown.classList.contains("active")) dropdown.style.display = "none";
    }, 300);
  } else {
    dropdown.style.display = "block";
    dropdown.offsetHeight; // Force reflow for CSS transition
    dropdown.classList.add("active");
  }
}

// Close dropdown on outside click
document.addEventListener("click", (e) => {
  const dropdown = document.getElementById("dropdown");
  const kebabBtn = document.getElementById("kebab-menu-btn");
  if (
    dropdown?.classList.contains("active") &&
    !dropdown.contains(e.target) &&
    !kebabBtn.contains(e.target)
  ) {
    toggleMenu(true);
  }
});

/* ══════════════════════════════════════
   8. TYPEWRITER EFFECT
   ══════════════════════════════════════ */
function typeWriter(text, i) {
  const el = document.getElementById("hero-title");
  if (el && i <= text.length) {
    el.textContent = text.substring(0, i);
    setTimeout(() => typeWriter(text, i + 1), 50);
  }
}

/* ══════════════════════════════════════
   9. STRUCTURAL COLORING (THEME SYNC)
   ══════════════════════════════════════ */
function applyStructuralColoring() {
  const isLight   = document.body.classList.contains("light-mode");
  const bgCol     = isLight ? "#f5f5f5" : "#1a1a1a";
  const shadowCol = isLight ? "rgba(0,0,0,0.15)" : "rgba(255,215,0,0.25)";

  // Header / nav wrapper
  const header = document.querySelector("header") || document.querySelector(".nav-main-wrapper");
  if (header) {
    Object.assign(header.style, {
      backgroundColor: bgCol,
      transition:      "all 0.4s ease",
      borderBottom:    "1px solid var(--border)",
      padding:         "0",
      margin:          "0",
    });
  }

  // Synced title elements
  const titles = [
    document.getElementById("repo-title"),
    document.getElementById("faq-title"),
    document.querySelector("#market h2"),
  ];

  titles.forEach((title) => {
    if (!title) return;
    Object.assign(title.style, {
      fontFamily:    "'Playfair Display', serif",
      fontStyle:     "italic",
      fontWeight:    "900",
      letterSpacing: "-1.5px",
      textTransform: "none",
      fontSize:      "clamp(2.2rem, 8vw, 3.8rem)",
      textShadow:    `0 4px 15px ${shadowCol}`,
      marginBottom:  "50px",
      textAlign:     "center",
      width:         "100%",
      transition:    "all 0.4s ease",
    });
  });
}

/* ══════════════════════════════════════
   10. PRODUCT RENDERER
   ── PERFORMANCE FIXES APPLIED:
      • All images: loading="lazy"   (consistent, no mixed eager/lazy)
      • All images: decoding="async" (non-blocking decode)
      • fetchpriority removed        (was inconsistent, caused prioritization conflicts)
      • width + height set           (prevents layout shift / CLS)
      • img src: kebab-case paths    (no spaces → reliable URL resolution)
   ══════════════════════════════════════ */
function renderProducts(data) {
  const grid = document.getElementById("main-grid");
  if (!grid) return;

  // Empty state
  if (data.length === 0) {
    grid.innerHTML = "";
    const noResults = document.createElement("div");
    noResults.style.cssText = [
      "grid-column: 1 / -1",
      "text-align: center",
      "padding: 80px 20px",
      "color: var(--text-dim)",
      "border: 1px dashed var(--border)",
      "border-radius: 20px",
      "background: rgba(255,255,255,0.02)",
    ].join(";");
    noResults.innerHTML = `
      <div style="font-size:3.5rem; margin-bottom:20px; filter:grayscale(1);">🔍</div>
      <h3 style="color:var(--text-main); margin-bottom:10px; font-family:'Playfair Display',serif; font-style:italic;">Asset Not Found</h3>
      <p style="opacity:0.8;">Maaf, barang yang Anda cari tidak tersedia dalam repository ini.</p>`;
    grid.appendChild(noResults);
    return;
  }

  // Build cards via DocumentFragment (single DOM write)
  const fragment = document.createDocumentFragment();

  data.forEach((p, index) => {
    const card     = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <div class="ev-video-bg ${AI_CLASSES[index % 8]}"></div>
      <div class="price-tag">${p.price}</div>
      <img
        src="${p.img}"
        class="card-img"
        alt="${p.name}"
        width="${p.imgW}"
        height="${p.imgH}"
        loading="lazy"
        decoding="async"
      >
      <h3 style="margin-bottom:10px; position:relative; z-index:2;">${p.name}</h3>
      <p style="color:var(--text-dim); margin-bottom:25px; position:relative; z-index:2;">${p.desc}</p>
      <button class="btn-premium" onclick="openModal('${p.name}', '${p.price}')">Acquire License</button>`;

    fragment.appendChild(card);
  });

  grid.innerHTML = "";
  grid.appendChild(fragment);
}

/* ══════════════════════════════════════
   11. SEARCH HANDLER
   ══════════════════════════════════════ */
function handleSearch() {
  const searchBar = document.getElementById("search-bar");
  if (!searchBar) return;

  const q = searchBar.value.toLowerCase().trim();
  const filtered = VAULT_DATA.products.filter((p) =>
    p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
  );

  renderProducts(filtered);
}

/* ══════════════════════════════════════
   12. FAQ RENDERER
   ══════════════════════════════════════ */
function renderFAQ() {
  const faqGrid = document.getElementById("faq-grid");
  if (!faqGrid) return;

  const faqClasses = ["ai-vid-1", "ai-vid-2", "ai-vid-3", "ai-vid-4"];

  faqGrid.innerHTML = VAULT_DATA.faq
    .map((item, i) => `
      <article class="card" style="position:relative; overflow:hidden;">
        <div class="ev-video-bg ${faqClasses[i % 4]}" style="opacity:0.05;"></div>
        <h3 style="color:var(--text-main); margin-bottom:20px; position:relative; z-index:2; display:flex; gap:10px;">
          <span style="color:var(--primary); font-family:'Playfair Display',serif; font-style:italic; font-weight:900;">Q.</span>
          ${item.q}
        </h3>
        <div style="color:var(--text-dim); position:relative; z-index:2; padding-left:30px; border-left:1px solid var(--border);">
          ${item.a}
        </div>
      </article>`)
    .join("");
}

/* ══════════════════════════════════════
   13. MODAL SYSTEM
   ══════════════════════════════════════ */
function openModal(n, p) {
  curN = n;
  curP = p;

  const modal = document.getElementById("modal");
  if (!modal) return;

  document.getElementById("target-name").innerText  = n.toUpperCase();
  document.getElementById("target-price").innerText = p;
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) modal.style.display = "none";
}

/* ══════════════════════════════════════
   14. PAYMENT GATEWAY
   ══════════════════════════════════════ */
function selectPayment(method, element) {
  document.querySelectorAll(".method-card").forEach((c) => c.classList.remove("active"));
  element.classList.add("active");
  selectedGateway = method;
}

/* ══════════════════════════════════════
   15. INQUIRY / CONFIRM
   ══════════════════════════════════════ */
function confirmInquiry() {
  const clientNameInput = document.getElementById("client-name");
  const clientName      = clientNameInput ? clientNameInput.value : "";

  if (!clientName) {
    alert("Identity Verification Required.");
    return;
  }

  const body = [
    `CLIENT: ${clientName}`,
    `ASSET: ${curN}`,
    `VALUE: ${curP}`,
    `GATEWAY: ${selectedGateway}`,
  ].join("\n");

  window.location.href = `mailto:${VAULT_DATA.owner.email}?subject=Inquiry: ${curN}&body=${encodeURIComponent(body)}`;
  closeModal();
}

/* ══════════════════════════════════════
   16. MENU BUILDER
   ══════════════════════════════════════ */
function buildMenu() {
  const linksBox = document.getElementById("social-links");
  if (!linksBox) return;

  linksBox.innerHTML = "";

  VAULT_DATA.menu.forEach((item) => {
    const a         = document.createElement("a");
    a.href          = "#" + item.id;
    a.style.cssText = "padding:18px 25px; display:block; color:var(--text-main); text-decoration:none; border-bottom:1px solid var(--border); font-weight:700;";
    a.innerText     = item.label.toUpperCase();
    a.onclick       = (e) => { e.preventDefault(); navigateTo(item.id); };
    linksBox.appendChild(a);
  });
}

/* ══════════════════════════════════════
   17. INIT — Entry Point
   ══════════════════════════════════════ */
function init() {
  // Restore theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  const isLight    = savedTheme === "light";
  document.body.classList.toggle("light-mode", isLight);

  const btn = document.getElementById("theme-btn");
  if (btn) btn.innerText = isLight ? "DARK MODE" : "LIGHT MODE";

  // Footer text
  const footerText = document.getElementById("footer-text");
  if (footerText) footerText.innerText = VAULT_DATA.content.footer;

  // Build navigation menu, products, FAQ
  buildMenu();
  renderProducts(VAULT_DATA.products);
  renderFAQ();

  // Sync structural coloring
  applyStructuralColoring();

  // Typewriter on hero (if element exists)
  const heroTitleEl = document.getElementById("hero-title");
  if (heroTitleEl) typeWriter(VAULT_DATA.content.heroTitle, 0);
}

window.addEventListener("DOMContentLoaded", init);
