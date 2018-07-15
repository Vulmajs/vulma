<template>
    <section>
        <v-field label="Simple">
            <v-select placeholder="Select a name">
                <option
                    v-for="option in data"
                    :value="option.id"
                    :key="option.id">
                    {{ option.user.first_name }}
                </option>
            </v-select>
        </v-field>

        <v-field label="Grouped">
            <v-select placeholder="Select a character" icon="account">
                <optgroup label="Black Sails">
                    <option value="flint">Flint</option>
                    <option value="silver">Silver</option>
                    <option value="vane">Vane</option>
                    <option value="billy">Billy</option>
                    <option value="jack">Jack</option>
                </optgroup>

                <optgroup label="Breaking Bad">
                    <option value="heisenberg">Heisenberg</option>
                    <option value="jesse">Jesse</option>
                    <option value="saul">Saul</option>
                    <option value="mike">Mike</option>
                </optgroup>

                <optgroup label="Game of Thrones">
                    <option value="tyrion-lannister">Tyrion Lannister</option>
                    <option value="jamie-lannister">Jamie Lannister</option>
                    <option value="daenerys-targaryen">Daenerys Targaryen</option>
                    <option value="jon-snow">Jon Snow</option>
                </optgroup>
            </v-select>
        </v-field>

        <v-field
            label="Error"
            type="is-danger"
            message="Something went wrong with this field">
            <v-select placeholder="Select a character">
                <option value="flint">Flint</option>
                <option value="silver">Silver</option>
            </v-select>
        </v-field>

        <v-field label="Rounded">
            <v-select placeholder="Select a character" rounded>
                <option value="flint">Flint</option>
                <option value="silver">Silver</option>
            </v-select>
        </v-field>

        <v-field label="Required">
            <v-select placeholder="Select a character" required>
                <option value="flint">Flint</option>
                <option value="silver">Silver</option>
            </v-select>
        </v-field>

        <v-field label="Loading">
            <v-select placeholder="Select a character" loading>
                <option value="flint">Flint</option>
                <option value="silver">Silver</option>
            </v-select>
        </v-field>

        <v-field label="Disabled">
            <v-select placeholder="Select a character" disabled>
                <option value="flint">Flint</option>
                <option value="silver">Silver</option>
            </v-select>
        </v-field>

        <v-field label="Disabled option">
            <v-select placeholder="Select a character">
                <option value="flint">Flint</option>
                <option value="silver" disabled>Silver</option>
            </v-select>
        </v-field>

        <v-field
            label="Expanded">
            <v-select placeholder="Select a character" expanded>
                <option value="flint">Flint</option>
                <option value="silver">Silver</option>
            </v-select>
        </v-field>
    </section>
</template>

<script>
    const data = require('@/assets/data_test.json')

    export default {
        data() {
            return { data }
        }
    }
</script>
