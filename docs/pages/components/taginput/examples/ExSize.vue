<template>
    <section>
        <v-field label="Small">
            <v-taginput
                v-model="tags"
                size="is-small">
            </v-taginput>
        </v-field>

        <v-field label="Default">
            <v-taginput
                v-model="tags">
            </v-taginput>
        </v-field>

        <v-field label="Medium">
            <v-taginput
                v-model="tags"
                size="is-medium">
            </v-taginput>
        </v-field>

        <v-field label="Large">
            <v-taginput
                v-model="tags"
                size="is-large">
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
