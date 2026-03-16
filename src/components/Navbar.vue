<template>
  <nav
    ref="nav"
    class="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md z-50 p-4 flex items-center justify-between gap-8 transition-all duration-300"
  >
    <!-- Navigation Links -->
    <div class="flex gap-8">
      <a
        v-for="link in links"
        :key="link.id"
        :href="`#${link.id}`"
        class="text-white hover:text-green-400 transition-colors font-medium shadow-inner"
      >
        {{ t('nav.'+link.id) }}
      </a>
    </div>

    <!-- Language Switcher -->
    <div class="flex items-center gap-1 bg-white/30 rounded-lg p-1">
      <button
        v-for="lang in languages"
        :key="lang.code"
        @click="changeLanguage(lang.code)"
        :class="{
          'bg-green-500 text-white shadow-md': currentLang === lang.code,
        }"
        class="px-4 py-2 text-sm font-medium rounded-md transition-all hover:bg-green-500/20"
      >
        {{ lang.label }}
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const links = [
  { id: "hero", label: "nav.hero" },
  { id: "about", label: "nav.about" },
  { id: "skills", label: "nav.skills" },
  { id: "projects", label: "nav.projects" },
  { id: "contact", label: "nav.contact" },
];

const languages = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
  { code: "my", label: "မြန်မာ" },
];

const nav = ref<HTMLElement | null>(null);
const { locale } = useI18n();
const { t } = useI18n();
const currentLang = ref(locale.value);

// ====================== LANGUAGE SWITCHER ======================
const changeLanguage = (lang: string) => {
  locale.value = lang;
  currentLang.value = lang;
};

onMounted(() => {
  const handleScroll = () => {
    if (window.scrollY > 50 && nav.value) {
      nav.value.classList.add("shadow-lg", "bg-black/70");
    } else if (nav.value) {
      nav.value.classList.remove("shadow-lg", "bg-black/70");
    }
  };
  window.addEventListener("scroll", handleScroll);
});
</script>
