<template>
    <div>
        <h1 class="title is-spaced">Rating</h1>
        <h2 class="subtitle"></h2>
        <hr>

        <Example :component="ExSimple" :code="ExSimpleCode" vertical/>
        <Example :component="ExBox" :code="ExBoxCode" vertical/>

        <ApiView :data="api"/>
    </div>
</template>

<script>
    import api from './api/rating'

    import ExSimple from './examples/ExSimple'
    import ExSimpleCode from '!!raw-loader!./examples/ExSimple'

    import ExBox from './examples/ExBox'
    import ExBoxCode from '!!raw-loader!./examples/ExBox'


    export default {
        data() {
            return {
                api,
                ExSimple,
                ExSimpleCode,
                ExBox,
                ExBoxCode
            }
        }
    }
</script>
