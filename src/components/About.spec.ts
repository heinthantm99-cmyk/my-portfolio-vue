import { mount } from '@vue/test-utils'
import { describe, it, expect,vi } from 'vitest'
import About from './About.vue'

// GSAP နဲ့ ScrollTrigger ကို Testing မှာ အလုပ်မလုပ်အောင် ပိတ်ထားလိုက်တာပါ
vi.mock('gsap', () => ({
  gsap: {
    to: vi.fn(),
    from: vi.fn(),
    registerPlugin: vi.fn(),
  },
}));

vi.mock('gsap/ScrollTrigger', () => ({
  ScrollTrigger: {},
}));


// vue-i18n တစ်ခုလုံးကို mock လုပ်မယ်လို့ ပြောတာပါ
vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (key: string) => key
  })
}))

describe('About.vue', () => {
  it('renders the correct translation keys', () => {
    const wrapper = mount(About, {
      global: {
        // i18n သုံးထားတဲ့အတွက် mock လုပ်ပေးဖို့ လိုပါတယ်
        mocks: {
          t: (msg: string) => msg
        }
      }
    })

    // <h2> tag ထဲမှာ 'about' ဆိုတဲ့ key ပေါ်သလား စစ်မယ်
    expect(wrapper.find('h2').text()).toBe('about')
    
    // <p> tag ထဲမှာ 'aboutText' ဆိုတဲ့ key ပေါ်သလား စစ်မယ်
    expect(wrapper.find('p').text()).toBe('aboutText')
  })

  it('has the correct section ID', () => {
    const wrapper = mount(About, {
      global: {
        mocks: { t: (msg: string) => msg }
      }
    })
    
    // section ID က 'about' ဖြစ်ရမယ်
    expect(wrapper.find('section').attributes('id')).toBe('about')
  })
})