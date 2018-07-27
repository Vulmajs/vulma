<template>
    <div class="control" :class="rootClasses">
        <v-notification
            type="is-danger"
            has-icon
            v-if="showMessage === true"
            @close="closeNotification">{{ errorMessage }}</v-notification>

        <v-field :label="usernameLabel">
            <v-input
                id="username"
                type="text"
                placeholder="Username"
                v-model="username"
                v-bind="$attrs"
                :minlength="usernameMinLength"
                required />
        </v-field>

        <v-field :label="passwordLabel">
            <v-input
                type="password"
                id="password"
                v-model="password"
                :password-reveal="passwordReveal"
                placeholder="Password"
                :minlength="passwordMinLength"
                required />
        </v-field>

        <div class="has-text-centered">
            <a class="login-button button is-vcentered is-primary" @click="login">Login</a>
        </div>

        <div class="has-text-centered">
            <v-tooltip
                label="Forgotten your password click here?"
                position="is-bottom"
                type="is-light"
                animated>
                <button class="button is-white is-small is-text" href="signup.html">Forgot password</button>
            </v-tooltip>

            <v-tooltip
                label="Don't have an account?"
                position="is-bottom"
                type="is-light"
                animated>
                <button class="button is-white is-small is-text" href="signup.html">Sign up now!</button>
            </v-tooltip>
        </div>
    </div>
</template>

<script>
import Field from '../field';
import Input from '../input';
import Tooltip from '../tooltip';
import Notification from '../notification'

// import config from '../../utils/config';
import FormElementMixin from '../../utils/FormElementMixin';

export default {
    name: 'VLogin',
    components: {
        [Input.name]: Input,
        [Field.name]: Field,
        [Tooltip.name]: Tooltip,
        [Notification.name]: Notification
    },
    mixins: [FormElementMixin],
    inheritAttrs: false,
    props: {
        passwordReveal: {
            type: Boolean,
            default: true
        },
        passwordLabel: {
            type: String,
            default: 'Password'
        },
        passwordMinLength: {
            type: Number,
            default: 6
        },
        newUsername: {
            type: String
        },
        usernameLabel: {
            type: String,
            default: 'Username'
        },
        usernameMinLength: {
            type: Number,
            default: 6
        },
        errorMessage: {
            type: String,
            default: 'Username or password is not valid!'
        }
    },
    data() {
        return {
            isPasswordVisible: false,
            username: '',
            password: '',
            isValid: true,
            showMessage: false
        };
    },
    computed: {
        rootClasses() {
            return [
                this.size,
                {
                    'is-expanded': this.expanded,
                    'is-loading': this.loading,
                    'is-clearfix': !this.hasMessage
                }
            ];
        },

        /**
         * Check if have any message prop from parent if it's a Field.
         */
        hasMessage() {
            return !!this.statusMessage;
        },

        /**
         * Current password-reveal icon name.
         */
        passwordVisibleIcon() {
            return !this.isPasswordVisible ? 'eye' : 'eye-off';
        }
    },
    methods: {
        /**
         * Toggle the visibility of a password-reveal input
         * by changing the type and focus the input right away.
         */
        togglePasswordVisibility() {
            this.isPasswordVisible = !this.isPasswordVisible;
            this.newType = this.isPasswordVisible ? 'text' : 'password';

            this.$nextTick(() => {
                this.$refs.input.focus();
            });
        },

        /**
         * Login method will emit a login message if username and password is valid
         */
        login() {
            this.checkValidity()
            if (this.isValid) {
                this.$emit('input', { username: this.username, password: this.password })
            } else {
                this.showMessage = true;
            }
        },

        /**
         * Check HTML5 validation, set isValid property.
         * If validation fail, send 'is-danger' type,
         * and error message to parent if it's a Field.
         */
        checkValidity() {
            const elUsername = this.$el.querySelector('#username')
            const elPassword = this.$el.querySelector('#password')

            if (elUsername.checkValidity()) {
                this.isValid = true
            } else {
                this.isValid = false
            }

            if (elPassword.checkValidity()) {
                this.isValid = true
            } else {
                this.isValid = false
            }
        },

        /**
         * Close error message notification box
         */
        closeNotification() {
            this.showMessage = false;
        }
    }
};
</script>
