<template>
    <section>
        <v-field>
            <v-radio-button v-model="radioButton"
                native-value="Nop"
                type="is-danger">
                <v-icon icon="close"></v-icon>
                <span>Nop</span>
            </v-radio-button>

            <v-radio-button v-model="radioButton"
                native-value="Yep"
                type="is-success">
                <v-icon icon="check"></v-icon>
                <span>Yep</span>
            </v-radio-button>

            <v-radio-button v-model="radioButton"
                native-value="Default">
                Default
            </v-radio-button>

            <v-radio-button v-model="radioButton"
                native-value="Disabled"
                disabled>
                Disabled
            </v-radio-button>
        </v-field>
        <p class="content">
            <b>Selection:</b>
            {{ radioButton }}
        </p>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                radioButton: ''
            }
        }
    }
</script>
