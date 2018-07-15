import { shallow } from '@vue/test-utils'
import VSnackbar from '@components/snackbar/Snackbar'

describe('VSnackbar', () => {
    HTMLElement.prototype.insertAdjacentElement = jest.fn()

    it('is called', () => {
        const wrapper = shallow(VSnackbar, {
            attachToDocument: true
        })
        expect(wrapper.name()).toBe('VSnackbar')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
