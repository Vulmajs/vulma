<template>
    <section>
        <button class="button block" @click="isActive = true" :disabled="isActive">Show</button>
        <v-message auto-close title="Error!" type="is-danger" has-icon :active.sync="isActive">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
        </v-message>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                isActive: false
            }
        }
    }
</script>
