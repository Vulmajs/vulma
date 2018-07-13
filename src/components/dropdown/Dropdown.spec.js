import { shallow } from '@vue/test-utils'
import VDropdown from '@components/dropdown/Dropdown'

describe('VDropdown', () => {
    it('is called', () => {
        const wrapper = shallow(VDropdown)
        expect(wrapper.name()).toBe('VDropdown')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
