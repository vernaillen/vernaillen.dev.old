import { RouterLinkStub, mount } from '@vue/test-utils'
import BreadcrumbComponent from 'src/components/BreadcrumbComponent.vue'

describe('BreadcrumbComponent.vue', () => {
  it('should render only 2 items', () => {
    const wrapper = mount(BreadcrumbComponent, {
      props: {
        pageName: 'Hello world',
        path: '/hello-world',
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })
    expect(wrapper.find('ul').exists()).toBe(true)
    expect(wrapper.find('li').exists()).toBe(true)

    // first router-link occurrance is the link to home beghind the logo
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/')
    expect(wrapper.findAll('li').length).toBe(2)
    expect(wrapper.findAll('li')[0].text()).toContain('Home')
    expect(wrapper.findAll('li')[1].text()).toContain('Hello world')
  })
  it('should render 3 items with blog link', () => {
    const wrapper = mount(BreadcrumbComponent, {
      props: {
        pageName: 'Blog post',
        path: '/blog/post',
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })
    expect(wrapper.find('ul').exists()).toBe(true)
    expect(wrapper.find('li').exists()).toBe(true)

    // first router-link occurrance is the link to home beghind the logo
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/')
    expect(wrapper.findAll('li')[0].text()).toContain('Home')
    expect(wrapper.findAll('li')[1].text()).toContain('Blog')
    expect(wrapper.findAll('li')[2].text()).toContain('Blog post')
    expect(wrapper.findAll('li').length).toBe(3)
  })
})
