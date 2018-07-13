import { shallow } from '@vue/test-utils'
import VDatepickerTable from '@components/datepicker/DatepickerTable'

import config, {setOptions} from '@utils/config'

describe('VDatepickerTable', () => {
    beforeEach(() => {
        setOptions(Object.assign(config, {
            defaultMonthNames: [
                'January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December'
            ],
            defaultDayNames: ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'S']
        }))
    })

    it('is called', () => {
        const wrapper = shallow(VDatepickerTable, {
            propsData: {
                dayNames: config.defaultMonthNames,
                monthNames: config.defaultMonthNames,
                focused: {
                    month: new Date(),
                    year: new Date()
                }
            }
        })
        expect(wrapper.name()).toBe('VDatepickerTable')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
