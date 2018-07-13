<template>
    <section>
        <button class="button is-primary is-medium"
            @click="imageModal()">
            Launch image modal (HTML)
        </button>
        <button class="button is-primary is-medium"
            @click="cardModal()">
            Launch card modal (Component)
        </button>
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
        methods: {
            imageModal() {
                this.$modal.open(
                    `<p class="image is-4by3">
                        <img src="https://buefy.github.io/static/img/placeholder-1280x960.png">
                    </p>`
                )
            },
            cardModal() {
                this.$modal.open({
                    parent: this,
                    component: ModalForm,
                    hasModalCard: true
                })
            }
        }
    }
</script>
