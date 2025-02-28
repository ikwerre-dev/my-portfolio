import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: "https://my-portfolio-git-main-ikwerredevs-projects.vercel.app",
      dynamicRoutes: ["/"],
      outDir: './dist',
      robots: false,
      exclude: [], // Add empty exclude array
      urls: ["/"] // Add explicit URLs array
    }),
  ],
});