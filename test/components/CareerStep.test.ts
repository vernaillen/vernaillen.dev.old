import { mount } from '@vue/test-utils'
import CareerStepComponent from '@/components/CareerStep.vue'
import type { CareerStep } from '@/logics/career'

const testCareerStep: CareerStep = {
  client: 'testCareerClient',
  contract: 'testCareerContract',
  date: 'theTestDate',
  project: 'testCareerProject',
  role: 'testCareerRole',
  stack: 'testCareerStack',
  imageUrl: '/images/test.jpg',
}

describe('CareerStep.vue', () => {
  it('should render', async () => {
    const wrapper = mount(CareerStepComponent, {
      props: {
        careerStep: testCareerStep,
      },
    })

    expect(wrapper.find('.company-img').exists()).toBe(true)
    // expect(wrapper.find('.router-link-active').attributes().to).toBe('/contact')
  })
})
