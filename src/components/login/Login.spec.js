import { shallow, mount } from '@vue/test-utils'
import VInput from '@components/input'
import VIcon from '@components/icon'
import VLogin from '@components/login'

describe('VLogin', () => {
    it('render correctly', () => {
        const wrapper = shallow(VLogin)

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('is vue instance', () => {
        const wrapper = shallow(VLogin)
        expect(wrapper.name()).toBe('VLogin')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('renders input element by default', () => {
        const wrapper = shallow(VInput)

        expect(wrapper.contains('input')).toBeTruthy()
        expect(wrapper.classes()).toContain('control')
    })

    it('displays the icon when the icon property is true', () => {
        const wrapper = shallow(VInput, {
            propsData: { icon: 'magnify' }
        })
        const target = wrapper.find(VIcon)

        expect(target.exists()).toBeTruthy()
    })

    it('render field password and username', () => {
        const wrapper = mount(VLogin)

        const username = wrapper.find('#username')
        expect(username.exists()).toBeTruthy()
        expect(username.attributes().type).toBe('text')

        const password = wrapper.find('#password')
        expect(password.exists()).toBeTruthy()
        expect(password.attributes().type).toBe('password')
    })

    it('render the placeholder and readonly attribute when passed', () => {
        const wrapper = shallow(VInput, {
            attrs: { placeholder: 'Awesome!', readonly: true }
        })
        const target = wrapper.find('input')

        expect(target.element.getAttribute('placeholder')).toBe('Awesome!')
        expect(target.element.getAttribute('readonly')).toBe('readonly')
    })

    it('expands input when expanded property is passed', () => {
        const wrapper = shallow(VInput, {
            propsData: { expanded: true }
        })

        expect(wrapper.classes()).toContain('is-expanded')
    })
})
