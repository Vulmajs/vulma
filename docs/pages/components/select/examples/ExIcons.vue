<template>
    <section>
        <h3 class="subtitle">With Material Design Icons</h3>
        <v-field>
            <v-select placeholder="Country" icon="earth">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </v-select>
        </v-field>

        <v-field>
            <v-select placeholder="Client" icon="account">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </v-select>
        </v-field>

        <h3 class="subtitle">With FontAwesome</h3>
        <v-field>
            <v-select
                placeholder="Country"
                icon="globe"
                icon-pack="fas">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </v-select>
        </v-field>

        <v-field>
            <v-select
                placeholder="Client"
                icon="user"
                icon-pack="fas">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </v-select>
        </v-field>
    </section>
</template>
