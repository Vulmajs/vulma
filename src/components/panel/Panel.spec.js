import { shallow } from '@vue/test-utils'
import VPanel from '@components/panel/Panel'

describe('VPanel', () => {
    it('is called', () => {
        const wrapper = shallow(VPanel)
        expect(wrapper.name()).toBe('VPanel')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
