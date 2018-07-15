<template>
    <section>
        <v-field label="Dark">
            <v-taginput
                v-model="tags"
                type="is-dark">
            </v-taginput>
        </v-field>

        <v-field label="Info">
            <v-taginput
                v-model="tags"
                type="is-info">
            </v-taginput>
        </v-field>

        <v-field label="Success">
            <v-taginput
                v-model="tags"
                type="is-success">
            </v-taginput>
        </v-field>

        <v-field label="Warning">
            <v-taginput
                v-model="tags"
                type="is-warning">
            </v-taginput>
        </v-field>

        <v-field label="Danger">
            <v-taginput
                v-model="tags"
                type="is-danger">
            </v-taginput>
        </v-field>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                tags: [
                    'Auckland',
                    'Wellington',
                    'Napier'
                ]
            }
        }
    }
</script>
