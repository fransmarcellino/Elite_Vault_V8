/**
 * @file script.js
 * @description Ultra-Optimized Core for Elite Vault v8.1.0
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

// --- UI ENGINE ---
document.addEventListener("mousemove", (e) => {
    if (cursorEl) {
        window.requestAnimationFrame(() => {
            cursorEl.style.left = `${e.clientX}px`;
            cursorEl.style.top = `${e.clientY}px`;
        });
    }
});

function navigateTo(id) {
    document.querySelectorAll(".page").forEach(p => {
        p.classList.remove("active");
        p.style.display = "none";
    });
    const target = document.getElementById(id);
    if (target) {
        target.style.display = "block";
        setTimeout(() => target.classList.add("active"), 10);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    toggleMenu(true);
}

function toggleTheme() {
    const isLight = document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    const btn = document.getElementById("theme-btn");
    if (btn) btn.innerText = isLight ? "DARK MODE" : "LIGHT MODE";
}

function toggleMenu(forceClose = false, event = null) {
    if (event) event.stopPropagation();
    const dropdown = document.getElementById("dropdown");
    if (!dropdown) return;
    if (forceClose || dropdown.classList.contains("active")) {
        dropdown.classList.remove("active");
        setTimeout(() => { if(!dropdown.classList.contains("active")) dropdown.style.display = "none"; }, 300);
    } else {
        dropdown.style.display = "block";
        void dropdown.offsetWidth;
        dropdown.classList.add("active");
    }
}

document.addEventListener("click", (e) => {
    const dropdown = document.getElementById("dropdown");
    const kebabBtn = document.getElementById("kebab-menu-btn");
    if (dropdown?.classList.contains("active") && !dropdown.contains(e.target) && !kebabBtn.contains(e.target)) {
        toggleMenu(true);
    }
});

function typeWriter(text, i, cb) {
    const el = document.getElementById("hero-title");
    if (el) {
        if (i < text.length) {
            el.innerHTML = text.substring(0, i + 1) + '<span class="typewriter-cursor" aria-hidden="true"></span>';
            setTimeout(() => typeWriter(text, i + 1, cb), 60);
        } else if (cb) cb();
    }
}

// --- PRODUCT RENDERER (PRECISION DIMENSIONS) ---
function renderProducts(data) {
    const grid = document.getElementById("main-grid");
    if (!grid) return;
    grid.innerHTML = "";
    data.forEach(p => {
        const card = document.createElement("article");
        card.className = "card";
        // Explicit width/height added to prevent Layout Shifts (CLS)
        card.innerHTML = `
            <div class="price-tag" aria-label="Price">${p.price}</div>
            <img src="${p.img}" class="card-img" alt="${p.name} Preview" width="800" height="600" loading="lazy">
            <h3 style="margin-bottom:10px;">${p.name}</h3>
            <p style="color:var(--text-dim); margin-bottom:25px; font-weight:300; font-size:0.9rem;">${p.desc}</p>
            <button class="btn-premium" aria-label="Acquire license for ${p.name}" onclick="openModal('${p.name}', '${p.price}')">Acquire License</button>`;
        grid.appendChild(card);
    });
}

function handleSearch() {
    const q = document.getElementById("search-bar").value.toLowerCase();
    renderProducts(VAULT_DATA.products.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)));
}

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
    const clientName = document.getElementById("client-name").value;
    if (!clientName) return alert("Identity Verification Required.");
    window.location.href = `mailto:${VAULT_DATA.owner.email}?subject=Inquiry: ${curN}&body=CLIENT: ${clientName}%0AASSET: ${curN}%0AVALUE: ${curP}%0AGATEWAY: ${selectedGateway}`;
    closeModal();
}

function init() {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        const btn = document.getElementById("theme-btn");
        if (btn) btn.innerText = "DARK MODE";
    }
    const footerText = document.getElementById("footer-text");
    if (footerText) footerText.innerText = VAULT_DATA.content.footer;

    const linksBox = document.getElementById("social-links");
    if (linksBox) {
        linksBox.innerHTML = "";
        VAULT_DATA.menu.forEach(item => {
            const a = document.createElement("a");
            a.href = "javascript:void(0)";
            a.style = "padding:18px 25px; display:block; color:var(--text-main); text-decoration:none; font-size:0.75rem; border-bottom:1px solid var(--border); font-weight:700;";
            a.innerText = item.label.toUpperCase();
            a.onclick = (e) => { e.preventDefault(); navigateTo(item.id); };
            linksBox.appendChild(a);
        });
    }
    renderProducts(VAULT_DATA.products);
    typeWriter(VAULT_DATA.content.heroTitle, 0);
}

window.addEventListener('DOMContentLoaded', init);
