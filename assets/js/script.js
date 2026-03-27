/**
 * @file script.js
 * @description Core Logic for Elite Vault v8.0 - Engineering Digital Authority (Enhanced)
 * @author Frans Marcellino
 * @version 8.1.0
 */

"use strict";

/* jshint esversion: 6 */
/* exported navigateTo, toggleTheme, handleSearch, openModal, closeModal, confirmInquiry, toggleMenu */

// =========================
// 1. CONFIGURATION
// =========================
const VAULT_DATA = {
  owner: {
    firstName: "FRANS",
    lastName: "MARCELLINO",
    fullName: "Frans Marcellino",
    email: "fransmarselinosroyer@gmail.com",
    badge: "[ Sovereign Repository v8.0 ]",
  },
  content: {
    heroTitle: "Build Elite Digital Assets with Sovereign Precision.",
    heroDesc:
      "A curated repository of high-performance digital assets engineered for creators, developers, and modern brands who demand speed, elegance, and scalability.",
    footer: "© 2026 FRANS MARCELLINO — ALL RIGHTS RESERVED",
  },
  products: [
    {
      name: "Titan Core",
      price: "$1,290",
      desc: "Enterprise SaaS Framework.",
      img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Titan+Core",
    },
    {
      name: "Quantum UI",
      price: "$750",
      desc: "Kinetic React Components.",
      img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Quantum+UI",
    },
    {
      name: "SecureAuth X",
      price: "$490",
      desc: "Zero-Knowledge Auth Suite.",
      img: "https://placehold.co/800x600/0f0f0f/ffd700?text=SecureAuth+X",
    },
    {
      name: "Nebula AI",
      price: "$2,999",
      desc: "Neural Integration Engine.",
      img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Nebula+AI",
    },
    {
      name: "Apex CMS",
      price: "$1,800",
      desc: "Headless Content Engine.",
      img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Apex+CMS",
    },
    {
      name: "Zenith ERP",
      price: "$4,500",
      desc: "Global Logistics Logic.",
      img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Zenith+ERP",
    },
    {
      name: "Vortex DB",
      price: "$980",
      desc: "Real-time Vector Database.",
      img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Vortex+DB",
    },
    {
      name: "Cipher Mesh",
      price: "$1,100",
      desc: "P2P Encryption Layer.",
      img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Cipher+Mesh",
    },
  ],
  menu: [
    { label: "Home", id: "home" },
    { label: "Vault", id: "market" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ],
};

// =========================
// 2. GLOBAL STATE
// =========================
const cursor = document.getElementById("cursor");
let curN = "",
  curP = "";

// =========================
// 3. NAVIGATION
// =========================
function toggleMenu(close = false) {
  const d = document.getElementById("dropdown");
  if (!d) return;

  if (close) {
    d.style.display = "none";
  } else {
    d.style.display = d.style.display === "block" ? "none" : "block";
  }
}

function navigateTo(id, pushState = true) {
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.remove("active");
  });

  const targetPage = document.getElementById(id);
  if (targetPage) targetPage.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
  toggleMenu(true);

  if (pushState) {
    history.pushState({ pageId: id }, null, `#${id}`);
  }
}

// =========================
// 4. THEME TOGGLE (ENHANCED)
// =========================
function toggleTheme() {
  document.body.classList.toggle("light-mode");

  const btn = document.getElementById("theme-btn");
  if (!btn) return;

  const isLight = document.body.classList.contains("light-mode");
  btn.innerText = isLight ? "DARK MODE" : "LIGHT MODE";

  // 🔥 persist theme
  localStorage.setItem("theme", isLight ? "light" : "dark");
}

