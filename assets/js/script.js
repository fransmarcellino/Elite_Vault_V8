/**
 * @file script.js
 * @description Master-Optimized Core for Elite Vault v8.2.9
 * @author Frans Marcellino
 */

"use strict";

const VAULT_DATA = {
  owner: {
    firstName: "FRANS",
    lastName: "MARCELLINO",
    email: "fransmarselinosroyer@gmail.com",
  },
  content: {
    heroTitle: "Architecting Digital Sovereignty.",
    footer: "© 2026 FRANS MARCELLINO — ALL RIGHTS RESERVED",
  },
  products: [
    { name: "Titan Core", price: "$1,290", desc: "Enterprise SaaS Framework.", img: "assets/img/Titan Core.webp" },
    { name: "Quantum UI", price: "$750", desc: "Kinetic React Components.", img: "assets/img/Quantum UI.webp" },
    { name: "SecureAuth X", price: "$490", desc: "Zero-Knowledge Auth Suite.", img: "assets/img/SecureAuth X.webp" },
    { name: "Nebula AI", price: "$2,999", desc: "Neural Integration Engine.", img: "assets/img/Nebula AI.webp" },
    { name: "Apex CMS", price: "$1,800", desc: "Headless Content Engine.", img: "assets/img/Apex CMS.webp" },
    { name: "Zenith ERP", price: "$4,500", desc: "Global Logistics Logic.", img: "assets/img/Zenith ERP.webp" },
    { name: "Vortex DB", price: "$980", desc: "Real-time Vector Database.", img: "assets/img/Vortex DB.webp" },
    { name: "Cipher Mesh", price: "$1,100", desc: "P2P Encryption Layer.", img: "assets/img/Cipher Mesh.webp" },
  ],
  menu: [
    { label: "Home", id: "home" },
    { label: "Vault", id: "market" },
    { label: "FAQ", id: "faq" },
  ],
  faq: [
    { q: "How is the code verified?", a: "Passed rigorous W3C Validation and optimized for maximum PageSpeed scores." },
    { q: "What is in the package?", a: "ZIP Archive containing Optimized Source Code, README, and License Certificate." },
    { q: "Legal restrictions?", a: "Exclusive for personal/client use. RESELLING is strictly prohibited." },
    { q: "Support procedure?", a: "Professional support via secure Email-Inquiry protocols to guarantee privacy." },
  ],
};

let curN = "", curP = "", selectedGateway = "PayPal";
const cursorEl = document.getElementById("cursor");

// --- UTILITY: DEBOUNCE SEARCH ---
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

const optimizedSearch = debounce(() => handleSearch());

// --- UI ENGINE ---
document.addEventListener("mousemove", (e) => {
  if (cursorEl) {
    window.requestAnimationFrame(() => {
      cursorEl.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    });
  }
}, { passive: true });

