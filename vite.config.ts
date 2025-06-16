import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Only add base when deploying to GitHub Pages
const isGitHubPages = process.env.DEPLOY_TARGET === "gh-pages";

export default defineConfig({
  base: isGitHubPages ? "/Silva-Portfolio/" : "/", // ✅ Conditional base
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
