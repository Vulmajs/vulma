<template>
    <section>
        <p class="content"><b>selected</b>: {{ selectedOptions }}</p>
        <v-field>
            <v-select
                multiple
                native-size="8"
                v-model="selectedOptions">
                <option value="flint">Flint</option>
                <option value="silver">Silver</option>
                <option value="vane">Vane</option>
                <option value="billy">Billy</option>
                <option value="jack">Jack</option>
                <option value="heisenberg">Heisenberg</option>
                <option value="jesse">Jesse</option>
                <option value="saul">Saul</option>
                <option value="mike">Mike</option>
            </v-select>
        </v-field>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                selectedOptions: []
            }
        }
    }
</script>
