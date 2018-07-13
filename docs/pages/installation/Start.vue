<template>
    <div>
        <h1 class="title is-spaced">Start</h1>
        <h2 class="subtitle"><b>Two ways</b> to install and use VulmaJs</h2>

        <hr>

        <h3 class="title">Install</h3>
        <v-message type="is-warning">
            You need <a href="https://vuejs.org" target="_blank">Vue.js</a> <b>version 2.5+</b>.
        </v-message>
        <div class="media">
            <div class="media-left">
                <h3 class="subtitle">1</h3>
            </div>
            <div class="media-content">
                <h3 class="subtitle">Use <b>NPM</b> <em>(recommended)</em>:</h3>
                <CodeView code="npm install buefy" lang="bash" expanded/>
            </div>
        </div>

        <div class="media">
            <div class="media-left">
                <h3 class="subtitle">2</h3>
            </div>
            <div class="media-content">
                <h3 class="subtitle">Use unpkg <b>CDN</b> (or download):</h3>
                <div class="content">
                    <p>JavaScript: <a href="https://unpkg.com/vulmajs" target="_blank">https://unpkg.com/vulmajs</a></p>
                    <p>CSS: <a href="https://unpkg.com/vulmajs/lib/vulmajs.min.css" target="_blank">https://unpkg.com/vulmajs/lib/vulmajs.min.css</a></p>
                </div>
            </div>
        </div>

        <hr>

        <h3 class="title">Usage</h3>
        <div class="media">
            <div class="media-left">
                <h3 class="subtitle">1</h3>
            </div>
            <div class="media-content">
                <h3 class="subtitle">NPM / Webpack:</h3>
                <v-message type="is-info">
                    If you want to use your own theme / variables go to
                    <router-link to="/documentation/customization">customization section</router-link>.
                </v-message>
                <CodeView :code="importing | pre" lang="javascript" expanded/>
            </div>
        </div>

        <hr>

        <div class="media">
            <div class="media-left">
                <h3 class="subtitle">2</h3>
            </div>
            <div class="media-content">
                <h3 class="subtitle">CDN / Standalone:</h3>
                <CodeView :code="importingCDNHtml | pre" expanded/>
                <CodeView :code="importingCDNJs | pre" lang="javascript" expanded/>
            </div>
        </div>

        <hr>

        <div class="media" v-if="false">
            <div class="media-left">
                <h3 class="subtitle">3</h3>
            </div>
            <div class="media-content">
                <h3 class="subtitle">Nuxt.js:</h3>
                <p>It's really very simple to start with nuxt. But we can make it even simpler by adding <a href="https://github.com/vulmajs/vulma-nuxt">vulma-nuxt</a>.</p>

                <div class="content">
                    <ol>
                        <li>
                            Install using <code>npm</code> or <code>yarn.</code> <br/>
                            <CodeView :code="installVulmaJsNuxt | pre" lang="javascript" expanded/>
                        </li>
                        <li>
                            Add <a href="https://github.com/vulmajs/vulma-nuxt">vulma-nuxt</a> to modules section of nuxt.config.js: <br />
                            <CodeView :code="importingVulmaJsNuxt | pre" lang="javascript" expanded/>
                        </li>
                    </ol>
                </div>
            </div>
        </div>

        <hr>

        <h3 class="title">Include Material Design Icons</h3>
        <v-message type="is-info">
            By default VulmaJs uses <a href="https://materialdesignicons.com/" target="_blank">Material Design Icons</a>,
            if you want to swap to <a href="http://fontawesome.io/" target="_blank">FontAwesome 4</a>
            or <a href="https://fontawesome.com/" target="_blank">FontAwesome 5</a>, go to
            <router-link to="/documentation/constructor-options">constructor options</router-link>.
        </v-message>
        <v-message type="is-warning">
           Please note that VulmaJs doesn't include icon packs. You have to import it as you prefer (NPM, CDN, ...)
        </v-message>
        <CodeView :code="materialIcons" expanded/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                importing: `
                import Vue from 'vue'
                import Vulmajs from 'vulmajs'
                import 'vulmajs/lib/vulmajs.css'

                Vue.use(Vulmajs)

                // OR

                Vue.component(Vulmajs.Checkbox.name, Vulmajs.Checkbox)
                Vue.component(Vulmajs.Table.name, Vulmajs.Table)
                Vue.component(Vulmajs.Switch.name, Vulmajs.Switch)`,
                importingSSR: `
                import Vue from 'vue'
                import Vulmajs from 'vulmajs'
                import 'vulmajs/lib/vulmajs.css'

                Vue.use(Vulmajs) `,
                installVulmaJsNuxt: `
                // with npm
                npm install vulmajs-nuxt

                // with yarn
                yarn add vulmajs-nuxt
                `,
                importingVulmaJsNuxt: `
                {
                    modules: [
                        // Simple usage
                        'vulmajs-nuxt',

                        // Or you can customize
                        ['vulmajs-nuxt', { css: false, materialDesignIcons: false }],
                    ]
                }`,
                importingCDNHtml: `
                <!-- Vulmajs CSS -->
                <link rel="stylesheet" href="https://unpkg.com/vulmajs/lib/vulmajs.min.css">

                <!-- Vulmajs JavaScript -->
                <script src="https://unpkg.com/vulmajs"><\/script>`,
                importingCDNJs: `
                // Global variable
                Vue.use(Vulmajs.default)`,
                materialIcons: '<link rel="stylesheet" href="//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css">'
            }
        }
    }
</script>
