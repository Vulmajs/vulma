<template>
    <div>
        <h1 class="title is-spaced">Sortable</h1>
        <h2 class="subtitle">Sort a table — as a Vue directive</h2>
        <div class="buttons">
            <a
                class="button"
                href="http://rubaxa.github.io/Sortable"
                target="_blank">
                Website
            </a>
            <a
                class="button"
                href="https://github.com/RubaXa/Sortable"
                target="_blank">
                Docs
            </a>
        </div>

        <Example :component="ExSimple" :code="ExSimpleCode" vertical>
            <v-message type="is-info">
                <p><strong>Sortable is not included in VulmaJs</strong>, you have to install it:</p>
                <CodeView code="npm install sortablejs" expanded/>
            </v-message>
        </Example>
    </div>
</template>

<script>
    import ExSimple from './examples/ExSimple'
    import ExSimpleCode from '!!raw-loader!./examples/ExSimple'

    export default {
        data() {
            return {
                ExSimple,
                ExSimpleCode
            }
        }
    }
</script>
