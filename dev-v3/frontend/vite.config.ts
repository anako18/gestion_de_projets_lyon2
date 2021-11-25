import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vuetify from "@vuetify/vite-plugin"

import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
      styles: "expose"
    })
  ],
  define: { "process.env": {} },
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/style/_variables.scss" as *;`
      }
    }
  },
  server: {
    host: "0.0.0.0"
  }
})
