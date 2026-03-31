/**
* @file script.js
* @description Final Master Sync - Elite Vault v8.1.3 (CSS Variable + Tailwind Hybrid)
* @author Frans Marcellino
*/

"use strict";

const VAULT_DATA = {
    owner: { firstName: "FRANS", lastName: "MARCELLINO", email: "fransmarselinosroyer@gmail.com" },
    content: { heroTitle: "Architecting Digital Sovereignty.", footer: "© 2026 FRANS MARCELLINO — ALL RIGHTS RESERVED" },
    products: [
        { name: "Titan Core", price: "$1,290", desc: "Enterprise SaaS Framework.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Titan+Core" },
        { name: "Quantum UI", price: "$750", desc: "Kinetic React Components.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Quantum+UI" },
        { name: "SecureAuth X", price: "$490", desc: "Zero-Knowledge Auth Suite.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=SecureAuth+X" },
        { name: "Nebula AI", price: "$2,999", desc: "Neural Integration Engine.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Nebula+AI" },
        { name: "Apex CMS", price: "$1,800", desc: "Headless Content Engine.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Apex+CMS" },
        { name: "Zenith ERP", price: "$4,500", desc: "Global Logistics Logic.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Zenith+ERP" },
        { name: "Vortex DB", price: "$980", desc: "Real-time Vector Database.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Vortex+DB" },
        { name: "Cipher Mesh", price: "$1,100", desc: "P2P Encryption Layer.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Cipher+Mesh" }
    ],
    menu: [
        { label: "Home", id: "home" },
        { label: "Vault", id: "market" },
        { label: "About", id: "about" }
    ]
};

let curN = "", curP = "", selectedGateway = "PayPal";
const cursorEl = document.getElementById("cursor");

// --- UI ENGINE (Cursor & Navigation) ---
document.addEventListener("mousemove", (e) => {
    if (cursorEl) {
        window.requestAnimationFrame(() => {
            cursorEl.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        });
    }
}, { passive: true });

function navigateTo(id) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(p => p.classList.remove("active"));
    const target = document.getElementById(id);
    if (target) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => target.classList.add("active"), 100);
    }
    toggleMenu(true);
}

// --- THEME ENGINE (FIXED FOR CSS VARIABLES) ---
function toggleTheme() {
    const isLight = document.body.classList.toggle("light-mode");
    const btn = document.getElementById("theme-btn");
    
    // Logika Force Overwrite Warna Tailwind
    if (isLight) {
        document.body.style.backgroundColor = "var(--bg)";
        document.body.style.color = "var(--text-main)";
        if (btn) btn.innerText = "DARK MODE";
        localStorage.setItem("theme", "light");
    } else {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        if (btn) btn.innerText = "LIGHT MODE";
        localStorage.setItem("theme", "dark");
    }
}

function toggleMenu(forceClose = false, event = null) {
    if (event) event.stopPropagation();
    const dropdown = document.getElementById("dropdown-menu") || document.getElementById("dropdown");
    if (!dropdown) return;
    if (forceClose || dropdown.classList.contains("active") || !dropdown.classList.contains("hidden")) {
        dropdown.classList.add("hidden");
        dropdown.classList.remove("active");
    } else {
        dropdown.classList.remove("hidden");
        dropdown.classList.add("active");
    }
}

// --- PRODUCT RENDERER ---
function renderProducts(data) {
    const grid = document.getElementById("main-grid");
    if (!grid) return;
    grid.innerHTML = data.map((p) => `
        <article class="card group relative">
            <div class="price-tag">${p.price}</div>
            <img src="${p.img}" class="card-img" alt="${p.name}">
            <h3 class="text-xl font-bold mb-2 tracking-tight">${p.name}</h3>
            <p class="text-text-dim text-sm font-light mb-8">${p.desc}</p>
            <button class="btn-premium" onclick="openModal('${p.name}', '${p.price}')">
                Acquire License
            </button>
        </article>
    `).join("");
}

function handleSearch() {
    const q = document.getElementById("search-bar").value.toLowerCase();
    const filtered = VAULT_DATA.products.filter(p => 
        p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
    );
    renderProducts(filtered);
}

// --- MODAL & PAYMENT ---
function openModal(n, p) {
    curN = n; curP = p;
    document.getElementById("target-name").innerText = n.toUpperCase();
    document.getElementById("target-price").innerText = p;
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
}

function closeModal() { 
    document.getElementById("modal").style.display = "none";
}

function selectPayment(method, element) {
    document.querySelectorAll(".method-card").forEach(c => c.classList.remove("active"));
    element.classList.add("active");
    selectedGateway = method;
}

function confirmInquiry() {
    const clientName = document.getElementById("client-name").value;
    if (!clientName) return alert("Identity Verification Required.");
    const body = `CLIENT: ${clientName}\nASSET: ${curN}\nVALUE: ${curP}\nGATEWAY: ${selectedGateway}`;
    window.location.href = `mailto:${VAULT_DATA.owner.email}?subject=Inquiry: ${curN}&body=${encodeURIComponent(body)}`;
    closeModal();
}

// --- INITIALIZATION ---
function init() {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        document.body.style.backgroundColor = "var(--bg)";
        document.body.style.color = "var(--text-main)";
        const btn = document.getElementById("theme-btn");
        if (btn) btn.innerText = "DARK MODE";
    }

    const footerText = document.getElementById("footer-text");
    if (footerText) footerText.innerText = VAULT_DATA.content.footer;

    renderProducts(VAULT_DATA.products);
}

window.addEventListener('DOMContentLoaded', init);
