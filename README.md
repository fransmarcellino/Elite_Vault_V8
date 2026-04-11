 🏗️ MASTER GUIDE: ELITE VAULT V8.2.9 MAINTENANCE
__________________________________________________________________________________________________________________________

●This website is built with a **Clean-Code & Modular** architecture. Follow this guide to ensure maximum performance and  prevent breaking core functionalities during updates.

---

### 1. Folder Structure & File Management
Maintain the following directory structure for the scripts and assets to load correctly:
* `index.html` (Main Structure)
* `assets/css/style.css` (Visuals & Themes)
* `assets/js/script.js` (Logic & Product Data)
* `assets/img/` (Store all product images in `.webp` format here)

---

### 2. Product Management (Inventory Update)
You do not need to edit the HTML file to add or modify products. Open `script.js` and locate the `VAULT_DATA.products` object.
* **Adding a Product:** Add a new line inside the square brackets `[]`:
    `{ name: "Product Name", price: "$200", desc: "Short description.", img: "assets/img/filename.webp" },`
* **Important:** The image filename must match exactly with the `img` path. Use `.webp` format for industry-leading page speed.

---

### 3. Identity & Contact Synchronization (Global Sync)
Static text and contact details are managed via `VAULT_DATA.owner` at the top of the `script.js` file.
* **Operational Email:** Change the `email: "..."` value to update where inquiry forms are sent.
* **Hero & Footer:** Modify the `heroTitle` or `footer` within the `content` object for instant sitewide updates.

---

### 4. CSS Maintenance & Code Integrity
* **W3C Compliance:** This site is validated using HTML5 and CSS3 standards. Avoid using inline `style="..."` attributes. Use existing classes in `style.css`.
* **ID Logic:** Do not change the `id` tags on navigation elements (e.g., `home`, `market`, `about`, `faq`) or modal buttons. The JavaScript relies on these IDs for navigation and search functions.
* **Search Engine Logic:** The `handleSearch()` function in JS filters keywords within the product `name` and `desc` in real-time.

---

### 5. Visual Optimization (AI Cinematic Artistry)
The site uses a layered background system for product cards to maintain a premium feel.
* **AI Video Classes:** The `aiClasses` array in JS automatically assigns different animation styles to each product card.
* **Light/Dark Mode:** Color variables in the CSS `:root` switch seamlessly via the `toggleTheme()` function. User preference is saved via `localStorage`.

---
**STATUS:** Documentation Protocol Complete. Prepared for Industrial Implementation.
__________________________________________________________________________________________________________________________

● LINKEDIN: https://www.linkedin.com/in/frans marcellino

*© 2026 FRANS MARCELLINO. All Rights Reserved. This documentation is part of the Elite Vault Proprietary License. Unauthorized redistribution of this manifest is strictly prohibited.*
