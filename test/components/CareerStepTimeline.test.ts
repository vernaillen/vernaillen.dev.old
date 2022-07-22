import { mount } from '@vue/test-utils'
import CareerTimeline from '@/components/CareerTimeline.vue'
import { careerSteps } from '@/logics/career'

describe('CareerTimeline.vue', () => {
  it('should render', async () => {
    const wrapper = mount(CareerTimeline)
    expect(wrapper.find('ol').exists()).toBe(true)
    expect(wrapper.find('li').exists()).toBe(true)
  })

  it('should contain careerSteps', async () => {
    const wrapper = mount(CareerTimeline)
    expect(wrapper.find('div.flex .company-img').exists()).toBe(true)
    expect(wrapper.findAll('ol li').entries.length).toBe(careerSteps.entries.length)
  })
})
