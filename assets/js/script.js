"use strict";

const VAULT_CONFIG = {
    // SFX Cinematic (Base64) - Ringan & Tidak memberatkan PageSpeed
    clickSfx: "data:audio/wav;base64,UklGRl9vT19XQVZFRm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YTdvT18AZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZg==",
    owner: "fransmarselinosroyer@gmail.com",
    footer: "© 2026 FRANS MARCELLINO — ALL RIGHTS RESERVED"
};

const sfx = new Audio(VAULT_CONFIG.clickSfx);
function playClick() { sfx.currentTime = 0; sfx.play().catch(()=>{}); }

// High-Performance Cursor
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
    if(cursor) {
        requestAnimationFrame(() => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });
    }
}, { passive: true });

// Navigation Engine
function navigateTo(id) {
    playClick();
    const pages = document.querySelectorAll(".page");
    pages.forEach(p => {
        p.classList.remove("active");
        setTimeout(() => p.style.display = "none", 400);
    });
    const target = document.getElementById(id);
    setTimeout(() => {
        target.style.display = "block";
        requestAnimationFrame(() => target.classList.add("active"));
    }, 450);
}

// Search & Filter
function handleSearch() {
    const q = document.getElementById("search-bar").value.toLowerCase();
    document.querySelectorAll(".card").forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(q) ? "block" : "none";
    });
}

// Modal Interaction
function openModal(name, price) {
    playClick();
    document.getElementById("target-name").innerText = name.toUpperCase();
    document.getElementById("target-price").innerText = price;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Init Function
function initVault() {
    document.getElementById("footer-text").innerText = VAULT_CONFIG.footer;
    
    // Build Dynamic Menu
    const menuItems = [ {l: "Home", id: "home"}, {l: "Vault", id: "market"}, {l: "About", id: "about"} ];
    const menuContainer = document.getElementById("social-links");
    menuItems.forEach(item => {
        const a = document.createElement("a");
        a.href = "#";
        a.style = "display:block; padding:15px; color:var(--text-main); text-decoration:none; font-weight:800; font-size:0.7rem; border-bottom:1px solid var(--border);";
        a.innerText = item.l.toUpperCase();
        a.onclick = (e) => { e.preventDefault(); navigateTo(item.id); toggleMenu(true); };
        menuContainer.appendChild(a);
    });

    // Typewriter Hero
    const heroTitle = document.getElementById("hero-title");
    const text = "Architecting Digital Sovereignty.";
    let i = 0;
    function type() {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();

    // Attach Sound to all Buttons
    document.querySelectorAll("button, .logo").forEach(btn => {
        btn.addEventListener("click", playClick);
    });
}

window.addEventListener("DOMContentLoaded", initVault);

function toggleMenu(close, e) {
    if(e) e.stopPropagation();
    const d = document.getElementById("dropdown");
    d.classList.toggle("active");
}

function toggleTheme() {
    playClick();
    document.body.classList.toggle("light-mode");
}
