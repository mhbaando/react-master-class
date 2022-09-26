import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@ui": path.resolve(__dirname, "./src/ui"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          "@import './src/scss/_helpers','./src/scss/_mixns','./src/scss/_palette','./src/scss/_variables.scss','./src/scss/_typography.scss'; ",
      },
    },
  },
  server: {
    host: true,
  },
});
