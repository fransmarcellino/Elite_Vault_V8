/**
 * @file script.js
 * @description Core Logic for Elite Vault v8.0 - Engineering Digital Authority
 * @author Frans Marcellino
 * @version 8.0.4 (Deep Stack & Propagation Fix)
 */

"use strict";

// --- 1. CONFIGURATION & DATA REPOSITORY ---
const VAULT_DATA = {
    owner: {
        firstName: "FRANS",
        lastName: "MARCELLINO",
        fullName: "Frans Marcellino",
        email: "fransmarselinosroyer@gmail.com",
        badge: "[ Sovereign Repository v8.0 ]",
    },
    content: {
        heroTitle: "Architecting Digital Sovereignty.",
        heroDesc: "Industrial-grade software assets designed for those who demand absolute performance and uncompromising aesthetic perfection.",
        footer: "© 2026 FRANS MARCELLINO — ALL RIGHTS RESERVED",
    },
    products: [
        { name: "Titan Core", price: "$1,290", desc: "Enterprise SaaS Framework.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Titan+Core" },
        { name: "Quantum UI", price: "$750", desc: "Kinetic React Components.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Quantum+UI" },
        { name: "SecureAuth X", price: "$490", desc: "Zero-Knowledge Auth Suite.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=SecureAuth+X" },
        { name: "Nebula AI", price: "$2,999", desc: "Neural Integration Engine.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Nebula+AI" },
        { name: "Apex CMS", price: "$1,800", desc: "Headless Content Engine.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Apex+CMS" },
        { name: "Zenith ERP", price: "$4,500", desc: "Global Logistics Logic.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Zenith+ERP" },
        { name: "Vortex DB", price: "$980", desc: "Real-time Vector Database.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Vortex+DB" },
        { name: "Cipher Mesh", price: "$1,100", desc: "P2P Encryption Layer.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Cipher+Mesh" },
    ],
    menu: [
        { label: "Home", id: "home" },
        { label: "Vault", id: "market" },
        { label: "About", id: "about" },
    ],
};

// --- 2. GLOBAL STATE ---
let curN = "", curP = "";
let selectedGateway = "PayPal"; 
const cursorEl = document.getElementById("cursor");

// --- 3. UI ENGINE ---

/**
 * Handle Custom Cursor
 */
document.addEventListener("mousemove", (e) => {
    if (cursorEl) {
        window.requestAnimationFrame(() => {
            cursorEl.style.left = `${e.clientX}px`;
            cursorEl.style.top = `${e.clientY}px`;
        });
    }
});

/**
 * Navigation System
 */
