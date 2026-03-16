import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";
import vueI18n from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
     vueI18n({
      include: path.resolve(__dirname, './src/locales/**'),   // ← This is the important line
      runtimeOnly: false,
    }),
    tailwindcss()],
})
