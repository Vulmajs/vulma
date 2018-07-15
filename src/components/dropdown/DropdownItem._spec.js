import { shallow } from '@vue/test-utils'
import VDropdownItem from '@components/dropdown/DropdownItem'

describe('VDropdownItem', () => {
    it('is called', () => {
        const wrapper = shallow(VDropdownItem, {
            propsData: {
                separator: true
            }
        })
        expect(wrapper.name()).toBe('VDropdownItem')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
