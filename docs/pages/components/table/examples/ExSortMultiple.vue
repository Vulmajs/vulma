<template>
  <div>
    <v-field grouped group-multiline>
      <div class="control is-flex">
          <v-switch v-model="multipleColumnsSwitch">Sort multiple rows</v-switch>
      </div>
      <div class="control is-flex">
        <span class="button" @click="resetPriority" :disabled="sortingPrioirty.length === 0">Reset sorting</span>
      </div>
    </v-field>
    <v-table 
    :data="data"
    @sort="sortPressed"
    :backend-sorting="true"
    :sort-multiple="multipleColumnsSwitch"
    :sort-multiple-data="sortingPrioirty"
    >
      <template slot-scope="props">
        <v-table-column field="first_name" label="First name" sortable>
            {{ props.row.first_name }}
        </v-table-column>
        <v-table-column field="last_name" label="Last name" sortable>
            {{ props.row.last_name }}
        </v-table-column>
        <v-table-column field="team" label="Team" sortable>
            {{ props.row.team }}
        </v-table-column>
      </template>
    </v-table>
  </div>
</template>

<script>
import _ from 'lodash'

const dataSource = [
  { 'id': 2, 'first_name': 'Abbie', 'last_name': 'Archer', 'team': 'Team B'},
  { 'id': 3, 'first_name': 'Abbie', 'last_name': 'Smith', 'team': 'Team A'},
  { 'id': 4, 'first_name': 'Jones', 'last_name': 'Smith', 'team': 'Team C'},
  { 'id': 1, 'first_name': 'Abbie', 'last_name': 'Archer', 'team': 'Team A'},
]
  export default {
      data() {
          return {
            multipleColumnsSwitch: true,
            data: [],
            sortingPrioirty: []
          }
      },
      methods: {
        resetPriority(){
          this.sortingPrioirty = []
          this.loadAsyncData()
        },
        sortPressed(field, order) {
          let existingPriority = this.sortingPrioirty.find(i => i.field === field)
          if(existingPriority) {
            existingPriority.order = existingPriority.order === 'desc' ? 'asc' : 'desc'
          } else {
            this.sortingPrioirty.push({field, order})
          }
          this.loadAsyncData()
        },
        async loadAsyncData() {
          let mockdata = JSON.parse(JSON.stringify(dataSource));
          this.data = _.orderBy(mockdata, this.sortingPrioirty.map(i => i.field), this.sortingPrioirty.map(i => i.order))
        }
      },
      created () {
        this.data = JSON.parse(JSON.stringify(dataSource));
      }
  }
</script>
