<template>
    <section>
        <button class="button block" @click="isActive = !isActive">Toggle</button>
        <v-message title="Default" :active.sync="isActive">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
        </v-message>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                isActive: true
            }
        }
    }
</script>
