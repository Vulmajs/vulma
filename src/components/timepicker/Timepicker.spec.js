import { shallow } from '@vue/test-utils'
import VTimepicker from '@components/timepicker/Timepicker'

describe('VTimepicker', () => {
    it('is called', () => {
        const wrapper = shallow(BTimepicker)

        expect(wrapper.name()).toBe('BTimepicker')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
