<template>
    <section>
        <v-field
            label="Success"
            type="is-success">
            <v-taginput
                :value="['Tag']">
            </v-taginput>
        </v-field>

        <v-field
            label="Error"
            type="is-danger">
            <v-taginput
                :value="['Tag']">
            </v-taginput>
        </v-field>

        <v-field
            label="Info"
            type="is-info">
            <v-taginput
                :value="['Tag']">
            </v-taginput>
        </v-field>

        <v-field
            label="Warning"
            type="is-warning">
            <v-taginput
                :value="['Tag']">
            </v-taginput>
        </v-field>

        <v-field label="Disabled">
            <v-taginput
                :value="['Tag']"
                disabled>
            </v-taginput>
        </v-field>

        <v-field label="Loading">
            <v-taginput
                :value="['Tag']"
                loading>
            </v-taginput>
        </v-field>
    </section>
</template>
