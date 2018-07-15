import { shallow } from '@vue/test-utils'
import VToast from '@components/toast/Toast'

describe('VToast', () => {
    HTMLElement.prototype.insertAdjacentElement = jest.fn()

    it('is called', () => {
        const wrapper = shallow(VToast)
        expect(wrapper.name()).toBe('VToast')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
