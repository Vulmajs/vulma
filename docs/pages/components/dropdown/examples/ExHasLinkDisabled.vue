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
                <v-dropdown v-model="navigation" position="is-bottom-left">
                    <a class="navbar-item" slot="trigger">
                        <span>Menu</span>
                        <v-icon icon="menu-down"></v-icon>
                    </a>

                    <v-dropdown-item custom>
                        Logged as <b>Rafael Beraldo</b>
                    </v-dropdown-item>
                    <hr class="dropdown-divider">
                    <v-dropdown-item has-link>
                        <a href="https://google.com" target="_blank">
                            <v-icon icon="link"></v-icon>
                            Google (link)
                        </a>
                    </v-dropdown-item>
                    <v-dropdown-item value="home">
                        <v-icon icon="home"></v-icon>
                        Home
                    </v-dropdown-item>
                    <v-dropdown-item value="products">
                        <v-icon icon="cart"></v-icon>
                        Products
                    </v-dropdown-item>
                    <v-dropdown-item value="blog" disabled>
                        <v-icon icon="book-open"></v-icon>
                        Blog
                    </v-dropdown-item>
                    <hr class="dropdown-divider">
                    <v-dropdown-item value="settings">
                        <v-icon icon="settings"></v-icon>
                        Settings
                    </v-dropdown-item>
                    <v-dropdown-item value="logout">
                        <v-icon icon="logout"></v-icon>
                        Logout
                    </v-dropdown-item>
                </v-dropdown>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                navigation: 'home'
            }
        }
    }
</script>
