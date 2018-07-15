import { shallow } from '@vue/test-utils'
import VTaglist from '@components/tag/Taglist'

describe('VTaglist', () => {
    it('is called', () => {
        const wrapper = shallow(VTaglist)

        expect(wrapper.name()).toBe('VTaglist')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
