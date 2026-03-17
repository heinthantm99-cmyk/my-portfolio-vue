<template>
  <section
    id="projects"
    class="min-h-screen flex flex-col justify-center items-center px-6 bg-gray-900 text-white"
  >
    <h2 class="text-4xl font-bold mb-8">{{ t('projects') }}</h2>
    <div class="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
      <div
        v-for="(project, i) in projects"
        :key="i"
        class="project-card bg-gray-800 p-6 rounded-xl shadow-lg text-center opacity-0"
      >
        <h3 class="font-semibold text-xl mb-2">{{ t(project.title) }}</h3>
        <p class="opacity-80 mb-4">{{ t(project.desc) }}</p>
        <a 
          v-if="project.link" 
          :href="project.link" 
          target="_blank"
          class="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3  rounded-lg font-medium transition"
        >
          Live Demo →
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const projects = [
  {
    title: "projects_title1",
    desc: "projects_desc1",
    link: "https://vue-admin-panel-ashy.vercel.app/#/",
  },
  {
    title: "Project Two React",
    desc: "GSAP-powered card animations.",
    link: "https://google.com",
  },
  {
    title: "Project Three Next.js",
    desc: "Responsive Tailwind UI showcase.",
    link: "https://google.com",
  },
   {
    title: "Project Three Nuxt.js",
    desc: "Responsive Tailwind UI showcase.",
    link: "https://google.com",
  },
    {
    title: "Project Three React Native",
    desc: "Responsive Tailwind UI showcase.",
    link: "https://google.com",
  },
   {
    title: "Project Three Uniapp",
    desc: "Responsive Tailwind UI showcase.",
    link: "https://google.com",
  },
  {
    title: "Project Three Electron",
    desc: "Responsive Tailwind UI showcase.",
    link: "https://google.com",
  },
  {
    title: "Project Three Web3",
    desc: "Responsive Tailwind UI showcase.",
    link: "https://google.com",
  },
   {
    title: "Project Three LLMs",
    desc: "Responsive Tailwind UI showcase.",
    link: "https://google.com",
  },
    {
    title: "Project Three Vue Full Stack",
    desc: "Responsive Tailwind UI showcase.",
    link: "https://google.com",
  },
    {
    title: "Project Three React Full stack",
    desc: "Responsive Tailwind UI showcase.",
    link: "https://google.com",
  },
];

onMounted(async () => {
  const cards = gsap.utils.toArray<HTMLElement>(".project-card");

  // explicitly set starting state
  gsap.set(cards, { opacity: 0, y: 40 });

  // animate to visible
  gsap.to(cards, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#projects",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
});
</script>
