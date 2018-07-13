import { shallow } from '@vue/test-utils'
import VAutocomplete from '@components/autocomplete/Autocomplete'

describe('VAutocomplete', () => {
    it('is called', () => {
        const wrapper = shallow(VAutocomplete)
        expect(wrapper.name()).toBe('VAutocomplete')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
