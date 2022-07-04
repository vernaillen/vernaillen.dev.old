import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import MarkdownWrapper from '@/components/MarkdownWrapper.vue'
import BreadcrumbComponent from '@/components/BreadcrumbComponent.vue'

const frontmatter = {
  pageName: 'testPage',
  title: 'testTitle',
}
const frontmatterMissingTitle = {
  pageName: 'testPage',
}

describe('MarkdownWrapper.vue', () => {
  it('should render', async () => {
    const wrapper = mount(MarkdownWrapper, {
      global: {
        plugins: [createTestingPinia()],
      },
      props: {
        frontmatter,
      },
    })
    expect(wrapper.findComponent(BreadcrumbComponent).exists()).toBe(true)
    expect(wrapper.find('h1').exists()).toBe(true)
    expect(wrapper.find('h1').text()).toBe(frontmatter.title)
  })

  it('should not show title', async () => {
    const wrapper = mount(MarkdownWrapper, {
      global: {
        plugins: [createTestingPinia()],
      },
      props: {
        frontmatter: frontmatterMissingTitle,
      },
    })
    expect(wrapper.findComponent(BreadcrumbComponent).exists()).toBe(true)
    expect(wrapper.find('h1').exists()).toBe(false)
  })
})
