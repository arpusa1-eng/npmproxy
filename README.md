# 🧭 Local Proxy Browser

A **Node.js-based local web proxy browser** that runs on `localhost:8080`.  
It intercepts and rewrites requests so you can browse external sites through your own proxy interface.

---

## 🚀 Features
- Runs locally with an **Express.js** backend  
- **Proxy engine** using `http-proxy-middleware`  
- **Redirect rewriting** – keeps navigation inside `/proxy/?url=...`  
- **HTML rewriting** – ensures links, forms, and images stay proxied  
- **Simple front-end browser UI** with tabs, navigation, and URL bar  

---

## ⚙️ Installation
```bash
git clone htttps://github.com/arpusa1-eng/npmproxy.git
cd complex-local-browser
npm install
npm start
