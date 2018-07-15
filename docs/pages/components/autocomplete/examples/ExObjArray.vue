<template>
    <section>
        <div class="block">
            <v-switch v-model="openOnFocus">
                Open dropdown on focus
            </v-switch>
            <v-switch v-model="keepFirst">
                Keep-first <small>(will always have first option pre-selected)</small>
            </v-switch>
        </div>
        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <v-field label="Find a name">
            <v-autocomplete
                v-model="name"
                placeholder="e.g. Anne"
                :keep-first="keepFirst"
                :open-on-focus="openOnFocus"
                :data="filteredDataObj"
                field="user.first_name"
                @select="option => selected = option">
            </v-autocomplete>
        </v-field>
    </section>
</template>

<script>
    const data = require('@/assets/data_test.json')

    export default {
        data() {
            return {
                data,
                keepFirst: false,
                openOnFocus: false,
                name: '',
                selected: null
            }
        },
        computed: {
            filteredDataObj() {
                return this.data.filter((option) => {
                    return option.user.first_name
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        }
    }
</script>
