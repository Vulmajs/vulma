<template>
    <section>
        <v-field grouped group-multiline>
            <v-field label="Total">
                <v-input type="number" v-model="total"></v-input>
            </v-field>
            <v-field label="Items per page">
                <v-input type="number" v-model="perPage"></v-input>
            </v-field>
            <v-field label="Order">
                <v-select v-model="order">
                    <option value="">default</option>
                    <option value="is-centered">is-centered</option>
                    <option value="is-right">is-right</option>
                </v-select>
            </v-field>
            <v-field label="Size">
                <v-select v-model="size">
                    <option value="">default</option>
                    <option value="is-small">is-small</option>
                    <option value="is-medium">is-medium</option>
                    <option value="is-large">is-large</option>
                </v-select>
            </v-field>
        </v-field>
        <div class="block">
            <v-switch v-model="isSimple">Simple</v-switch>
            <v-switch v-model="isRounded">Rounded</v-switch>
        </div>

        <hr>
        <v-pagination
            :total="total"
            :current.sync="current"
            :order="order"
            :size="size"
            :simple="isSimple"
            :rounded="isRounded"
            :per-page="perPage">
        </v-pagination>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                total: 200,
                current: 1,
                perPage: 20,
                order: '',
                size: '',
                isSimple: false,
                isRounded: false
            }
        }
    }
</script>
