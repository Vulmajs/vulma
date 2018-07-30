import { shallow } from '@vue/test-utils'
import VRating from '@components/rating'

describe('VRating', () => {
    it('render correctly', () => {
        const wrapper = shallow(VRating)

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('is vue instance', () => {
        const wrapper = shallow(VRating)
        expect(wrapper.name()).toBe('VRating')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
