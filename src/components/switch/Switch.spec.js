import { shallow } from '@vue/test-utils'
import VSwitch from '@components/switch/Switch'

describe('VSwitch', () => {
    it('is called', () => {
        const wrapper = shallow(VSwitch)

        expect(wrapper.name()).toBe('VSwitch')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
