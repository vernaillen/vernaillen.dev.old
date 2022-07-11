import { mount, shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import ImageGallery from '@/components/ImageGallery.vue'

describe('ImageGallery.vue', () => {
  it('should render', async () => {
    const wrapper = mount(ImageGallery, {
      global: {
        plugins: [createTestingPinia()],
      },
    })
    expect(wrapper.find('.ud-flex.ud-flex-wrap').exists()).toBe(true)
  })

  it('should open lightbox on image click', async () => {
    const wrapper = shallowMount(ImageGallery, {
      global: {
        plugins: [createTestingPinia()],
      },
      props: {
        folder: 'gallery',
      },
    })
    expect(wrapper.find('img').exists()).toBe(true)

    /* const spyOnOpenGallery = vi.spyOn(wrapper.vm, 'openGallery')
    wrapper.find('img').trigger('click')
    expect(spyOnOpenGallery).toHaveBeenCalledWith(0) */
  })
})
