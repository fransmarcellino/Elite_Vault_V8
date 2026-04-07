/**
 * @file script.js
 * @description Core Logic for Elite Vault v8.2.9
 * @author Frans Marcellino
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
        { name: "Titan Core", price: "$1,290", desc: "Enterprise-grade SaaS structural framework.", img: "assets/img/titan.webp" },
        { name: "Quantum UI", price: "$750", desc: "Kinetic React components with fluid motion.", img: "assets/img/quantum.webp" },
        { name: "SecureAuth X", price: "$490", desc: "Zero-knowledge authentication suite.", img: "assets/img/secureauth.webp" },
        { name: "Nebula AI", price: "$2,999", desc: "Neural network integration for creative apps.", img: "assets/img/nebula.webp" },
        { name: "Apex CMS", price: "$1,800", desc: "Headless content engine with AI optimization.", img: "assets/img/apex.webp" },
        { name: "Zenith ERP", price: "$4,500", desc: "Global logistics logic for digital commerce.", img: "assets/img/zenith.webp" },
        { name: "Vortex DB", price: "$980", desc: "Real-time vector database for AI models.", img: "assets/img/vortex.webp" },
        { name: "Cipher Mesh", price: "$1,100", desc: "End-to-end P2P encryption architecture.", img: "assets/img/cipher.webp" }
    ],
    menu: [
        { label: "Home", id: "home" },
        { label: "Vault", id: "market" },
        { label: "Architect", id: "about" },
        { label: "Protocols", id: "faq" }
    ],
    faq: [
        { q: "Quality Assurance?", a: "Every artifact is W3C compliant and stress-tested for 100/100 PageSpeed scores." },
        { q: "Delivery Format?", a: "Direct ZIP archive containing source files, documentation, and a commercial license." },
        { q: "Inquiry Support?", a: "Direct priority communication channel via encrypted email inquiry system." }
    ]
};

let currentProduct = { name: "", price: "" };
let selectedGateway = "PayPal";

// --- NAVIGATION SYSTEM ---
function navigateTo(id) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => { 
        p.classList.remove('active'); 
        p.style.display = 'none'; 
    });
    
    const target = document.getElementById(id);
    if(target) {
        target.style.display = 'block';
        // Trigger reflow for animation
        target.offsetHeight; 
        target.classList.add('active');
    }
    toggleMenu(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// --- RENDER ENGINE ---
function renderProducts(data, gridId) {
    const grid = document.getElementById(gridId);
    if(!grid) return;
    
    if(data.length === 0) {
        grid.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:100px; border:1px dashed var(--border); border-radius:30px;">
                <h3 style="font-family:'Playfair Display'; italic; font-size:2rem; margin-bottom:10px;">Asset Not Found</h3>
                <p style="opacity:0.5;">No repository matches found for your current filter.</p>
            </div>`;
        return;
    }

    grid.innerHTML = data.map((p, i) => `
        <article class="card">
            <div class="ev-video-bg"></div>
            <div class="price-tag">${p.price}</div>
            <img src="${p.img}" class="card-img" alt="${p.name}" onerror="this.src='https://via.placeholder.com/600x400/111/ffd700?text=${p.name}'">
            <h3>${p.name.toUpperCase()}</h3>
            <p>${p.desc}</p>
            <button class="btn-premium" onclick="openModal('${p.name}', '${p.price}')">Acquire License</button>
        </article>
    `).join("");
}

function handleSearch() {
    const q = document.getElementById("search-bar").value.toLowerCase().trim();
    const filtered = VAULT_DATA.products.filter(p => 
        p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
    );
    renderProducts(filtered, "main-grid");
}

// --- UI INTERACTIVITY ---
function toggleMenu(forceClose = false, event = null) {
    if (event) event.stopPropagation();
    const dropdown = document.getElementById("dropdown");
    if (forceClose || dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

function toggleTheme() {
    const isLight = document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    document.getElementById("theme-btn").innerText = isLight ? "DARK MODE" : "LIGHT MODE";
}

// --- MODAL & TRANSACTION ---
function openModal(name, price) {
    currentProduct = { name, price };
    document.getElementById("target-name").innerText = name.toUpperCase();
    document.getElementById("target-price").innerText = price;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() { 
    document.getElementById("modal").style.display = "none"; 
}

function selectPayment(method, el) {
    document.querySelectorAll(".method-card").forEach(c => c.style.borderColor = "var(--border)");
    el.style.borderColor = "var(--primary)";
    selectedGateway = method;
}

function confirmInquiry() {
    const client = document.getElementById("client-name").value.trim();
    if (!client) {
        alert("Client Identity Verification Required.");
        return;
    }
    const subject = `License Acquisition: ${currentProduct.name}`;
    const body = `CLIENT: ${client}\nASSET: ${currentProduct.name}\nVALUE: ${currentProduct.price}\nGATEWAY: ${selectedGateway}\n\nPlease proceed with the licensing agreement.`;
    window.location.href = `mailto:${VAULT_DATA.owner.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    closeModal();
}

// --- INITIALIZATION ---
function init() {
    // Theme Restoration
    if (localStorage.getItem("theme") === "light") toggleTheme();

    // Cursor Movement
    document.addEventListener("mousemove", (e) => {
        const cursor = document.getElementById("cursor");
        if(cursor) {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        }
    });

    // Content Population
    document.getElementById("footer-text").innerText = VAULT_DATA.content.footer;
    renderProducts(VAULT_DATA.products, "main-grid");
    renderProducts(VAULT_DATA.products, "vault-grid");
    
    // Typewriter Hero
    let charIndex = 0;
    function typeEffect() {
        const target = document.getElementById("hero-title");
        if (charIndex < VAULT_DATA.content.heroTitle.length) {
            target.innerHTML += VAULT_DATA.content.heroTitle.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 60);
        }
    }
    typeEffect();

    // Dynamic Menu
    const menuBox = document.getElementById("dropdown");
    VAULT_DATA.menu.forEach(item => {
        const a = document.createElement("a");
        a.href = "#";
        a.innerText = item.label.toUpperCase();
        a.onclick = (e) => { 
            e.preventDefault(); 
            navigateTo(item.id); 
        };
        menuBox.appendChild(a);
    });

    // FAQ Grid
    const faqGrid = document.getElementById("faq-grid");
    if(faqGrid) {
        faqGrid.innerHTML = VAULT_DATA.faq.map(f => `
            <div class="card">
                <h3 style="color: var(--primary);">Q: ${f.q}</h3>
                <p style="margin-top:15px; opacity: 0.8; line-height: 1.8;">${f.a}</p>
            </div>
        `).join("");
    }

    // Close menu when clicking outside
    document.addEventListener('click', () => toggleMenu(true));
}

window.addEventListener("DOMContentLoaded", init);
