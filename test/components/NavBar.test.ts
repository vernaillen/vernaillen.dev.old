import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { createRouterMock, injectRouterMock } from 'vue-router-mock'
import NavBar from '@/components/NavBar.vue'

const router = createRouterMock({
  initialLocation: '/thanks',
})
beforeEach(() => {
  injectRouterMock(router)
})
describe('NavBar.vue', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('check active router link', async () => {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [createTestingPinia()],
        mocks: {
          router,
        },
      },
    })
    // expect(wrapper.router).toBe(router)
    expect(wrapper.find('.router-link-active').exists()).toBe(true)
    expect(wrapper.find('.router-link-active').attributes().to).toBe('/contact')
  })
})
