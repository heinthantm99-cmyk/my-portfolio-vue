import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  // 1. Data သိမ်းမယ့်နေရာ
  state: () => ({
    currentLanguage: 'en',
    isDarkMode: true
  }),
  
  // 2. Data ကို ပြုပြင်ပြောင်းလဲမယ့် function များ
  actions: {
    setLanguage(lang: string) {
      this.currentLanguage = lang
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode
    }
  }
})