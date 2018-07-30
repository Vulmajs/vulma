export default {
    documentation: [
        {
            category: 'Installation',
            pages: [
                { name: 'Start', path: '/documentation/start' },
                { name: 'Customization', path: '/documentation/customization' },
                { name: 'Constructor options', path: '/documentation/constructor-options' }
            ]
        },
        {
            category: 'Code style guide',
            pages: [
                { name: 'Node.Js', path: '/documentation/nodejs' }
            ]
        },
        {
            category: 'Layout',
            pages: [
                { name: 'Layout & elements', path: '/documentation/layout' },
                { category: 'Templates',
                    pages: [
                        { name: 'Login & Signup', path: '/documentation/templates/login', isNew: true }
                    ]
                }
            ]
        },
        {
            category: 'UI components',
            pages: [
                { name: 'Collapse', path: '/documentation/collapse' },
                { name: 'Dialog', path: '/documentation/dialog' },
                { name: 'Dropdown', path: '/documentation/dropdown' },
                {
                    category: 'Form controls',
                    pages: [
                        { name: 'Autocomplete', path: '/documentation/autocomplete', isUpdated: false },
                        { name: 'Checkbox', path: '/documentation/checkbox', isUpdated: false },
                        { name: 'Datepicker', path: '/documentation/datepicker' },
                        { name: 'Field', path: '/documentation/field' },
                        { name: 'Input', path: '/documentation/input' },
                        { name: 'Radio', path: '/documentation/radio', isUpdated: false },
                        { name: 'Select', path: '/documentation/select' },
                        { name: 'Switch', path: '/documentation/switch' },
                        { name: 'Taginput', path: '/documentation/taginput', isUpdated: false },
                        { name: 'Timepicker', path: '/documentation/timepicker' },
                        { name: 'Upload', path: '/documentation/upload' }
                    ]
                },
                { name: 'Icon', path: '/documentation/icon' },
                { name: 'Loading', path: '/documentation/loading' },
                { name: 'Login', path: '/documentation/login', isNew: true },
                { name: 'Message', path: '/documentation/message' },
                { name: 'Modal', path: '/documentation/modal' },
                { name: 'Notification', path: '/documentation/notification' },
                { name: 'Pagination', path: '/documentation/pagination' },
                { name: 'Rating', path: '/documentation/rating' },
                { name: 'Snackbar', path: '/documentation/snackbar' },
                { name: 'Table', path: '/documentation/table', isUpdated: true },
                { name: 'Tabs', path: '/documentation/tabs' },
                { name: 'Tag', path: '/documentation/tag', isUpdated: false },
                { name: 'Toast', path: '/documentation/toast' },
                { name: 'Tooltip', path: '/documentation/tooltip' }
            ]
        }
    ],
    extensions: [
        {
            category: 'Extensions',
            pages: [
                { name: 'Cleavejs (input format)', path: '/extensions/cleavejs' },
                { name: 'Sortable (table sort)', path: '/extensions/sortablejs' }
            ]
        }
    ]
}
