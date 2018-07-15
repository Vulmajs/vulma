import { shallow } from '@vue/test-utils'
import VUpload from '@components/upload/Upload'

describe('VUpload', () => {
    it('is called', () => {
        const wrapper = shallow(VUpload)

        expect(wrapper.name()).toBe('VUpload')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
