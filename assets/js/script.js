/**
 * @file script.js
 * @description Integrated Core for Elite Vault v8.1.1
 * @author Frans Marcellino
 * @status FINAL AUDIT: PASSED
 */

"use strict";

const VAULT_DATA = {
    owner: { 
        firstName: "FRANS", 
        lastName: "MARCELLINO", 
        email: "fransmarselinosroyer@gmail.com" 
    },
    content: { 
        heroTitle: "Architecting Digital Sovereignty.", 
        footer: "© 2026 FRANS MARCELLINO — ALL RIGHTS RESERVED" 
    },
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

let currentAssetName = "", currentAssetPrice = "", selectedGateway = "PayPal";
const cursorEl = document.getElementById("cursor");

/* ==========================================
   1. PERFORMANCE-FIRST UI ENGINE
   ========================================== */

// Optimized Cursor Control (High FPS)
document.addEventListener("mousemove", (e) => {
    if (cursorEl) {
        requestAnimationFrame(() => {
            cursorEl.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        });
    }
}, { passive: true });

// Seamless Navigation Logic
function navigateTo(id) {
    const pages = document.querySelectorAll(".page");
    const target = document.getElementById(id);
    
    if (!target) return;

    // Transition Out
    pages.forEach(p => {
        p.classList.remove("active");
        setTimeout(() => { 
            if(!p.classList.contains("active")) p.style.display = "none";
        }, 400);
    });

    // Transition In
    setTimeout(() => {
        target.style.display = "block";
        requestAnimationFrame(() => {
            target.classList.add("active");
        });
    }, 400);

    window.scrollTo({ top: 0, behavior: "smooth" });
    toggleMenu(true);
}

// Global Menu Controller
function toggleMenu(forceClose = false, event = null) {
    if (event) event.stopPropagation();
    const dropdown = document.getElementById("dropdown");
    if (!dropdown) return;

    if (forceClose || dropdown.classList.contains("active")) {
        dropdown.classList.remove("active");
        setTimeout(() => { dropdown.style.display = "none"; }, 300);
    } else {
        dropdown.style.display = "block";
        requestAnimationFrame(() => dropdown.classList.add("active"));
    }
}

// Theme Switcher Engine
function toggleTheme() {
    const isLight = document.body.classList.toggle("light-mode");
    localStorage.setItem("frans_theme", isLight ? "light" : "dark");
    const btn = document.getElementById("theme-btn");
    if (btn) btn.innerText = isLight ? "DARK MODE" : "LIGHT MODE";
}

/* ==========================================
   2. REPOSITORY & SEARCH ENGINE
   ========================================== */

function renderProducts(data) {
    const grid = document.getElementById("main-grid");
    if (!grid) return;

    const fragment = document.createDocumentFragment();

    if (data.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:100px 0;opacity:0.5;"><h3>No assets found in the vault.</h3></div>`;
        return;
    }

    data.forEach((p, index) => {
        const card = document.createElement("article");
        card.className = "card glass";
        
        // Priority Loading for LCP
        const loading = index === 0 ? "eager" : "lazy";

        card.innerHTML = `
            <div class="price-tag">${p.price}</div>
            <img src="${p.img}" class="card-img" alt="${p.name}" width="800" height="600" loading="${loading}">
            <h3 style="margin-bottom:10px; font-weight:800;">${p.name}</h3>
            <p style="color:var(--text-dim); margin-bottom:30px; font-size:0.9rem;">${p.desc}</p>
            <button class="btn-premium" onclick="openModal('${p.name}', '${p.price}')">Acquire License</button>
        `;
        fragment.appendChild(card);
    });

    grid.innerHTML = "";
    grid.appendChild(fragment);
}

function handleSearch() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const filtered = VAULT_DATA.products.filter(p => 
        p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query)
    );
    renderProducts(filtered);
}

/* ==========================================
   3. PURCHASE SYSTEM (MODAL)
   ========================================== */

function openModal(name, price) {
    currentAssetName = name;
    currentAssetPrice = price;
    document.getElementById("target-name").innerText = name.toUpperCase();
    document.getElementById("target-price").innerText = price;
    
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
    const clientName = document.getElementById("client-name").value.trim();
    if (!clientName) return alert("Security Protocol: Identity Verification Required.");
    
    const mailBody = `CLIENT: ${clientName}\nASSET: ${currentAssetName}\nVALUE: ${currentAssetPrice}\nGATEWAY: ${selectedGateway}\n\nProtocol: Requesting secure license acquisition.`;
    window.location.href = `mailto:${VAULT_DATA.owner.email}?subject=ASSET_REQUEST: ${currentAssetName}&body=${encodeURIComponent(mailBody)}`;
    closeModal();
}

/* ==========================================
   4. TYPEWRITER & INITIALIZATION
   ========================================== */

function typeWriter(text, i) {
    const el = document.getElementById("hero-title");
    if (el && i <= text.length) {
        el.textContent = text.substring(0, i);
        setTimeout(() => typeWriter(text, i + 1), 50);
    }
}

function init() {
    // Theme Recovery
    if (localStorage.getItem("frans_theme") === "light") {
        document.body.classList.add("light-mode");
        const btn = document.getElementById("theme-btn");
        if (btn) btn.innerText = "DARK MODE";
    }

    // Dynamic Footer
    const footerText = document.getElementById("footer-text");
    if (footerText) footerText.innerText = VAULT_DATA.content.footer;

    // Dropdown Builder
    const menuContainer = document.getElementById("social-links");
    if (menuContainer) {
        menuContainer.innerHTML = "";
        VAULT_DATA.menu.forEach(item => {
            const link = document.createElement("a");
            link.href = "#";
            link.style = "padding:20px 25px; display:block; color:var(--text-main); text-decoration:none; font-size:0.7rem; border-bottom:1px solid var(--border); font-weight:800; letter-spacing:2px;";
            link.innerText = item.label.toUpperCase();
            link.onclick = (e) => { e.preventDefault(); navigateTo(item.id); };
            menuContainer.appendChild(link);
        });
    }

    // Load Assets & Start Animations
    renderProducts(VAULT_DATA.products);
    typeWriter(VAULT_DATA.content.heroTitle, 0);

    // Global Click Listener for Menu Close
    document.addEventListener("click", (e) => {
        const dropdown = document.getElementById("dropdown");
        const kebabBtn = document.getElementById("kebab-menu-btn");
        if (dropdown?.classList.contains("active") && !dropdown.contains(e.target) && !kebabBtn.contains(e.target)) {
            toggleMenu(true);
        }
    });
}

window.addEventListener('DOMContentLoaded', init);
