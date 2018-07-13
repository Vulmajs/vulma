<template>
    <section>
        <button class="button is-primary is-medium"
            @click="isComponentModalActive = true">
            Launch component modal
        </button>

        <v-modal :active.sync="isComponentModalActive" has-modal-card>
            <modal-form v-bind="formProps"></modal-form>
        </v-modal>
    </section>
</template>

<script>
    const ModalForm = {
        props: ['email', 'password'],
        template: `
            <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Login</p>
                    </header>
                    <section class="modal-card-body">
                        <v-field label="Email">
                            <v-input
                                type="email"
                                :value="email"
                                placeholder="Your email"
                                required>
                            </v-input>
                        </v-field>

                        <v-field label="Password">
                            <v-input
                                type="password"
                                :value="password"
                                password-reveal
                                placeholder="Your password"
                                required>
                            </v-input>
                        </v-field>

                        <v-checkbox>Remember me</v-checkbox>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="$parent.close()">Close</button>
                        <button class="button is-primary">Login</button>
                    </footer>
                </div>
            </form>
        `
    }

    export default {
        components: {
            ModalForm
        },
        data() {
            return {
                isComponentModalActive: false,
                formProps: {
                    email: 'evan@you.com',
                    password: 'testing'
                }
            }
        }
    }
</script>
