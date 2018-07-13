import { shallow } from '@vue/test-utils'
import VModal from '@components/modal/Modal'

describe('VModal', () => {
    it('is called', () => {
        const wrapper = shallow(VModal)
        expect(wrapper.name()).toBe('VModal')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
