import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*"],
      },
      includeAssets: ["**/*"],
      manifest: {
        name: "Workcheck",
        short_name: "Workcheck",
        start_url: ".",
        display: "standalone",
        theme_color: "#22612B",
        background_color: "#22612B",
        icons: [
          {
            src: "/icons/512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/icons/192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/icons/144x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
