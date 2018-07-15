import { shallow } from '@vue/test-utils'
import VFieldBody from '@components/field/FieldBody'

describe('VFieldBody', () => {
    it('is called', () => {
        const wrapper = shallow(VFieldBody, {
            slots: {
                default: 'content'
            }
        })
        expect(wrapper.name()).toBe('VFieldBody')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
