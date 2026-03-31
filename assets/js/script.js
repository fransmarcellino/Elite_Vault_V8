/**
 * @file script.js
 * @description Master Core for Elite Vault v8.1.1
 */

"use strict";

const VAULT_DATA = {
    owner: { email: "fransmarselinosroyer@gmail.com" },
    content: { footer: "© 2026 FRANS MARCELLINO — ALL RIGHTS RESERVED" },
    products: [
        { name: "Titan Core", price: "$1,290", desc: "Enterprise SaaS Framework.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Titan+Core" },
        { name: "Quantum UI", price: "$750", desc: "Kinetic React Components.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Quantum+UI" },
        { name: "SecureAuth X", price: "$490", desc: "Zero-Knowledge Auth Suite.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=SecureAuth+X" },
        { name: "Nebula AI", price: "$2,999", desc: "Neural Integration Engine.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Nebula+AI" },
        { name: "Cipher Mesh", price: "$1,100", desc: "P2P Encryption Layer.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Cipher+Mesh" }
    ],
    menu: [
        { label: "Home", id: "home" },
        { label: "Vault", id: "market" },
        { label: "About", id: "about" }
    ]
};

// --- CURSOR ENGINE ---
const cursorEl = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
    if (cursorEl) {
        window.requestAnimationFrame(() => {
            cursorEl.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        });
    }
}, { passive: true });

// --- NAVIGATION ---
function navigateTo(id) {
    document.querySelectorAll(".page").forEach(p => {
        p.classList.remove("active");
        p.style.display = "none";
    });
    const target = document.getElementById(id);
    if (target) {
        target.style.display = "block";
        setTimeout(() => target.classList.add("active"), 50);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    toggleMenu(true);
}

function toggleTheme() {
    const isLight = document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    document.getElementById("theme-btn").innerText = isLight ? "DARK MODE" : "LIGHT MODE";
}

function toggleMenu(forceClose = false, event = null) {
    if (event) event.stopPropagation();
    const dropdown = document.getElementById("dropdown");
    if (forceClose || dropdown.classList.contains("active")) {
        dropdown.classList.remove("active");
        setTimeout(() => { if(!dropdown.classList.contains("active")) dropdown.style.display = "none"; }, 300);
    } else {
        dropdown.style.display = "block";
        setTimeout(() => dropdown.classList.add("active"), 10);
    }
}

// --- PRODUCT ENGINE ---
function renderProducts(data) {
    const grid = document.getElementById("main-grid");
    if (!grid) return;
    
    grid.innerHTML = data.map((p, index) => `
        <article class="card">
            <div class="ev-video-bg ai-vid-${(index % 2) + 1}"></div>
            <div class="price-tag">${p.price}</div>
            <img src="${p.img}" class="card-img" alt="${p.name}" loading="lazy">
            <h3>${p.name}</h3>
            <p style="color: var(--text-dim); font-size: 0.85rem; margin: 10px 0 20px;">${p.desc}</p>
            <button class="btn-premium" onclick="openModal('${p.name}', '${p.price}')">Acquire License</button>
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

// --- MODAL ENGINE ---
function openModal(name, price) {
    document.getElementById("target-name").innerText = name.toUpperCase();
    document.getElementById("target-price").innerText = price;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() { document.getElementById("modal").style.display = "none"; }

function confirmInquiry() {
    const client = document.getElementById("client-name").value;
    if (!client) return alert("Please verify your identity.");
    window.location.href = `mailto:${VAULT_DATA.owner.email}?subject=Inquiry&body=Client: ${client}`;
}

// --- INIT ---
window.addEventListener('DOMContentLoaded', () => {
    // Render Menu
    const menuLinks = document.getElementById("menu-links");
    VAULT_DATA.menu.forEach(item => {
        const a = document.createElement("a");
        a.href = "#";
        a.style = "display:block; padding:15px 25px; color:var(--text-main); text-decoration:none; font-weight:700; border-bottom:1px solid var(--border); font-size:0.7rem; text-transform:uppercase;";
        a.innerText = item.label;
        a.onclick = (e) => { e.preventDefault(); navigateTo(item.id); };
        menuLinks.appendChild(a);
    });

    document.getElementById("footer-text").innerText = VAULT_DATA.content.footer;
    renderProducts(VAULT_DATA.products);

    // Close menu on click outside
    document.addEventListener("click", () => toggleMenu(true));
});
