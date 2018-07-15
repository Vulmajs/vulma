import { shallow } from '@vue/test-utils'
import VDatepicker from '@components/datepicker/Datepicker'

describe('VDatepicker', () => {
    it('is called', () => {
        const wrapper = shallow(VDatepicker)
        expect(wrapper.name()).toBe('VDatepicker')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
