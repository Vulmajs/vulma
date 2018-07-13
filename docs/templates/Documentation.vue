<template>
    <DefaultTemplate v-bind="props"/>
</template>

<script>
    import DefaultTemplate from '@/components/DefaultTemplate'

    export default {
        components: {
            DefaultTemplate
        },
        data() {
            return {
                props: {
                    title: 'Documentation',
                    subtitle: 'Learn everything you need to start using VulmaJs ;)',
                    namespace: 'documentation'
                }
            }
        }
    }
</script>
