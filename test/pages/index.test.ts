import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import IndexPage from '@/pages/Index.vue'
import SvgHomeLeft from '@/components/svg/svg-home-left.svg?component'
import SvgHomeRight from '@/components/svg/svg-home-right.svg?component'

describe('index.vue', () => {
  it('should render', async () => {
    const wrapper = mount(IndexPage, {
      global: {
        plugins: [createTestingPinia()],
      },
    })
    expect(wrapper.find('section#home').exists()).toBe(true)
    expect(wrapper.find('h1').text()).eq('Wouter Vernaillen')
    expect(wrapper.find('p').text()).eq('Freelance Full Stack Developer')
    expect(wrapper.findComponent(SvgHomeLeft).exists()).toBe(true)
    expect(wrapper.findComponent(SvgHomeRight).exists()).toBe(true)
  })
})
