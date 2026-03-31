"use strict";

const VAULT_DATA = {
    owner: { email: "fransmarselinosroyer@gmail.com" },
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

// UI Engine
document.addEventListener("mousemove", (e) => {
    if (cursorEl) {
        window.requestAnimationFrame(() => {
            cursorEl.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        });
    }
}, { passive: true });

function navigateTo(id) {
    document.querySelectorAll(".page").forEach(p => {
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
        dropdown.offsetHeight;
        dropdown.classList.add("active");
    }
}

// Close on outside click
document.addEventListener("click", () => toggleMenu(true));

// Typewriter
function typeWriter(text, i) {
    const el = document.getElementById("hero-title");
    if (el && i <= text.length) {
        el.textContent = text.substring(0, i);
        setTimeout(() => typeWriter(text, i + 1), 50);
    }
}

// Render Products
function renderProducts(data) {
    const grid = document.getElementById("main-grid");
    if (!grid) return;
    const aiClasses = ["ai-vid-1", "ai-vid-2", "ai-vid-3", "ai-vid-4", "ai-vid-5", "ai-vid-6", "ai-vid-7", "ai-vid-8"];
    
    grid.innerHTML = data.map((p, i) => `
        <article class="card">
            <div class="ev-video-bg ${aiClasses[i % aiClasses.length]}"></div>
            <div class="price-tag">${p.price}</div>
            <img src="${p.img}" class="card-img" alt="${p.name}" loading="lazy">
            <h3>${p.name}</h3>
            <p style="color:var(--text-dim); font-size:0.9rem; margin-bottom:20px;">${p.desc}</p>
            <button class="btn-premium" onclick="openModal('${p.name}', '${p.price}')">Acquire License</button>
        </article>
    `).join("");
}

function handleSearch() {
    const q = document.getElementById("search-bar").value.toLowerCase();
    const filtered = VAULT_DATA.products.filter(p => p.name.toLowerCase().includes(q));
    renderProducts(filtered);
}

// Modal Engine
function openModal(n, p) {
    curN = n; curP = p;
    document.getElementById("target-name").innerText = n.toUpperCase();
    document.getElementById("target-price").innerText = p;
    document.getElementById("modal").style.display = "flex";
}
function closeModal() { document.getElementById("modal").style.display = "none"; }
function selectPayment(m, el) {
    document.querySelectorAll(".method-card").forEach(c => c.classList.remove("active"));
    el.classList.add("active");
    selectedGateway = m;
}
function confirmInquiry() {
    const name = document.getElementById("client-name").value;
    if (!name) return alert("Verification Required.");
    window.location.href = `mailto:${VAULT_DATA.owner.email}?subject=Inquiry: ${curN}&body=Name: ${name}%0AAsset: ${curN}%0APrice: ${curP}%0AGateway: ${selectedGateway}`;
}

// Init
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("theme") === "light") toggleTheme();
    document.getElementById("footer-text").innerText = VAULT_DATA.content.footer;
    const linksBox = document.getElementById("social-links");
    linksBox.innerHTML = VAULT_DATA.menu.map(m => `<a href="#" onclick="navigateTo('${m.id}')" style="padding:18px 25px; display:block; color:var(--text-main); text-decoration:none; font-size:0.75rem; border-bottom:1px solid var(--border); font-weight:700;">${m.label.toUpperCase()}</a>`).join("");
    renderProducts(VAULT_DATA.products);
    typeWriter(VAULT_DATA.content.heroTitle, 0);
});
