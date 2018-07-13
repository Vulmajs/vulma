import { shallow } from '@vue/test-utils'
import VNotification from '@components/notification/Notification'

describe('VNotification', () => {
    it('is called', () => {
        const wrapper = shallow(VNotification)
        expect(wrapper.name()).toBe('VNotification')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
