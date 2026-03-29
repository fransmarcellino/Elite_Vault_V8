"use strict";

const VAULT_DATA = {
    owner: { email: "fransmarselinosroyer@gmail.com" },
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
        { name: "Zenith ERP", price: "$4,500", desc: "Global Logistics Logic.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Zenith+ERP" }
    ],
    menu: [
        { label: "Home", id: "home" },
        { label: "Vault", id: "market" },
        { label: "About", id: "about" }
    ]
};

let selectedGateway = "PayPal";
let currentAssetName = "";
let currentAssetPrice = "";

// --- UI CORE ---
document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("cursor");
    if (cursor) {
        requestAnimationFrame(() => {
            cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        });
    }
}, { passive: true });

function navigateTo(id) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(p => {
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
        requestAnimationFrame(() => dropdown.classList.add("active"));
    }
}

// --- RENDERER ENGINE (Optimized for LCP/CLS) ---
function renderProducts(data) {
    const grid = document.getElementById("main-grid");
    if (!grid) return;

    const fragment = document.createDocumentFragment();
    data.forEach((p, index) => {
        const card = document.createElement("article");
        card.className = "card";
        
        // Audit Fix: Eager load for first element to hit 100 score
        const loadingType = index === 0 ? "eager" : "lazy";
        const priority = index === 0 ? "fetchpriority='high'" : "";

        card.innerHTML = `
            <div class="price-tag">${p.price}</div>
            <img src="${p.img}" class="card-img" alt="${p.name}" width="800" height="600" loading="${loadingType}" ${priority}>
            <h3>${p.name}</h3>
            <p style="color:var(--text-dim); margin-bottom:25px; font-size:0.9rem;">${p.desc}</p>
            <button class="btn-premium btn-main" onclick="openModal('${p.name}', '${p.price}')">Acquire License</button>
        `;
        fragment.appendChild(card);
    });

    grid.innerHTML = "";
    grid.appendChild(fragment);
}

function handleSearch() {
    const q = document.getElementById("search-bar").value.toLowerCase();
    const filtered = VAULT_DATA.products.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    renderProducts(filtered);
}

// --- MODAL ENGINE ---
function openModal(name, price) {
    currentAssetName = name;
    currentAssetPrice = price;
    document.getElementById("target-name").innerText = name.toUpperCase();
    document.getElementById("target-price").innerText = price;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function selectPayment(method, el) {
    document.querySelectorAll(".method-card").forEach(c => c.classList.remove("active"));
    el.classList.add("active");
    selectedGateway = method;
}

function confirmInquiry() {
    const name = document.getElementById("client-name").value;
    if (!name) return alert("Verification Required.");
    const body = `INQUIRY REPORT:\nClient: ${name}\nAsset: ${currentAssetName}\nPrice: ${currentAssetPrice}\nMethod: ${selectedGateway}`;
    window.location.href = `mailto:${VAULT_DATA.owner.email}?subject=Inquiry: ${currentAssetName}&body=${encodeURIComponent(body)}`;
    closeModal();
}

// --- INITIALIZE ---
document.addEventListener("DOMContentLoaded", () => {
    // Theme Recovery
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        document.getElementById("theme-btn").innerText = "DARK MODE";
    }

    // Build Footer & Menu
    document.getElementById("footer-text").innerText = VAULT_DATA.content.footer;
    const linksBox = document.getElementById("social-links");
    VAULT_DATA.menu.forEach(item => {
        const a = document.createElement("a");
        a.href = "#";
        a.style = "display:block; padding:18px 25px; color:var(--text-main); text-decoration:none; font-size:0.7rem; font-weight:800; border-bottom:1px solid var(--border);";
        a.innerText = item.label.toUpperCase();
        a.onclick = (e) => { e.preventDefault(); navigateTo(item.id); };
        linksBox.appendChild(a);
    });

    renderProducts(VAULT_DATA.products);

    // Typewriter
    const heroEl = document.getElementById("hero-title");
    let charIdx = 0;
    const fullText = VAULT_DATA.content.heroTitle;
    function type() {
        if (charIdx <= fullText.length) {
            heroEl.textContent = fullText.substring(0, charIdx);
            charIdx++;
            setTimeout(type, 50);
        }
    }
    type();
});

// Click Outside Close
document.addEventListener("click", (e) => {
    const dropdown = document.getElementById("dropdown");
    const kebab = document.getElementById("kebab-menu-btn");
    if (dropdown?.classList.contains("active") && !dropdown.contains(e.target) && !kebab.contains(e.target)) {
        toggleMenu(true);
    }
});
