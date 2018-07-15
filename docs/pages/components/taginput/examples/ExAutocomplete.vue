<template>
    <section>
        <div class="block">
            <v-switch v-model="allowNew">
                Allow new tags
            </v-switch>
        </div>
        <v-field label="Enter some tags">
            <v-taginput
                v-model="tags"
                :data="filteredTags"
                autocomplete
                :allow-new="allowNew"
                field="user.first_name"
                icon="label"
                placeholder="Add a tag"
                @typing="getFilteredTags">
            </v-taginput>
        </v-field>
        <pre style="max-height: 400px"><b>Tags:</b>{{ tags }}</pre>
    </section>
</template>

<script>
    const data = require('@/assets/data_test.json')

    export default {
        data() {
            return {
                filteredTags: data,
                isSelectOnly: false,
                tags: [],
                allowNew: false
            }
        },
        methods: {
            getFilteredTags(text) {
                this.filteredTags = data.filter((option) => {
                    return option.user.first_name
                        .toString()
                        .toLowerCase()
                        .indexOf(text.toLowerCase()) >= 0
                })
            }
        }
    }
</script>

