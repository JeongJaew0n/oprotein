import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode, command }) => {

  return {
    plugins: [react()],
    server: {
      port: 3700
    }
  }
});