<template>
    <div class="tags" :class="{ 'has-addons': attached }">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'VTaglist',
        props: {
            attached: Boolean
        }
    }
</script>
