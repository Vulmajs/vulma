<template>
    <section>
        <v-field label="Add some tags">
            <v-taginput
                v-model="tags"
                ellipsis
                icon="label"
                placeholder="Add a tag">
            </v-taginput>
        </v-field>
        <p class="content"><b>Tags:</b> {{ tags }}</p>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                tags: [
                    'Auckland',
                    'Wellington',
                    'Very long string that would overflow'
                ]
            }
        }
    }
</script>

