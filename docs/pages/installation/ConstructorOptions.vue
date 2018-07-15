<template>
    <div>
        <h1 class="title is-spaced">Constructor options</h1>
        <h2 class="subtitle">These are global default options, which are set on VulmaJs initialization</h2>
        <hr>

        <div class="example is-paddingless">
            <CodeView :code="usage | pre" lang="javascript" expanded/>
        </div>

        <ApiView :data="api"/>
    </div>
</template>

<script>
    import api from './api/constructor-options'

    export default {
        data() {
            return {
                api,
                usage: `
                Vue.use(Vulmajs, {
                    defaultIconPack: 'fas',
                    defaultContainerElement: '#content',
                    // ...
                })`
            }
        }
    }
</script>
