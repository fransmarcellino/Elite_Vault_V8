Elite Vault v8.2.9 — Digital Architect Portfolio

Elite Vault is a high-performance personal portfolio and digital asset catalog for Frans Marcellino.
It is built entirely with HTML, CSS, and vanilla JavaScript, with zero external frameworks.

The project emphasizes performance, control, and architectural clarity.

---

🧩 Core Features

- Static Architecture — No dependencies, no build tools, no lock-in
- Product Repository — 8 digital assets rendered dynamically from a single data source
- Real-Time Search — Debounced filtering (250ms) by name and description
- Typewriter Hero Animation — Lightweight, JavaScript-driven effect
- Modal Inquiry System — Product selection with email-based transaction flow
- Theme Switching — Light/Dark mode with "localStorage" persistence
- Custom Cursor (Desktop) — Enhanced visual identity
- Dropdown Navigation — Minimal, accessible menu system
- Animated UI Cards — CSS-driven hover effects (no JS animation libraries)

---

📁 Project Structure

Elite_Vault_V8.2.9/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── img/
│       ├── Titan Core.webp
│       ├── Quantum UI.webp
│       ├── SecureAuth X.webp
│       ├── Nebula AI.webp
│       ├── Apex CMS.webp
│       ├── Zenith ERP.webp
│       ├── Vortex DB.webp
│       └── Cipher Mesh.webp

---

⚙️ How It Works

All dynamic content is controlled via a single object:

const VAULT_DATA = { ... }

This includes:

- Products
- FAQ
- Navigation
- Owner details

No backend or API is used.

---

🚀 Running the Project

No installation required.

1. Open the project folder
2. Run "index.html" in any modern browser

That’s it.

---

📘 Usage Flow

1. Browse products in the Vault
2. Filter using the search input
3. Click Acquire License
4. Enter your name and select a payment method
5. Submit → opens pre-filled email

---

⚠️ Limitations

- No real payment integration (email-based workflow only)
- No backend or database
- No authentication system
- Images must exist locally in "/assets/img/"

---

🔐 Security Notes

- Basic HTML escaping is implemented
- No full sanitization library is used
- Email flow relies on "mailto:" (client-side only)

---

🎯 Positioning

This project is designed for:

- Developers who prefer full control over abstraction
- Portfolio owners selling high-value digital assets
- Static-first architecture enthusiasts

---

📄 License

MIT License (with additional restrictions on asset redistribution)

© 2026 Frans Marcellino
