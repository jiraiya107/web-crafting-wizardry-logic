
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Configuration for Odoo domain integration
  base: process.env.ODOO_INTEGRATION === 'true' ? '/custom_app/' : '/',
  build: {
    // Output directory - adjust if needed for Odoo
    outDir: process.env.ODOO_OUTPUT_DIR || 'dist',
  }
}));
