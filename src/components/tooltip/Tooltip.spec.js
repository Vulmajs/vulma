import { shallow } from '@vue/test-utils'
import VTooltip from '@components/tooltip/Tooltip'

describe('VTooltip', () => {
    it('is called', () => {
        const wrapper = shallow(VTooltip)

        expect(wrapper.name()).toBe('VTooltip')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
