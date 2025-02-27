import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: "https://my-portfolio-git-main-ikwerredevs-projects.vercel.app",
      dynamicRoutes: ["/"],
      robotsTxt: false, // Change this to false
    }),
  ],
});