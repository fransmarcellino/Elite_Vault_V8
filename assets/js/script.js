"use strict";

const VAULT_DATA = {
    owner: { email: "fransmarselinosroyer@gmail.com" },
    content: { footer: "© 2026 FRANS MARCELLINO — ARCHITECTING DIGITAL SOVEREIGNTY" },
    products: [
        { name: "Titan Core", price: "$1,290", desc: "Enterprise SaaS Framework.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Titan+Core" },
        { name: "Quantum UI", price: "$750", desc: "Kinetic React Components.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Quantum+UI" },
        { name: "SecureAuth X", price: "$490", desc: "Zero-Knowledge Auth Suite.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=SecureAuth+X" },
        { name: "Nebula AI", price: "$2,999", desc: "Neural Integration Engine.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Nebula+AI" },
        { name: "Apex CMS", price: "$1,800", desc: "Headless Content Engine.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Apex+CMS" },
        { name: "Zenith ERP", price: "$4,500", desc: "Global Logistics Logic.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Zenith+ERP" }
    ]
};

let curN = "", curP = "";

// --- CUSTOM CURSOR ENGINE ---
const cursorEl = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
    if (cursorEl) {
        window.requestAnimationFrame(() => {
            cursorEl.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        });
    }
}, { passive: true });

// --- NAVIGATION ENGINE ---
function navigateTo(id) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    const target = document.getElementById(id);
    if (target) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => target.classList.add("active"), 100);
    }
    toggleMenu(true);
}

// --- MASTER THEME ENGINE (FIXED) ---
function toggleTheme() {
    const isLight = document.body.classList.toggle("light-mode");
    const btn = document.getElementById("theme-btn");
    
    if (isLight) {
        btn.innerText = "DARK MODE";
        localStorage.setItem("theme", "light");
    } else {
        btn.innerText = "LIGHT MODE";
        localStorage.setItem("theme", "dark");
    }
}

// --- UI HELPERS ---
function toggleMenu(forceClose = false, event = null) {
    if (event) event.stopPropagation();
    const dropdown = document.getElementById("dropdown");
    if (forceClose) {
        dropdown.classList.add("hidden");
    } else {
        dropdown.classList.toggle("hidden");
    }
}

function renderProducts(data) {
    const grid = document.getElementById("main-grid");
    if (!grid) return;
    grid.innerHTML = data.map((p) => `
        <article class="card group">
            <div class="ev-video-bg"></div>
            <div class="price-tag">${p.price}</div>
            <img src="${p.img}" class="card-img" alt="${p.name}">
            <h3 class="text-xl font-extrabold mt-6 mb-2 tracking-tight">${p.name}</h3>
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

// --- MODAL ENGINE ---
function openModal(n, p) {
    curN = n; curP = p;
    document.getElementById("target-name").innerText = n.toUpperCase();
    document.getElementById("target-price").innerText = p;
    document.getElementById("modal").classList.remove("hidden");
    document.getElementById("modal").classList.add("flex");
}

function closeModal() { 
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("modal").classList.remove("flex");
}

function confirmInquiry() {
    const clientName = document.getElementById("client-name").value;
    if (!clientName) return alert("Identity Verification Required.");
    const body = `CLIENT: ${clientName}\nASSET: ${curN}\nVALUE: ${curP}`;
    window.location.href = `mailto:${VAULT_DATA.owner.email}?subject=Inquiry: ${curN}&body=${encodeURIComponent(body)}`;
    closeModal();
}

// --- INITIALIZATION ---
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        document.getElementById("theme-btn").innerText = "DARK MODE";
    }
    document.getElementById("footer-text").innerText = VAULT_DATA.content.footer;
    renderProducts(VAULT_DATA.products);
});
