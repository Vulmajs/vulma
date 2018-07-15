<template>
    <section>
        <v-field label="Rounded">
            <v-taginput
                v-model="tags"
                rounded>
            </v-taginput>
        </v-field>

        <v-field label="Attached">
            <v-taginput
                v-model="tags"
                attached>
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
