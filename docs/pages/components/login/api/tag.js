export default [
    {
        title: 'Tag',
        props: [
            {
                name: '<code>passwordReveal</code>',
                description: 'Add the reveal password functionality',
                type: 'Boolean',
                values: '—',
                default: '<code>true</code>'
            },
            {
                name: '<code>passwordLabel</code>',
                description: 'Add a label to the password field',
                type: 'String',
                values: '—',
                default: '<code>Password</code>'
            },
            {
                name: '<code>passwordMinLength</code>',
                description: 'Same as native <code>minlength</code>, plus character counter',
                type: 'String, Number',
                values: '—',
                default: '6'
            },
            {
                name: '<code>usernameLabel</code>',
                description: 'Add a label to the username field',
                type: 'String',
                values: '—',
                default: '<code>Username</code>'
            },
            {
                name: '<code>usernameMinLength</code>',
                description: 'Same as native <code>minlength</code>, plus character counter',
                type: 'String, Number',
                values: '—',
                default: '6'
            },
            {
                name: '<code>errorMessage</code>',
                description: 'Error meesage if username or password is not valid',
                type: 'String',
                values: '—',
                default: '<code>Username or password is not valid!</code>'
            },
        ],
        events: [
            {
                name: '<code>input</code>',
                description: 'Triggers when login button is clicked and username and password is valid',
                parameters: '{ username: "", password: "" }'
            }
        ]
    }
]
