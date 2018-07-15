import { shallow } from '@vue/test-utils'
import VCheckboxButton from '@components/checkbox/CheckboxButton'

describe('VCheckboxButton', () => {
    it('is called', () => {
        const wrapper = shallow(VCheckboxButton)
        expect(wrapper.name()).toBe('VCheckboxButton')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
