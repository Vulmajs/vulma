<template>
    <section>
        <v-field grouped group-multiline>
            <v-select v-model="defaultSortDirection">
                <option value="asc">Default sort direction: ASC</option>
                <option value="desc">Default sort direction: DESC</option>
            </v-select>
            <v-select v-model="perPage" :disabled="!isPaginated">
                <option value="5">5 per page</option>
                <option value="10">10 per page</option>
                <option value="15">15 per page</option>
                <option value="20">20 per page</option>
            </v-select>
            <div class="control">
                <button class="button" @click="currentPage = 2" :disabled="!isPaginated">Set page to 2</button>
            </div>
            <div class="control is-flex">
                <v-switch v-model="isPaginated">Paginated</v-switch>
            </div>
            <div class="control is-flex">
                <v-switch v-model="isPaginationSimple" :disabled="!isPaginated">Simple pagination</v-switch>
            </div>
        </v-field>

        <v-table
            :data="data"
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :default-sort-direction="defaultSortDirection"
            default-sort="user.first_name">

            <template slot-scope="props">
                <v-table-column field="id" label="ID" width="40" sortable numeric>
                    {{ props.row.id }}
                </v-table-column>

                <v-table-column field="user.first_name" label="First Name" sortable>
                    {{ props.row.user.first_name }}
                </v-table-column>

                <v-table-column field="user.last_name" label="Last Name" sortable>
                    {{ props.row.user.last_name }}
                </v-table-column>

                <v-table-column field="date" label="Date" sortable centered>
                    <span class="tag is-success">
                        {{ new Date(props.row.date).toLocaleDateString() }}
                    </span>
                </v-table-column>

                <v-table-column label="Gender">
                    <v-icon pack="fas"
                        :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                    </v-icon>
                    {{ props.row.gender }}
                </v-table-column>
            </template>
        </v-table>
    </section>
</template>

<script>
    const data = require('@/assets/data_test.json')

    export default {
        data() {
            return {
                data,
                isPaginated: true,
                isPaginationSimple: false,
                defaultSortDirection: 'asc',
                currentPage: 1,
                perPage: 5
            }
        }
    }
</script>
