<template>
    <section>
        <div class="field">
            <v-radio v-model="radio"
                native-value="default">
                Default
            </v-radio>
        </div>
        <div class="field">
            <v-radio v-model="radio"
                native-value="info"
                type="is-info">
                Info
            </v-radio>
        </div>
        <div class="field">
            <v-radio v-model="radio"
                native-value="success"
                type="is-success">
                Success
            </v-radio>
        </div>
        <div class="field">
            <v-radio v-model="radio"
                native-value="danger"
                type="is-danger">
                Danger
            </v-radio>
        </div>
        <div class="field">
            <v-radio v-model="radio"
                native-value="warning"
                type="is-warning">
                Warning
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
