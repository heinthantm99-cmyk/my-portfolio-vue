import { defineStore } from 'pinia'
import i18n from '@/main' // ခင်ဗျားရဲ့ i18n instance ကို import လုပ်ပါ (လမ်းကြောင်း စစ်ပေးပါ)

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