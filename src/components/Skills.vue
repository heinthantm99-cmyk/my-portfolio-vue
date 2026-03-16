<template>
  <section
    id="skills"
    class="min-h-screen flex flex-col justify-center items-center px-6 bg-gray-800 text-white"
  >
    <h2 class="text-4xl font-bold mb-6">{{ t('skills') }}</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="(skill, i) in skills"
        :key="i"
        class="skill-card p-4 bg-gray-700 rounded-lg text-center"
      >
        {{ skill }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";
import { useI18n } from "vue-i18n";


const { t } = useI18n();

const skills = ["Vue 3", "TypeScript", "Tailwind CSS", "GSAP","React","Node.js","React Native","Uniapp","Next.js","Nuxt.js","Electron"];

onMounted(() => {
  // Remove old inline styles first (if any)
  gsap.set(".skill-card", { opacity: 0, y: 30 });

  // Animate all skills
  gsap.to(".skill-card", {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "back.out(1.3)",
    scrollTrigger: {
      trigger: "#skills",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
});
</script>
