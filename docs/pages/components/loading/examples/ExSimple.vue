<template>
    <section>
        <v-field>
            <button class="button is-primary is-medium" @click="openLoading">
                Launch loading
            </button>
        </v-field>
        <v-field>
            <v-switch v-model="isFullPage">Display loader over full page</v-switch>
        </v-field>
        <v-notification :closable="false">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
            <v-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></v-loading>
        </v-notification>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                isLoading: false,
                isFullPage: true
            }
        },
        methods: {
            openLoading() {
                this.isLoading = true
                setTimeout(() => {
                    this.isLoading = false
                }, 10 * 1000)
            }
        }
    }
</script>
