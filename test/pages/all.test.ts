import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import CatchAllPage from '@/pages/[...all].vue'

describe('[...all].vue', () => {
  it('should render', async () => {
    const wrapper = mount(CatchAllPage, {
      global: {
        plugins: [createTestingPinia()],
      },
    })
    expect(wrapper.find('section').exists()).toBe(true)
    expect(wrapper.find('h3').text()).eq('Sorry, the page can\’t be found')
  })
})
