/**
 * @file script.js
 * @description Core Logic for Elite Vault v8.0 - Sovereign Edition
 * @author Frans Marcellino
 * @version 8.2.0
 * @status LOCKDOWN - Anti-Flicker Enabled
 */

"use strict";

// =========================
// 1. VAULT CONFIGURATION
// =========================
const VAULT_DATA = {
    owner: {
        email: "fransmarselinosroyer@gmail.com",
    },
    products: [
        { name: "Titan Core", price: "$1,290", desc: "Enterprise SaaS Framework.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Titan+Core" },
        { name: "Quantum UI", price: "$750", desc: "Kinetic React Components.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Quantum+UI" },
        { name: "SecureAuth X", price: "$490", desc: "Zero-Knowledge Auth Suite.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=SecureAuth+X" },
        { name: "Nebula AI", price: "$2,999", desc: "Neural Integration Engine.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Nebula+AI" }
    ],
    menu: [
        { label: "Home", id: "home" },
        { label: "Vault", id: "market" },
        { label: "About", id: "about" }
    ]
};

// =========================
// 2. NAVIGATION (ANTI-FLICKER LOCK)
// =========================
function navigateTo(id, pushState = true) {
    const pages = document.querySelectorAll(".page");
    const targetPage = document.getElementById(id);

    if (!targetPage) return;

    // KUNCI: Sembunyikan semua halaman secara instan sebelum transisi
    pages.forEach((p) => {
        p.classList.remove("active");
        p.style.display = "none"; // Hard reset untuk mencegah kebocoran elemen
    });

    // Aktifkan halaman tujuan dengan delay mikro untuk sinkronisasi CSS
    targetPage.style.display = "flex"; 
    setTimeout(() => {
        targetPage.classList.add("active");
    }, 10);

    // Reset Menu & Scroll
    closeKebabMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (pushState) {
        history.pushState({ pageId: id }, null, `#${id}`);
    }
}

// =========================
// 3. KEBAB MENU LOGIC
// =========================
function toggleKebabMenu() {
    const dropdown = document.getElementById("dropdown");
    if (dropdown) {
        dropdown.classList.toggle("active");
    }
}

function closeKebabMenu() {
    const dropdown = document.getElementById("dropdown");
    if (dropdown) {
        dropdown.classList.remove("active");
    }
}

// Tutup menu jika klik di luar area navigasi
document.addEventListener("click", (e) => {
    const nav = document.getElementById("top-nav");
    if (nav && !nav.contains(e.target)) {
        closeKebabMenu();
    }
});

// =========================
// 4. THEME ENGINE
// =========================
function toggleTheme() {
    const isLight = document.body.classList.toggle("light-mode");
    const btn = document.getElementById("theme-btn");
    
    if (btn) {
        btn.innerText = isLight ? "DARK MODE" : "LIGHT MODE";
    }
    
    localStorage.setItem("vault-theme", isLight ? "light" : "dark");
}

// =========================
// 5. PRODUCT ENGINE
// =========================
function renderProducts(data = VAULT_DATA.products) {
    const grid = document.getElementById("main-grid");
    if (!grid) return;

    grid.innerHTML = data.map(p => `
        <div class="card">
            <div class="price-tag">${p.price}</div>
            <img src="${p.img}" class="card-img" alt="${p.name}" loading="lazy">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <button class="btn-premium" onclick="openModal('${p.name}', '${p.price}')">
                Acquire License
            </button>
        </div>
    `).join('');
}

function handleSearch() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const filtered = VAULT_DATA.products.filter(p => 
        p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query)
    );
    renderProducts(filtered);
}

// =========================
// 6. MODAL SYSTEM (LOCK)
// =========================
let activeAsset = { name: "", price: "" };

function openModal(name, price) {
    activeAsset = { name, price };
    const modal = document.getElementById("modal");
    document.getElementById("target-name").innerText = name.toUpperCase();
    document.getElementById("target-price").innerText = price;
    
    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("active"), 10);
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("active");
    setTimeout(() => { modal.style.display = "none"; }, 300);
}

function confirmInquiry() {
    const client = document.getElementById("client-name").value.trim();
    if (!client) return alert("Identification required.");

    const mailto = `mailto:${VAULT_DATA.owner.email}?subject=Acquisition: ${activeAsset.name}&body=Client: ${client}%0AAsset: ${activeAsset.name}%0AValue: ${activeAsset.price}`;
    window.location.href = mailto;
    closeModal();
}

// =========================
// 7. INITIALIZATION
// =========================
function init() {
    // Render Menu Links
    const socialLinks = document.getElementById("social-links");
    if (socialLinks) {
        socialLinks.innerHTML = VAULT_DATA.menu.map(item => `
            <a href="javascript:void(0)" onclick="navigateTo('${item.id}')">
                ${item.label.toUpperCase()} PROTOCOL
            </a>
        `).join('');
    }

    // Restore Theme
    if (localStorage.getItem("vault-theme") === "light") {
        toggleTheme();
    }

    // Default Page
    const hash = window.location.hash.replace("#", "");
    navigateTo(hash || "home", false);
    
    renderProducts();
}

window.addEventListener("popstate", (e) => {
    if (e.state && e.state.pageId) navigateTo(e.state.pageId, false);
});

window.onload = init;
