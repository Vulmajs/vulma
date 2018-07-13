import { mount } from '@vue/test-utils'
import VTabs from '@components/tabs/Tabs'

describe('VTabs', () => {
    it('is called', () => {
        const wrapper = mount(VTabs)
        expect(wrapper.name()).toBe('VTabs')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
