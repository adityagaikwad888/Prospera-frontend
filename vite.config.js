import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VITE_BACKEND_URL } from "./src/const_var"; // Import the backend URL from const_var.js

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // The directory where the build files will be placed
  },
  server: {
    port: 3000,
  },
  base: "/", // Ensures assets are referenced relative to the root
});
