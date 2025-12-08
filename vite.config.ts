import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // IMPORTANT:
  // No "base" path here. This makes paths resolve correctly
  // for localhost, Firebase Hosting, and your custom ATF domain.
  // base: "/",

  server: {
    port: 5173,
  },
});
