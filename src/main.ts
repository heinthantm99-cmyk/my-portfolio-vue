import { createApp } from "vue";
import App from "./App.vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { createI18n } from 'vue-i18n'
import NotyfPlugin from "./plugins/notyf";
import "./style.css";
import messages from '@intlify/unplugin-vue-i18n/messages' // 
// Register GSAP plugin globally (only once)
gsap.registerPlugin(ScrollTrigger);

// const messages = {
//  en: await import('./locales/en.json'),
//   zh: await import('./locales/zh.json'),
//   my: await import('./locales/my.json')
// }

// const messages = Object.fromEntries(
//   Object.entries(
//     import.meta.glob('./locales/*.json', { eager: true })
//   ).map(([key, module]) => {
//     const lang = key.replace('./locales/', '').replace('.json', '')
//     return [lang, (module as any).default || module]
//   })
// )

const i18n = createI18n({
  locale: 'en',        // default language
  fallbackLocale: 'en',
  messages
})

const app = createApp(App);
app.use(NotyfPlugin);
app.use(i18n);
app.mount("#app");
