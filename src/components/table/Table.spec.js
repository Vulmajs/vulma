import { mount } from '@vue/test-utils'
import VTable from '@components/table/Table'

describe('VTable', () => {
    it('is called', () => {
        const wrapper = mount(VTable)
        expect(wrapper.name()).toBe('VTable')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
