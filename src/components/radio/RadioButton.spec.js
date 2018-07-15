import { shallow } from '@vue/test-utils'
import VRadioButton from '@components/radio/RadioButton'

describe('VRadioButton', () => {
    it('is called', () => {
        const wrapper = shallow(VRadioButton)
        expect(wrapper.name()).toBe('VRadioButton')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