function navigateTo(id) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((p) => {
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

function toggleTheme() {
  const isLight = document.body.classList.toggle("light-mode");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  document.getElementById("theme-btn").innerText = isLight ? "DARK MODE" : "LIGHT MODE";
  applyStructuralColoring();
}

function toggleMenu(forceClose = false) {
  const dropdown = document.getElementById("dropdown");
  if (forceClose || dropdown.classList.contains("active")) {
    dropdown.classList.remove("active");
    setTimeout(() => { if (!dropdown.classList.contains("active")) dropdown.style.display = "none"; }, 300);
  } else {
    dropdown.style.display = "block";
    dropdown.offsetHeight;
    dropdown.classList.add("active");
  }
}

function typeWriter(text, i) {
  const el = document.getElementById("hero-title");
  if (el && i <= text.length) {
    el.textContent = text.substring(0, i);
    setTimeout(() => typeWriter(text, i + 1), 50);
  }
}

// --- VISUAL EXCELLENCE ---
function applyStructuralColoring() {
  const isLight = document.body.classList.contains("light-mode");
  const shadowCol = isLight ? "rgba(0,0,0,0.15)" : "rgba(255,215,0,0.25)";
  const titles = [document.getElementById("repo-title"), document.getElementById("faq-title")];

  titles.forEach((title) => {
    if (title) {
      Object.assign(title.style, {
        fontFamily: "'Playfair Display', serif",
        fontStyle: "italic",
        fontWeight: "900",
        letterSpacing: "-1.5px",
        fontSize: "clamp(2.2rem, 8vw, 3.8rem)",
        textShadow: `0 4px 15px ${shadowCol}`,
        margin: "50px 0", textAlign: "center"
      });
    }
  });
}

// --- RENDERER (Sync & Search Feedback) ---
function renderProducts(data) {
  const grid = document.getElementById("main-grid");
  if (!grid) return;
  
  if (data.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 80px; border: 1px dashed var(--border); border-radius: 20px;">
      <h3 style="font-family: 'Playfair Display', serif; font-style: italic;">Asset Not Found</h3>
      <p style="opacity: 0.6; font-size: 0.9rem;">Maaf, repository tidak menemukan hasil untuk pencarian Anda.</p>
    </div>`;
    return;
  }

  const fragment = document.createDocumentFragment();
  data.forEach((p, index) => {
    const card = document.createElement("article");
    card.className = "card";
    const loadingStrategy = index < 4 ? "eager" : "lazy";
    const priority = index < 4 ? 'fetchpriority="high"' : "";
    
    card.innerHTML = `
      <div class="ev-video-bg" style="background-image: url('assets/img/overlay-${(index % 4) + 1}.webp')"></div>
      <div class="price-tag">${p.price}</div>
      <img src="${p.img}" class="card-img" alt="${p.name}" loading="${loadingStrategy}" ${priority}>
      <h3 style="position:relative; z-index:2;">${p.name}</h3>
      <p style="color:var(--text-dim); font-size:0.85rem; margin-bottom:20px; position:relative; z-index:2;">${p.desc}</p>
      <button class="btn-premium" onclick="openModal('${p.name}', '${p.price}')">Acquire License</button>`;
    fragment.appendChild(card);
  });
  grid.innerHTML = "";
  grid.appendChild(fragment);
}

function handleSearch() {
  const q = document.getElementById("search-bar").value.toLowerCase().trim();
  const filtered = VAULT_DATA.products.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  renderProducts(filtered);
}

function renderFAQ() {
  const faqGrid = document.getElementById("faq-grid");
  if (!faqGrid) return;
  faqGrid.innerHTML = VAULT_DATA.faq.map(item => `
    <article class="card">
      <h3 style="margin-bottom:15px; font-size:1rem; color:var(--primary);">Q. ${item.q}</h3>
      <p style="font-size:0.85rem; line-height:1.6; opacity:0.8;">${item.a}</p>
    </article>
  `).join("");
}

// --- MODAL & TRANSACTION ---
function openModal(n, p) {
  curN = n; curP = p;
  document.getElementById("target-name").innerText = n.toUpperCase();
  document.getElementById("target-price").innerText = p;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() { document.getElementById("modal").style.display = "none"; }

function selectPayment(method, element) {
  document.querySelectorAll(".method-card").forEach(c => c.classList.remove("active"));
  element.classList.add("active");
  selectedGateway = method;
}

function confirmInquiry() {
  const client = document.getElementById("client-name").value;
  if (!client) return alert("Identity Verification Required.");
  const body = `CLIENT: ${client}\nASSET: ${curN}\nVALUE: ${curP}\nGATEWAY: ${selectedGateway}`;
  const mailtoLink = document.createElement('a');
  mailtoLink.href = `mailto:${VAULT_DATA.owner.email}?subject=Inquiry: ${curN}&body=${encodeURIComponent(body)}`;
  mailtoLink.click();
  closeModal();
}

// --- INITIALIZATION ---
function init() {
  if (localStorage.getItem("theme") === "light") toggleTheme();
  document.getElementById("footer-text").innerText = VAULT_DATA.content.footer;
  
  const linksBox = document.getElementById("social-links");
  VAULT_DATA.menu.forEach(item => {
    const a = document.createElement("a");
    a.href = "#" + item.id;
    a.style = "padding:15px 20px; display:block; color:var(--text-main); text-decoration:none; font-size:0.8rem; font-weight:700; border-bottom:1px solid var(--border);";
    a.innerText = item.label.toUpperCase();
    a.onclick = (e) => { e.preventDefault(); navigateTo(item.id); };
    linksBox.appendChild(a);
  });

  renderProducts(VAULT_DATA.products);
  renderFAQ();
  applyStructuralColoring();
  typeWriter(VAULT_DATA.content.heroTitle, 0);
}

window.addEventListener("DOMContentLoaded", init);
