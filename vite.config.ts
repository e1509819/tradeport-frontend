import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig (({ mode }) => ({
  plugins: [react()],
  define: {
    "process.env": {},
  },
  server: {
    port: 3001,
    allowedHosts:["tradeport.cloud"],
    hmr: mode === 'development' ? {} : false
  },
  preview: { port: 8080, strictPort: true },
  resolve: {
    dedupe: ['react', 'react-dom', 'react-router', 'react-router-dom'],
    alias: {
      react: require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
    coverage: {
      provider: "v8", // Use V8 (C8) for coverage
      reporter: ["text", "json", "html"], // Generates text, JSON, and HTML reports
      exclude: [
        "node_modules/",
        "tests/setup.ts",
        "src/config/**",
        "src/routes/**",
        "src/pages/static/**",
        "src/posts/static/**",
        "**/components/logo/**", // Skip static components
        "**/*.config.ts", // Skip config files
        "**/*.d.ts", // Skip type definition file
      ], // Exclude unnecessary files
    },
  },
}));
