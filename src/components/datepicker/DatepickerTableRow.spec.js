import { shallow } from '@vue/test-utils'
import VDatepickerTableRow from '@components/datepicker/DatepickerTableRow'

describe('VDatepickerTableRow', () => {
    it('is called', () => {
        const wrapper = shallow(VDatepickerTableRow, {
            propsData: {
                week: [
                    new Date('Sun Dec 31 2017 00:00:00 GMT-0200 (-02)'),
                    new Date('Mon Jan 01 2018 00:00:00 GMT-0200 (-02)'),
                    new Date('Tue Jan 02 2018 00:00:00 GMT-0200 (-02)'),
                    new Date('Wed Jan 03 2018 00:00:00 GMT-0200 (-02)'),
                    new Date('Thu Jan 04 2018 00:00:00 GMT-0200 (-02)'),
                    new Date('Fri Jan 05 2018 00:00:00 GMT-0200 (-02)'),
                    new Date('Sat Jan 06 2018 00:00:00 GMT-0200 (-02)')
                ],
                month: 12
            }
        })
        expect(wrapper.name()).toBe('VDatepickerTableRow')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
