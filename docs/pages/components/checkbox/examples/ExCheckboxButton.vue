<template>
    <section>
        <v-field>
            <v-checkbox-button v-model="checkboxGroup"
                native-value="Nop"
                type="is-danger">
                <v-icon icon="close"></v-icon>
                <span>Nop</span>
            </v-checkbox-button>

            <v-checkbox-button v-model="checkboxGroup"
                native-value="Yep"
                type="is-success">
                <v-icon icon="check"></v-icon>
                <span>Yep</span>
            </v-checkbox-button>

            <v-checkbox-button v-model="checkboxGroup"
                native-value="Default">
                Default
            </v-checkbox-button>

            <v-checkbox-button v-model="checkboxGroup"
                native-value="Disabled"
                disabled>
                Disabled
            </v-checkbox-button>
        </v-field>
        <p class="content">
            <b>Selection:</b>
            {{ checkboxGroup }}
        </p>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                checkboxGroup: []
            }
        }
    }
</script>
