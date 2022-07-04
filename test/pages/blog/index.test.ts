import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { createRouterMock, injectRouterMock } from 'vue-router-mock'
import index from '@/pages/blog/Index.vue'

const router = createRouterMock({
  initialLocation: '/blog',
})
beforeEach(() => {
  injectRouterMock(router)
})
describe('blog/index.vue', () => {
  beforeEach(() => {
    vi.resetAllMocks()
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // Deprecated
        removeListener: vi.fn(), // Deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })
  })

  it('should render', () => {
    const wrapper = mount(index, {
      global: {
        plugins: [createTestingPinia()],
        mocks: {
          matchMedia,
          router,
        },
      },
    })
    expect(wrapper.vm.router).toBe(router)
  })
})
