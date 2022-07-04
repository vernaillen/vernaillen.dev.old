import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import IndexPage from '@/pages/index.vue'
import SVGHomeLeft from '@/components/svg/svg-home-left.svg'
import SVGHomeRight from '@/components/svg/svg-home-right.svg'

describe('Index.vue', () => {
  it('should render', async () => {
    const wrapper = mount(IndexPage, {
      global: {
        plugins: [createTestingPinia()],
      },
    })
    expect(wrapper.find('section#home').exists()).toBe(true)
    expect(wrapper.find('h1').text()).eq('Wouter Vernaillen')
    expect(wrapper.find('p').text()).eq('Freelance Full Stack Developer')
    expect(wrapper.findComponent(SVGHomeLeft).exists()).toBe(true)
    expect(wrapper.findComponent(SVGHomeRight).exists()).toBe(true)
  })
})
