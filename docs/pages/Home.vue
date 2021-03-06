<template>
    <section class="home">
        <TheNavbar light/>
        <div class="hero is-fullheight is-info">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="logo-rounded home-hero">
                        <img src="../assets/vulmajs-logo.png" alt="Vulmajs">
                    </div>
                    <h2 class="subtitle home-hero">
                        <strong>Lightweight</strong> UI components and design system for <strong><a href="https://vuejs.org/" target="_blank">Vue.js</a></strong>
                        based on <strong><a href="http://bulma.io/" target="_blank">Bulma</a></strong>
                    </h2>
                    <pre class="npm home-hero"><code><span class="is-unselectable">$ </span>npm install vulmajs</code></pre>

                    <div class="github-button home-hero">
                        <iframe
                            src="https://ghbtns.com/github-btn.html?user=vulmajs&repo=vulma&type=star&count=true&size=large"
                            frameborder="0"
                            scrolling="0"
                            width="160px"
                            height="30px"/>

                        <iframe
                            src="https://ghbtns.com/github-btn.html?user=vulmajs&repo=vulma&type=fork&count=false&size=large"
                            frameborder="0"
                            scrolling="0"
                            width="80px"
                            height="30px"/>
                    </div>

                    <div class="buttons">
                        <router-link class="button is-medium home-hero"
                                     to="/documentation/start">
                            Get started
                        </router-link>
                        <a class="button is-medium is-primary home-hero"
                           href="https://github.com/vulmajs/vulma/releases"
                           target="_blank">
                            Changelog
                        </a>
                    </div>
                    <small class="home-hero">v{{ version }}</small>
                </div>
            </div>
        </div>

        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <nav class="columns">
                        <div class="column has-text-centered features">
                            <v-icon icon="github-circle" size="is-large"/>
                            <p class="title is-4"><strong>Free</strong></p>
                            <p class="subtitle">Open source on <strong><a href="https://github.com/vulmajs/vulma" target="_blank">GitHub</a></strong></p>
                        </div>
                        <div class="column has-text-centered features">
                            <v-icon icon="cellphone-link" size="is-large"/>
                            <p class="title is-4"><strong>Responsive</strong></p>
                            <p class="subtitle"><b>Every</b> component is responsive</p>
                        </div>
                        <div class="column has-text-centered features">
                            <v-icon icon="alert-decagram" size="is-large"/>
                            <p class="title is-4"><strong>Modern</strong></p>
                            <p class="subtitle">
                                Built with <strong><a href="https://vuejs.org/" target="_blank">Vue.js</a></strong>
                                and <strong><a href="http://bulma.io/" target="_blank">Bulma</a></strong>
                            </p>
                        </div>
                        <div class="column has-text-centered features">
                            <v-icon pack="far" icon="paper-plane" size="is-large"/>
                            <p class="title is-4"><strong>Lightweight</strong></p>
                            <p class="subtitle">No other internal dependency</p>
                        </div>
                    </nav>
                </div>
            </div>
        </section>

        <TheFooter/>
    </section>
</template>

<script>
    import ScrollReveal from 'scrollreveal'
    import TheNavbar from '../components/TheNavbar'
    import TheFooter from '../components/TheFooter'
    import Package from '../../package.json'

    export default {
        name: 'App',
        components: {
            TheNavbar,
            TheFooter
        },
        data() {
            return {
                version: Package.version
            }
        },
        mounted() {
            const sr = ScrollReveal({
                duration: 400,
                delay: 200
            })
            sr.reveal('.home-hero', { delay: 0, origin: 'top' }, 200)
            sr.reveal('.features', 200)
        }
    }
</script>
