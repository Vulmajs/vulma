import { shallow } from '@vue/test-utils'
import VDialog from '@components/dialog/Dialog'

describe('VDialog', () => {
    it('is called', () => {
        const wrapper = shallow(VDialog, {
            attachToDocument: true
        })
        expect(wrapper.name()).toBe('VDialog')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