// =========================
// 5. CURSOR
// =========================
document.addEventListener("mousemove", (e) => {
  if (!cursor) return;

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// =========================
// 6. TYPEWRITER (SAFE)
// =========================
function typeWriter(text, i, cb) {
  const el = document.getElementById("hero-title");
  if (!el) return;

  if (i < text.length) {
    el.innerHTML =
      text.substring(0, i + 1) + '<span class="typewriter-cursor"></span>';
    setTimeout(() => typeWriter(text, i + 1, cb), 50);
  } else if (cb) {
    setTimeout(cb, 400);
  }
}

// =========================
// 7. RENDER PRODUCTS (OPTIMIZED)
// =========================
function renderProducts(data) {
  const grid = document.getElementById("main-grid");
  if (!grid) return;

  grid.innerHTML = "";

  const fragment = document.createDocumentFragment();

  data.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="price-tag">${p.price}</div>
      <img src="${p.img}" class="card-img" alt="" loading="lazy">
      <h3 style="font-size:1.8rem; letter-spacing:-1px; margin-bottom:10px;">${p.name}</h3>
      <p style="color:var(--text-dim); margin-bottom:25px; font-weight:300;">${p.desc}</p>
      <button class="btn-premium" onclick="openModal('${p.name}', '${p.price}')">
        Acquire License
      </button>
    `;

    // 🔥 smoother tilt (less aggressive)
    if (window.innerWidth > 1024) {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;

        card.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${y * -6}deg) translateY(-5px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "none";
      });
    }

    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
}

// =========================
// 8. SEARCH (NO CHANGE LOGIC)
// =========================
function handleSearch() {
  const q = document.getElementById("search-bar").value.toLowerCase();

  renderProducts(
    VAULT_DATA.products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q),
    ),
  );
}

// =========================
// 9. MODAL
// =========================
function openModal(n, p) {
  curN = n;
  curP = p;

  document.getElementById("target-name").innerText = n.toUpperCase();
  document.getElementById("target-price").innerText = p;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function confirmInquiry() {
  const name = document.getElementById("client-name").value.trim();

  if (!name) {
    alert("Please enter your full name.");
    return;
  }

  window.location.href = `mailto:${VAULT_DATA.owner.email}?subject=Acquisition: ${curN}&body=Client Name: ${name}\nRequested Asset: ${curN}\nInvestment Value: ${curP}`;

  closeModal();
}

// =========================
// 10. INIT (ENHANCED)
// =========================
function init() {
  const navLogo = document.getElementById("nav-logo");
  const heroBadge = document.getElementById("hero-badge");
  const curatedBy = document.getElementById("curated-by");
  const footerText = document.getElementById("footer-text");
  const heroDesc = document.getElementById("hero-desc");

  // 🔥 safe injection
  if (navLogo)
    navLogo.innerHTML = `${VAULT_DATA.owner.firstName} <span>${VAULT_DATA.owner.lastName}</span>`;

  if (heroBadge) heroBadge.innerText = VAULT_DATA.owner.badge;

  if (curatedBy)
    curatedBy.innerHTML = `Curated by <strong>${VAULT_DATA.owner.fullName}</strong>`;

  if (footerText) footerText.innerText = VAULT_DATA.content.footer;

  if (heroDesc) heroDesc.innerText = VAULT_DATA.content.heroDesc;

  // 🔥 menu render
  const dropdown = document.getElementById("social-links");
  const contactBox = document.getElementById("contact-methods");

  if (dropdown && contactBox) {
    dropdown.innerHTML = "";
    contactBox.innerHTML = "";

    VAULT_DATA.menu.forEach((item) => {
      dropdown.innerHTML += `
        <a href="javascript:void(0)" 
           onclick="navigateTo('${item.id}')" 
           style="padding:18px 25px; display:block; color:var(--text-main); text-decoration:none; font-size:0.75rem; border-bottom:1px solid var(--border); font-weight:700;">
           ${item.label.toUpperCase()}
        </a>`;

      contactBox.innerHTML += `
        <button class="btn-premium" 
          style="background:var(--surface); color:var(--text-main); border:1px solid var(--border); margin-bottom:12px;" 
          onclick="navigateTo('${item.id}')">
          ${item.label} Protocol
        </button>`;
    });
  }

  // 🔥 restore theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    const btn = document.getElementById("theme-btn");
    if (btn) btn.innerText = "DARK MODE";
  }

  setTimeout(() => {
    typeWriter(VAULT_DATA.content.heroTitle, 0, () =>
      renderProducts(VAULT_DATA.products),
    );
  }, 800);
}

// =========================
// 11. HISTORY
// =========================
window.addEventListener("popstate", (e) => {
  if (e.state && e.state.pageId) {
    navigateTo(e.state.pageId, false);
  }
});

// =========================
// 12. START
// =========================
window.onload = init;
