<template>
    <v-table
        :data="data"
        paginated
        per-page="5"
        :opened-detailed="defaultOpenedDetails"
        detailed
        detail-key="id"
        @details-open="(row, index) => $toast.open(`Expanded ${row.user.first_name}`)"
    >

        <template slot-scope="props">
            <v-table-column field="id" label="ID" width="40" numeric>
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
                <v-icon pack="fa"
                    :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                </v-icon>
                {{ props.row.gender }}
            </v-table-column>
        </template>

        <template slot="detail" slot-scope="props">
            <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src="static/img/placeholder-128x128.png">
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>{{ props.row.user.first_name }} {{ props.row.user.last_name }}</strong>
                            <small>@{{ props.row.user.first_name }}</small>
                            <small>31m</small>
                            <br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                            Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                    </div>
                </div>
            </article>
        </template>
    </v-table>
</template>

<script>
    const data = require('@/assets/data_test.json')

    export default {
        data() {
            return {
                data,
                defaultOpenedDetails: [1]
            }
        }
    }
</script>
