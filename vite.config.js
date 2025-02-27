import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";
import react from "@vitejs/plugin-react";
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: "https://robinsonhonour.me",
      dynamicRoutes: ["/"],
      outDir: './dist',
      robots: {
        policies: [
          {
            userAgent: '*',
            disallow: ['/private/']
          }
        ],
        sitemap: 'https://robinsonhonour.me/sitemap.xml'
      }
    }),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  }
});
