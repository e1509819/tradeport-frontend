import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react({
        jsxRuntime: "automatic", // Use the modern JSX runtime (default for React 17+)
      }),
    ],
    resolve: {
      alias: {
        // Add aliases if needed; remove unused ones
        "@": "/src", // Common alias for cleaner imports
      },
    },
    server: {
      host: "0.0.0.0", // Required for Docker and external access
      port: 3000, // Default development port
      strictPort: true, // Fail if the port is in use
      watch: {
        usePolling: true, // Ensure file changes are detected in Docker
        interval: 100, // Optional: Adjust for better performance
      },
    },
    build: {
      outDir: "dist", // Output directory
      emptyOutDir: true, // Clean the output directory before building
      sourcemap: mode !== "production", // Enable sourcemaps for non-production builds
      rollupOptions: {
        output: {
          manualChunks: {
            // Separate large dependencies into chunks for better caching
            react: ["react", "react-dom"],
            // ! Restore this if needed
            //! vendor: ["uuid"], // Example: Include other shared libraries
          },
        },
      },
      cssCodeSplit: true, // Split CSS into separate files
      // ! Restore this if needed
      //! minify: mode === "production" ? "terser" : false, // Minify only in production
      minify: mode === "production" ? "esbuild" : false, // Use esbuild instead of terser
      terserOptions: {
        compress: {
          drop_console: true, // Remove console logs in production
          drop_debugger: true, // Remove debugger statements
        },
      },
    },
    base: env.VITE_BASE_URL || "/", // Dynamically set the base path for assets
    css: {
      modules: {
        // Configure CSS modules if used
        localsConvention: "camelCase", // Use camelCase for class names
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/variables.scss";`, // Example: Global SCSS variables
        },
      },
    },
    esbuild: {
      target: "esnext", // Target modern browsers
    },
  };
});
