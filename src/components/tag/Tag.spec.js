import { shallow } from '@vue/test-utils'
import VTag from '@components/tag/Tag'

describe('VTag', () => {
    it('is called', () => {
        const wrapper = shallow(VTag)

        expect(wrapper.name()).toBe('VTag')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
