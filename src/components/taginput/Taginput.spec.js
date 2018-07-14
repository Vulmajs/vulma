import { shallow } from '@vue/test-utils'
import VTaginput from '@components/taginput/Taginput'

describe('VTaginput', () => {
    it('is called', () => {
        const wrapper = shallow(VTaginput)

        expect(wrapper.name()).toBe('VTaginput')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
