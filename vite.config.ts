import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";
import vueI18n from '@intlify/unplugin-vue-i18n/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
     vueI18n({
     runtimeOnly: false,
    }),
    tailwindcss()],
    resolve: {
    alias: {
      // Production မှာ i18n အလုပ်လုပ်စေရန် alias ထည့်ပေးပါ
      'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-browser.js'
    }
  }
})
