// server.js
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Define app FIRST
const app = express();
const PORT = 8080;

// Serve the frontend files
app.use(express.static(path.join(__dirname, "public")));

// Proxy route
app.use(
  "/proxy",
  createProxyMiddleware({
    target: "https://example.com", // default target (won’t actually be used)
    changeOrigin: true,
    pathRewrite: { "^/proxy/": "/" },

    router: (req) => {
      const urlParam = req.query.url;
      if (urlParam) return new URL(urlParam).origin;
      return "https://example.com";
    },

    onProxyReq(proxyReq, req, res) {
      const urlParam = req.query.url;
      if (urlParam) {
        const parsed = new URL(urlParam);
        proxyReq.path = parsed.pathname + parsed.search;
      }
    },
  })
);

app.listen(PORT, () => {
  console.log(`🚀 Local browser proxy running at http://localhost:${PORT}`);
});
