import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import FooterComponent from '@/components/FooterComponent.vue'

describe('FooterComponent.vue', () => {
  it('should render', () => {
    const wrapper = shallowMount(FooterComponent, {
      global: {
        plugins: [createTestingPinia()],
        mocks: {
          matchMedia,
        },
      },
    })
    expect(wrapper.text()).toContain('Wouter Vernaillen')
    expect(wrapper.find('footer').exists()).toBe(true)
  })

  it('should call scrollToTop', async () => {
    const wrapper = shallowMount(FooterComponent)
    expect(wrapper.find('a.back-to-top').exists()).toBe(true)

    const spyOnScroll = vi.spyOn(wrapper.vm, 'scrollToTop')
    wrapper.find('a.back-to-top').trigger('click')
    expect(spyOnScroll).toHaveBeenCalledTimes(1)
  })
})
