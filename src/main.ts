import { createApp } from "vue";
import App from "./App.vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { createI18n } from 'vue-i18n'
import en from "./locales/en.json";
import zh from './locales/zh.json';
import my from './locales/my.json';

import NotyfPlugin from "./plugins/notyf";
import "./style.css";

// Register GSAP plugin globally (only once)
gsap.registerPlugin(ScrollTrigger);

const messages = {
  en,
  zh,
  my
}

const i18n = createI18n({
  locale: 'en',        // default language
  fallbackLocale: 'en',
  messages
})

const app = createApp(App);
app.use(NotyfPlugin);
app.use(i18n);
app.mount("#app");
