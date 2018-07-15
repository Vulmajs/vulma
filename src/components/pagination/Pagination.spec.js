import { shallow } from '@vue/test-utils'
import VPagination from '@components/pagination/Pagination'

describe('VPagination', () => {
    it('is called', () => {
        const wrapper = shallow(VPagination)
        expect(wrapper.name()).toBe('VPagination')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
