import { shallow } from '@vue/test-utils'
import VTableMobileSort from '@components/table/TableMobileSort'

describe('VTableMobileSort', () => {
    it('is called', () => {
        const wrapper = shallow(VTableMobileSort)

        expect(wrapper.name()).toBe('VTableMobileSort')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
