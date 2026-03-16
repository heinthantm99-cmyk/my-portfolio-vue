<template>
  <section
    id="hero"
    class="min-h-screen flex flex-col justify-center items-center bg-linear-to-r from-purple-800 via-pink-600 to-indigo-500 text-white relative overflow-hidden"
  >
    <div ref="heroRef" class="space-y-6 text-center opacity-0">
      <h1 class="text-6xl font-extrabold">
        <span class="text-green-400">{{ t('name') }}</span>
      </h1>
      <p class="text-xl opacity-80">
        {{ t('description') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { useI18n } from 'vue-i18n'

const heroRef = ref<HTMLElement | null>(null);
const { t } = useI18n()

onMounted(() => {
  if (heroRef.value) {
    gsap.fromTo(
      heroRef.value,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
    );
  }
});
</script>
