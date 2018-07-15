<template>
    <nav
        class="navbar docs-navbar is-spaced has-shadow"
        :class="{ 'is-grey-lighter is-transparent': light }">
        <div class="container">
            <div class="navbar-brand">
                <router-link
                    to="/"
                    class="navbar-item"
                    title="VulmaJs: lightweight components and design system for Vue.js"
                    active-class="">
                    <img
                        v-if="light"
                        src="../assets/vulmajs-logo.png"
                        alt="VulmaJs">
                    <img
                        v-else
                        src="../assets/vulmajs-logo.png"
                        alt="Vulmajs">
                </router-link>

                <a
                    class="navbar-item has-text-dark"
                    href="https://github.com/vulmajs/vulma"
                    target="_blank"
                    title="Github">
                    <v-icon icon="github-circle"/>
                </a>

                <span
                    class="navbar-burger burger"
                    :class="{ 'is-active': isMenuActive }"
                    @click="isMenuActive = !isMenuActive">
                    <span/>
                    <span/>
                    <span/>
                </span>
            </div>

            <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
                <div class="navbar-end">
                    <router-link
                        to="/"
                        exact
                        class="navbar-item">
                        Home
                    </router-link>

                    <hr class="navbar-divider" style="display: block;">

                    <router-link
                        to="/documentation"
                        class="navbar-item is-hidden-touch">
                        Documentation
                    </router-link>

                    <!-- Mobile documentation menu -->
                    <div class="navbar-item has-dropdown is-hoverable is-hidden-desktop">
                        <div class="navbar-item">Documentation</div>

                        <div class="navbar-dropdown is-boxed">
                            <template v-for="items in menu['documentation']">
                                <div
                                    :key="items.category"
                                    class="navbar-item is-subitem">
                                    {{ items.category }}
                                </div>

                                <template v-for="page in items.pages">
                                    <router-link
                                        v-if="page.name"
                                        :key="page.name"
                                        :to="page.path"
                                        class="navbar-item">
                                        <span class="navbar-item-text">{{ page.name }}</span>
                                        <v-tag v-if="page.isNew" type="is-success">New!</v-tag>
                                        <v-tag v-if="page.isUpdated" type="is-info">Updated</v-tag>
                                    </router-link>

                                    <!-- submenu -->
                                    <template v-else>
                                        <div class="navbar-item" :key="page.name">
                                            {{ page.category }}
                                        </div>
                                        <router-link
                                            v-for="page in page.pages"
                                            :key="page.name"
                                            :to="page.path"
                                            class="navbar-item"
                                            style="margin-left: 1rem;">
                                            <span class="navbar-item-text">{{ page.name }}</span>
                                            <v-tag v-if="page.isNew" type="is-success">
                                                New!
                                            </v-tag>
                                            <v-tag v-if="page.isUpdated" type="is-info">
                                                Updated
                                            </v-tag>
                                        </router-link>
                                    </template>
                                </template>

                            </template>
                        </div>
                    </div>
                    <hr class="navbar-divider" style="display: block;">

                    <router-link to="/extensions" class="navbar-item is-hidden-touch">
                        Extensions
                    </router-link>

                    <!-- Mobile extensions menu -->
                    <div class="navbar-item has-dropdown is-hoverable is-hidden-desktop">
                        <div class="navbar-item">Extensions</div>

                        <div class="navbar-dropdown is-boxed">
                            <template v-for="items in menu['extensions']">
                                <router-link
                                    v-for="page in items.pages"
                                    :key="page.name"
                                    :to="page.path"
                                    class="navbar-item">
                                    <span class="navbar-item-text">{{ page.name }}</span>
                                    <v-tag v-if="page.isNew" type="is-success">New!</v-tag>
                                </router-link>
                            </template>
                        </div>
                    </div>

                    <hr class="navbar-divider" style="display: block;">

                    <div class="navbar-item has-dropdown is-hoverable">
                        <div class="navbar-link">Info</div>

                        <div class="navbar-dropdown is-boxed">
                            <strong class="navbar-item version">
                                <span class="has-text-primary">VulmaJs version</span>
                                <span class="has-text-grey">{{ version }}</span>
                            </strong>
                            <strong class="navbar-item version">
                                <span class="has-text-bulma">Bulma version</span>
                                <span class="has-text-grey">{{ bulmaVersion }}</span>
                            </strong>

                            <hr class="navbar-divider">
                            <a
                                class="navbar-item"
                                href="https://github.com/vulmajs/vulma/releases"
                                target="_blank">
                                Changelogs
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import vulmajsPackage from '../../package'
    import bulmaPackage from 'bulma/package'
    import menu from '../menu'

    export default {
        props: {
            light: Boolean
        },
        data() {
            return {
                menu,
                isMenuActive: false,
                version: vulmajsPackage.version,
                bulmaVersion: bulmaPackage.version
            }
        },
        methods: {
            closeMenu() {
                this.isMenuActive = false
            },
            toggleHtmlClip() {
                document
                    .documentElement
                    .classList
                    .toggle('is-clipped-touch', this.isMenuActive)
            }
        },
        created() {
            this.$eventHub.$on('close-menu', this.closeMenu)
        },
        beforeDestroy() {
            this.$eventHub.$off('close-menu')
        }
    }
</script>
