# npmproxy
A Node.js-based local web proxy browser that runs on localhost:8080.
It intercepts and rewrites requests so you can browse external sites through your own proxy interface.
🚀 Features
Runs locally with an Express.js backend
Proxy engine using http-proxy-middleware
Redirect rewriting – keeps navigation inside /proxy/?url=...
HTML rewriting – ensures links, forms, and images stay proxied
Simple front-end browser UI with tabs, navigation, and URL bar
⚙️ Installation
git clone <your-repo-url>
cd complex-local-browser
npm install
npm start
Then open:
👉 http://localhost:8080
🧩 Project Structure
complex-local-browser/
├── server.js        # Node.js proxy + rewrite logic
├── package.json     # Dependencies and scripts
└── public/
    ├── index.html   # Browser UI
    ├── style.css    # Layout and design
    └── app.js       # Client-side navigation logic
💡 How It Works
Frontend sends requests to /proxy/?url=https://example.com.
Backend fetches the target site, rewrites:
Location headers for redirects
href, src, action links in HTML
The rewritten page is served back to the browser.
This ensures all navigation stays proxied through your app.
⚠️ Limitations
Authentication on major sites (Google, GitHub) may fail due to strict cookie/CORS/CSP rules.
JavaScript-heavy sites may need deeper content rewriting.
📄 License
MIT © 2025 — You’re free to use, modify, and distribute.
