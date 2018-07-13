import { shallow } from '@vue/test-utils'
import VCheckbox from '@components/checkbox/Checkbox'

describe('VCheckbox', () => {
    it('is called', () => {
        const wrapper = shallow(VCheckbox)
        expect(wrapper.name()).toBe('VCheckbox')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
