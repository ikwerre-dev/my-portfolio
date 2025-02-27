import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";
import react from "@vitejs/plugin-react";
import path from 'path';
import fs from 'fs';

// Ensure robots.txt exists before build
const robotsContent = `User-agent: *\nAllow: /\nSitemap: https://robinsonhonour.me/sitemap.xml`;
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}
fs.writeFileSync('public/robots.txt', robotsContent);

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: "https://robinsonhonour.me",
      dynamicRoutes: ["/"],
      outDir: 'dist',
      robots: true
    }),
  ],
  build: {
    assetsInclude: ['**/*.otf'],
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/otf/i.test(ext)) {
            return `fonts/[name][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@fonts': path.resolve(__dirname, 'src/fonts/clash'),
    },
  },
  publicDir: 'public',
});
