<template>
    <div>
        <h1 class="title is-spaced">Login</h1>
        <h2 class="subtitle">Login element</h2>
        <hr>

        <Example :component="ExSimple" :code="ExSimpleCode" vertical/> test

        <ApiView :data="api"/>
    </div>
</template>

<script>
    import api from './api/tag'

    import ExSimple from './examples/ExSimple'
    import ExSimpleCode from '!!raw-loader!./examples/ExSimple'

    export default {
        data() {
            return {
                api,
                ExSimple,
                ExSimpleCode
            }
        }
    }
</script>
