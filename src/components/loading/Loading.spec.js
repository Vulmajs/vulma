import { shallow } from '@vue/test-utils'
import VLoading from '@components/loading/Loading'

describe('VLoading', () => {
    it('Is called', () => {
        const wrapper = shallow(VLoading)
        expect(wrapper.name()).toBe('VLoading')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
