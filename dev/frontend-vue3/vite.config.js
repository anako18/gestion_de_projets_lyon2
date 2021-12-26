import { defineConfig } from "vite"
import { resolve } from "path"
import eslint from "@rollup/plugin-eslint"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src")
      }
    ]
  },
  plugins: [
    {
      ...eslint({
        fix: true,
        include: ["src/**/*.vue", "src/**/*.js"]
      }),
      enforce: "pre",
      apply: "serve"
    },
    vue()
  ]
})
