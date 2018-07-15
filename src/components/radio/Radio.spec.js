import { shallow } from '@vue/test-utils'
import VRadio from '@components/radio/Radio'

describe('VRadio', () => {
    it('is called', () => {
        const wrapper = shallow(VRadio)
        expect(wrapper.name()).toBe('VRadio')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
