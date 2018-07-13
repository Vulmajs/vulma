<template>
    <div class="field table-mobile-sort">
        <div class="field has-addons">
            <v-select v-model="mobileSort" expanded>
                <option
                    v-for="(column, index) in columns"
                    v-if="column.sortable"
                    :key="index"
                    :value="column">
                    {{ column.label }}
                </option>
            </v-select>
            <div class="control">
                <button
                    class="button is-primary"
                    @click="sort">
                    <v-icon
                        v-show="currentSortColumn === mobileSort"
                        :class="{ 'is-desc': !isAsc }"
                        icon="arrow-up"
                        size="is-small"
                        both
                    />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import VSelect from '../select'
    import VIcon from '../icon'

    export default {
        name: 'VTableMobileSort',
        components: {
            VSelect,
            VIcon
        },
        props: {
            currentSortColumn: Object,
            isAsc: Boolean,
            columns: Array
        },
        data() {
            return {
                mobileSort: this.currentSortColumn
            }
        },
        watch: {
            mobileSort(column) {
                if (this.currentSortColumn === column) return

                this.$emit('sort', column)
            },

            currentSortColumn(column) {
                this.mobileSort = column
            }
        },
        methods: {
            sort() {
                this.$emit('sort', this.mobileSort)
            }
        }
    }
</script>
