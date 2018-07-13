import { shallow } from '@vue/test-utils'
import VField from '@components/field/Field'

describe('VField', () => {
    it('is called', () => {
        const wrapper = shallow(VField)
        expect(wrapper.name()).toBe('VField')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
