import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: "https://my-portfolio-git-main-ikwerredevs-projects.vercel.app",
      dynamicRoutes: ["/"],
      robotsTxt: false, // Set to false to disable robots.txt generation
    }),
  ],
});