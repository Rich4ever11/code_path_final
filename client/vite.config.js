import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  envDir: "../",
  build: {
    outDir: "../server/public",
    emptyOutDir: true,
    commonjsOptions: { transformMixedEsModules: true }, // Change
  },
  resolve: {
    alias: {
      picocss: path.resolve(__dirname, "../node_modules/@picocss/pico/css"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
    },
  },
});
