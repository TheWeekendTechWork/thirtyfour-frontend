import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "./frontend",
  build: {
    outDir: "../dist",
    // Optimize build output
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
    // Better code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          react: ["react", "react-dom", "react-router-dom"],
          chakra: ["@chakra-ui/react", "@emotion/react", "@emotion/styled"],
          icons: ["react-icons", "@chakra-ui/icons"],
          motion: ["framer-motion"],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 600,
  },
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
