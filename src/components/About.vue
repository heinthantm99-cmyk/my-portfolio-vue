<template>
  <section
    id="about"
    ref="aboutRef"
    class="min-h-screen flex flex-col justify-center items-center px-6 bg-gray-900 text-white opacity-0"
  >
    <h2 class="text-4xl font-bold mb-6">{{ t('about') }}</h2>
    <p class="max-w-xl text-center opacity-80">{{ t('aboutText') }}</p>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { useI18n } from "vue-i18n";

const aboutRef = ref<HTMLElement | null>(null);
const { t } = useI18n();
const aboutText =
  "John builds modern, interactive web interfaces using Vue, TypeScript, Tailwind, and other frontend technologies.";

onMounted(() => {
  if (aboutRef.value) {
    gsap.to(aboutRef.value, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutRef.value,
        start: "top 80%",
      },
    });
  }
});
</script>
