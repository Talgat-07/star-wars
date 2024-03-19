import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@constants": "/src/constants",
      "@hoc-helpers": "/src/hoc-helpers",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@routes": "/src/routes",
      "@services": "/src/services",
      "@store": "/src/store",
      "@styles": "/src/styles",
      "@assets": "/src/assets",
      types: "/src/types",
    },
  },
});
