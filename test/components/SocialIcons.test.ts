import { mount } from '@vue/test-utils'
import SocialIcons from '@/components/SocialIcons.vue'

describe('SocialIcons.vue', () => {
  it('should render', async () => {
    const wrapper = mount(SocialIcons)
    expect(wrapper.find('a font-awesome-icon').exists()).toBe(true)
  })
})
