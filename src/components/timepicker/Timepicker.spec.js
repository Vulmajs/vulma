import { shallow } from '@vue/test-utils'
import VTimepicker from '@components/timepicker/Timepicker'

describe('VTimepicker', () => {
    it('is called', () => {
        const wrapper = shallow(VTimepicker)

        expect(wrapper.name()).toBe('VTimepicker')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
