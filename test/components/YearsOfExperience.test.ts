import { mount } from '@vue/test-utils'
import YearsOfExperienceComponent from '@/components/YearsOfExperience.vue'
import { yearsOfExperience } from '@/logics/dayjs'

const nrOfYears = yearsOfExperience()

describe('YearsOfExperience.vue', () => {
  it('should render', async () => {
    const wrapper = mount(YearsOfExperienceComponent)
    expect(wrapper.find('.yearsOfExperience').exists()).toBe(true)
    expect(wrapper.find('.yearsOfExperience').text()).eq(`${nrOfYears}`)
  })
})
