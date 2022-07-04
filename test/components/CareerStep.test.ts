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
    expect(wrapper.find('div.ud-flex .company-img').exists()).toBe(true)
  })

  it('should contain correct CareerStep details', async () => {
    const wrapper = mount(CareerStepComponent, {
      props: {
        careerStep: testCareerStep,
      },
    })
    expect(wrapper.find('div.ud-flex div.company-img img').exists()).toBe(true)
    expect(wrapper.find('div.ud-flex div.company-img img').attributes().src).toBe(testCareerStep.imageUrl)

    expect(wrapper.find('div.ud-flex h4').exists()).toBe(true)
    expect(wrapper.find('div.ud-flex h4').text()).toBe(testCareerStep.client)

    expect(wrapper.html()).toContain(testCareerStep.date)
    expect(wrapper.html()).toContain(testCareerStep.contract)
    expect(wrapper.html()).toContain(testCareerStep.project)
    expect(wrapper.html()).toContain(testCareerStep.role)
    expect(wrapper.html()).toContain(testCareerStep.stack)
  })
})
