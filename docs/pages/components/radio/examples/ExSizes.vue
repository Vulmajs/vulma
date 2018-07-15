<template>
    <section>
        <div class="field">
            <v-radio v-model="radio"
                size="is-small"
                native-value="small">
                Small
            </v-radio>
        </div>
        <div class="field">
            <v-radio v-model="radio"
                native-value="default">
                Default
            </v-radio>
        </div>
        <div class="field">
            <v-radio v-model="radio"
                size="is-medium"
                native-value="medium">
                Medium
            </v-radio>
        </div>
        <div class="field">
            <v-radio v-model="radio"
                size="is-large"
                native-value="large">
                Large
            </v-radio>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                radio: 'default'
            }
        }
    }
</script>
