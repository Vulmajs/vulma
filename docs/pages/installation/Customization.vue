<template>
    <div>
        <h1 class="title is-spaced">Customizing theme with Sass</h1>
        <h2 class="subtitle">
            If you're familiar with <a href="http://sass-lang.com/">Sass</a> and want to <b>customize</b>
            VulmaJs with your own theme, follow these steps
        </h2>

        <hr>

        <div class="media">
            <div class="media-left">
                <h3 class="subtitle">1</h3>
            </div>
            <div class="media-content">
                <h3 class="subtitle">Install VulmaJs via npm</h3>
                <CodeView code="npm install vulmajs" lang="bash" expanded/>
                <p class="content">Or clone the repository: <a href="https://github.com/vulmajs/vulma" target="_blank">https://github.com/vulmajs/vulma</a></p>
            </div>
        </div>

        <div class="media">
            <div class="media-left">
                <h3 class="subtitle">2</h3>
            </div>
            <div class="media-content">
                <h3 class="subtitle">Set your variables with Sass</h3>
                <b-message type="is-info">
                    <div class="content">
                        <p><b>Tip:</b> You can see all Bulma's variables <a href="http://bulma.io/documentation/overview/variables/" target="_blank">here</a>.</p>
                        <p>There's also two other variables created by VulmaJs:</p>
                        <ol>
                            <li><code>$speed-slow: 150ms !default</code></li>
                            <li><code>$speed-slower: 250ms !default</code></li>
                        </ol>
                    </div>
                </b-message>
                <b-message type="is-warning">
                    You might also have to install <code>node-sass</code> and <code>sass-loader</code> depending on your environment.
                </b-message>
                <p class="block">
                    It can be done in your <b>App.vue</b> within the <code>&lt;style lang="scss"&gt;</code> tag, or in a separate <b>.scss</b> file.
                </p>
                <div class="example is-paddingless">
                    <CodeView :code="sass | pre" lang="sass" expanded/>
                </div>

            </div>
        </div>

        <div class="media">
            <div class="media-left">
                <h3 class="subtitle">3</h3>
            </div>
            <div class="media-content">
                <h3 class="subtitle">Import and use VulmaJs</h3>
                <b-message type="is-warning">
                    Please note that <code class="javascript">import 'vulmajs/lib/vulmajs.css'</code> from the <router-link to="/documentation/start">start section</router-link> has been omitted.
                </b-message>
                <CodeView :code="importing | pre" lang="javascript" expanded/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sass: `
                // Import Bulma's core
                @import "~bulma/sass/utilities/_all";

                // Set your colors
                $primary: #8c67ef;
                $primary-invert: findColorInvert($primary);
                $twitter: #4099FF;
                $twitter-invert: findColorInvert($twitter);

                // Setup $colors to use as bulma classes (e.g. 'is-twitter')
                $colors: (
                    "white": ($white, $black),
                    "black": ($black, $white),
                    "light": ($light, $light-invert),
                    "dark": ($dark, $dark-invert),
                    "primary": ($primary, $primary-invert),
                    "info": ($info, $info-invert),
                    "success": ($success, $success-invert),
                    "warning": ($warning, $warning-invert),
                    "danger": ($danger, $danger-invert),
                    "twitter": ($twitter, $twitter-invert)
                );

                // Links
                $link: $primary;
                $link-invert: $primary-invert;
                $link-focus-border: $primary;

                // Import Bulma and Vulmajs styles
                @import "~bulma";
                @import "~vulmajs/src/scss/vulmajs";
                `,
                importing: `
                import Vue from 'vue'
                import Vulmajs from 'vulmajs'

                Vue.use(Vulmajs)

                // OR

                Vue.component(Vulmajs.Checkbox.name, Vulmajs.Checkbox)
                Vue.component(Vulmajs.Table.name, Vulmajs.Table)
                Vue.component(Vulmajs.Switch.name, Vulmajs.Switch)`
            }
        }
    }
</script>
