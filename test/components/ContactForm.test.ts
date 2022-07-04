import { mount } from '@vue/test-utils'
import ContactForm from '@/components/ContactForm.vue'

describe('ContactForm.vue', () => {
  it('should render', async () => {
    const wrapper = mount(ContactForm)
    expect(wrapper.find('form').exists()).toBe(true)
  })
})
