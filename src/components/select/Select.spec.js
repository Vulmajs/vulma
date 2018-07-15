import { shallow } from '@vue/test-utils'
import VSelect from '@components/select/Select'

describe('VSelect', () => {
    it('is called', () => {
        const wrapper = shallow(VSelect)
        expect(wrapper.name()).toBe('VSelect')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
