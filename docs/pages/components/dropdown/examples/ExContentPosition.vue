<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <a class="navbar-item">
                <img src="static/img/buefy-logo.png" alt="Buefy">
            </a>
            <a class="navbar-item"><v-icon pack="fab" icon="github"></v-icon></a>
            <a class="navbar-item"><v-icon pack="fab" icon="twitter"></v-icon></a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-end">
                <v-dropdown position="is-bottom-left">
                    <a class="navbar-item" slot="trigger">
                        <span>Login</span>
                        <v-icon icon="menu-down"></v-icon>
                    </a>

                    <v-dropdown-item custom paddingless>
                        <form action="">
                            <div class="modal-card" style="width:300px;">
                                <section class="modal-card-body">
                                    <v-field label="Email">
                                        <v-input
                                            type="email"
                                            placeholder="Your email"
                                            required>
                                        </v-input>
                                    </v-field>

                                    <v-field label="Password">
                                        <v-input
                                            type="password"
                                            password-reveal
                                            placeholder="Your password"
                                            required>
                                        </v-input>
                                    </v-field>

                                    <v-checkbox>Remember me</v-checkbox>
                                </section>
                                <footer class="modal-card-foot">
                                    <button class="button is-primary">Login</button>
                                </footer>
                            </div>
                        </form>
                    </v-dropdown-item>
                </v-dropdown>
            </div>
        </div>
    </nav>
</template>
