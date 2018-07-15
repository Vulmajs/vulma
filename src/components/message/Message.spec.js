import { shallow } from '@vue/test-utils'
import VMessage from '@components/message/Message'

describe('VMessage', () => {
    it('is called', () => {
        const wrapper = shallow(VMessage)
        expect(wrapper.name()).toBe('VMessage')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
