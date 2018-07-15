<template>
    <section>
        <v-field label="Tags with 3 characters">
            <v-taginput
                v-model="tags" 
                :before-adding="beforeAdding">
            </v-taginput>
        </v-field>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                tags: [
                    '123',
                    '456',
                    '789'
                ]
            }
        },
        methods: {
        	beforeAdding(tag) {
        		return tag.length === 3;
        	},
        },
    }
</script>
