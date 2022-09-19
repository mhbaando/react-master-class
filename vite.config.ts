import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path, { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  server: {
    host: true,
  },
});
