<template>
    <div>
        <v-field>
            <button class="button is-primary is-medium" @click="open">
                Launch loading
            </button>
        </v-field>
        <v-field>
            <v-switch v-model="isFullPage">Display loader over full page</v-switch>
        </v-field>
        <v-notification ref="element" :closable="false">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
        </v-notification>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isFullPage: true,
            }
        },
        methods: {
            open() {
                const loadingComponent = this.$loading.open({
                    container: this.isFullPage ? null : this.$refs.element.$el
                })
                setTimeout(() => loadingComponent.close(), 3 * 1000)
            }
        }
    }
</script>
