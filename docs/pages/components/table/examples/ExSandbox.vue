<template>
    <section>
        <v-field grouped group-multiline>
            <div class="control">
                <v-switch v-model="isBordered">Bordered</v-switch>
            </div>
            <div class="control">
                <v-switch v-model="isStriped">Striped</v-switch>
            </div>
            <div class="control">
                <v-switch v-model="isNarrowed">Narrowed</v-switch>
            </div>
            <div class="control">
                <v-switch v-model="isHoverable">Hoverable</v-switch>
            </div>
            <div class="control">
                <v-switch v-model="isFocusable">Focusable</v-switch>
            </div>
            <div class="control">
                <v-switch v-model="isLoading">Loading state</v-switch>
            </div>
            <div class="control">
                <v-switch v-model="isEmpty">Empty</v-switch>
            </div>
            <div class="control">
                <v-switch v-model="hasMobileCards">Mobile cards <small>(collapsed rows)</small></v-switch>
            </div>
        </v-field>

        <v-table
            :data="isEmpty ? [] : data"
            :bordered="isBordered"
            :striped="isStriped"
            :narrowed="isNarrowed"
            :hoverable="isHoverable"
            :loading="isLoading"
            :focusable="isFocusable"
            :mobile-cards="hasMobileCards">

            <template slot-scope="props">
                <v-table-column field="id" label="ID" width="40" numeric>
                    {{ props.row.id }}
                </v-table-column>

                <v-table-column field="first_name" label="First Name">
                    {{ props.row.first_name }}
                </v-table-column>

                <v-table-column field="last_name" label="Last Name">
                    {{ props.row.last_name }}
                </v-table-column>

                <v-table-column field="date" label="Date" centered>
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

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <v-icon
                                icon="emoticon-sad"
                                size="is-large">
                            </v-icon>
                        </p>
                        <p>Nothing here.</p>
                    </div>
                </section>
            </template>
        </v-table>
    </section>
</template>

<script>
    export default {
        data() {
            const data = [
                { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016/10/15 13:43:27', 'gender': 'Male' },
                { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016/12/15 06:00:53', 'gender': 'Male' },
                { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016/04/26 06:26:28', 'gender': 'Female' },
                { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016/04/10 10:28:46', 'gender': 'Male' },
                { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016/12/06 14:38:38', 'gender': 'Female' }
            ]

            return {
                data,
                isEmpty: false,
                isBordered: false,
                isStriped: false,
                isNarrowed: false,
                isHoverable: false,
                isFocusable: false,
                isLoading: false,
                hasMobileCards: true
            }
        }
    }
</script>