function navigateTo(id) {
    const pages = document.querySelectorAll(".page");
    pages.forEach((p) => {
        p.classList.remove("active");
        p.style.display = "none";
    });
    
    const targetPage = document.getElementById(id);
    if (targetPage) {
        targetPage.style.display = "block";
        setTimeout(() => { targetPage.classList.add("active"); }, 10);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    
    toggleMenu(true); 
}

/**
 * Theme Engine
 */
function toggleTheme() {
    const isLight = document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    const btn = document.getElementById("theme-btn");
    if (btn) btn.innerText = isLight ? "DARK MODE" : "LIGHT MODE";
}

/**
 * DEEP FIX: Menu Logic dengan Z-Index Isolation
 * Mencegah menu tertimpa tombol Dark Mode atau elemen lainnya.
 */
function toggleMenu(forceClose = false, event = null) {
    // Hentikan penutupan instan akibat 'click outside'
    if (event) event.stopPropagation();

    const dropdown = document.getElementById("dropdown");
    const wrapper = document.querySelector(".menu-wrapper");
    if (!dropdown || !wrapper) return;

    const closeAction = () => {
        dropdown.classList.remove("active");
        setTimeout(() => {
            if (!dropdown.classList.contains("active")) {
                dropdown.style.display = "none";
                wrapper.style.zIndex = "10"; // Kembali ke tumpukan normal
            }
        }, 300);
    };

    if (forceClose) {
        closeAction();
        return;
    }

    const isOpening = !dropdown.classList.contains("active");

    if (isOpening) {
        // Angkat seluruh wrapper ke lapisan teratas (di atas nav-controls lainnya)
        wrapper.style.zIndex = "99999"; 
        dropdown.style.display = "block";
        void dropdown.offsetWidth; // Force Reflow
        dropdown.classList.add("active");
    } else {
        closeAction();
    }
}

/**
 * Click Outside Handler
 */
document.addEventListener("click", (e) => {
    const dropdown = document.getElementById("dropdown");
    const kebabBtn = document.getElementById("kebab-menu-btn");
    
    if (dropdown && dropdown.classList.contains("active")) {
        // Jika klik bukan di menu dan bukan di tombol kebab, tutup.
        if (!dropdown.contains(e.target) && !kebabBtn.contains(e.target)) {
            toggleMenu(true);
        }
    }
});

/**
 * Typewriter Effect
 */
function typeWriter(text, i, cb) {
    const el = document.getElementById("hero-title");
    if (el) {
        if (i < text.length) {
            el.innerHTML = text.substring(0, i + 1) + '<span class="typewriter-cursor"></span>';
            setTimeout(() => typeWriter(text, i + 1, cb), 60);
        } else if (cb) {
            setTimeout(cb, 500);
        }
    }
}

// --- 4. DATA RENDERING ---

function renderProducts(data) {
    const grid = document.getElementById("main-grid");
    if (!grid) return;
    
    grid.innerHTML = "";
    data.forEach((p) => {
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
            <div class="price-tag">${p.price}</div>
            <img src="${p.img}" class="card-img" alt="" loading="lazy">
            <h3 style="font-size:1.8rem; letter-spacing:-1px; margin-bottom:10px;">${p.name}</h3>
            <p style="color:var(--text-dim); margin-bottom:25px; font-weight:300;">${p.desc}</p>
            <button class="btn-premium" onclick="openModal('${p.name}', '${p.price}')">Acquire License</button>
        `;
        grid.appendChild(card);
    });
}

function handleSearch() {
    const q = document.getElementById("search-bar").value.toLowerCase();
    const filtered = VAULT_DATA.products.filter(p => 
        p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
    );
    renderProducts(filtered);
}

// --- 5. MODAL & PAYMENT SYSTEM ---

function openModal(n, p) {
    curN = n; curP = p;
    document.getElementById("target-name").innerText = n.toUpperCase();
    document.getElementById("target-price").innerText = p;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function selectPayment(method, element) {
    document.querySelectorAll('.method-card').forEach(card => card.classList.remove('active'));
    element.classList.add('active');
    selectedGateway = method;
}

function confirmInquiry() {
    const clientName = document.getElementById("client-name").value;
    if (!clientName) return alert("Identity Verification Required.");
    
    const subject = encodeURIComponent(`Acquisition: ${curN}`);
    const body = encodeURIComponent(
        `CLIENT: ${clientName}\nASSET: ${curN}\nVALUE: ${curP}\nGATEWAY: ${selectedGateway}`
    );

    window.location.href = `mailto:${VAULT_DATA.owner.email}?subject=${subject}&body=${body}`;
    closeModal();
}

// --- 6. INITIALIZATION ---

function init() {
    // Theme Sync
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        const btn = document.getElementById("theme-btn");
        if (btn) btn.innerText = "DARK MODE";
    }

    // Static Content Mapping
    document.getElementById("nav-logo").innerHTML = `${VAULT_DATA.owner.firstName} <span>${VAULT_DATA.owner.lastName}</span>`;
    document.getElementById("hero-badge").innerText = VAULT_DATA.owner.badge;
    document.getElementById("footer-text").innerText = VAULT_DATA.content.footer;
    document.getElementById("hero-desc").innerText = VAULT_DATA.content.heroDesc;

    // Render Menu Links
    const linksBox = document.getElementById("social-links");
    if (linksBox) {
        linksBox.innerHTML = "";
        VAULT_DATA.menu.forEach((item) => {
            linksBox.innerHTML += `
                <a href="javascript:void(0)" onclick="navigateTo('${item.id}')" 
                   style="padding:18px 25px; display:block; color:var(--text-main); text-decoration:none; font-size:0.75rem; border-bottom:1px solid var(--border); transition:0.3s; font-weight:700;">
                   ${item.label.toUpperCase()}
                </a>`;
        });
    }

    // Launch Intro
    setTimeout(() => {
        typeWriter(VAULT_DATA.content.heroTitle, 0, () => {
            renderProducts(VAULT_DATA.products);
        });
    }, 800);
}

window.onload = init;
