import '/test/mocks/matchMedia.mock'
import { RouterLinkStub, shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import HeaderComponent from '@/components/HeaderComponent.vue'

describe('HeaderComponent.vue', () => {
  it('should render', () => {
    const pinia = createTestingPinia()
    const wrapper = shallowMount(HeaderComponent, {
      global: {
        plugins: [pinia],
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })
    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.find('nav').exists()).toBe(true)
    // first router-link occurrance is the link to home beghind the logo
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/')
  })
})
