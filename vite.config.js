import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@containers": path.resolve(__dirname, "./src/containers"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@vars": path.resolve(__dirname, "./src/css-vars/_vars.css"),
    }
  }
})
