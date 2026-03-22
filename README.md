
============================================================
           ELITE VAULT | OPERATIONS MANUAL v8.0
============================================================
Architect : Frans Marcellino
Subject   : Sovereign Digital Repository
Edition   : 2026 Gold Standard
------------------------------------------------------------

1. SYSTEM OVERVIEW
Elite Vault is a high-performance Single Page Application (SPA) 
that blends luxury aesthetics with industrial-grade efficiency. 
The entire ecosystem operates within a single centralized file 
(index.html) to ensure zero-latency loading and portability.

2. IDENTITY CONFIGURATION (CRITICAL)
To update the owner’s data, open the file in a text editor 
(VS Code, Notepad++, etc.) and locate the "VAULT_DATA" object. 
Modify the following values:

   - firstName : First name (Displays in Logo)
   - lastName  : Last name (Displays in Logo)
   - email     : Target address for License Inquiries
   - badge     : Small text above the Hero title

3. ASSET MANAGEMENT (PRODUCTS)
Product data is stored within the "products" array. To add a 
new digital asset, use the following format within the code:

   { 
     name: "Asset Name", 
     price: "$1,000", 
     desc: "Functional description.", 
     img: "IMAGE_URL" 
   }

4. INTERACTION PROTOCOLS
- 3D Dynamic Tilt: Product cards respond to cursor movement 
  in real-time for an immersive depth effect.
- Secure Inquiry: Clients are required to verify their identity 
  (Full Name) before initiating a license request via email.
- Adaptive UI: Integrated Light/Dark mode toggle for visual 
  comfort across various lighting environments.

5. DEPLOYMENT GUIDE (GO-LIVE)
This site is ready for any static hosting service:
- GitHub Pages : Upload index.html to a repo, enable Pages.
- Netlify      : Drag & Drop the index.html file to the dashboard.
- Vercel       : Connect your GitHub repository for auto-deploy.

6. MAINTENANCE CHECKLIST
- Always use images with a minimum resolution of 800px.
- Maintain the "?auto=format" parameter on Unsplash URLs 
  to ensure high-speed asset delivery.
- Periodically test the "Acquire License" button to verify 
  that the mailto: protocol is functioning correctly.

------------------------------------------------------------
© 2026 FRANS MARCELLINO — ALL RIGHTS RESERVED
============================================================
