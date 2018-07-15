<template>
    <section>
        <v-field>
            <v-input placeholder="No label"></v-input>
        </v-field>

        <v-field label="Rounded">
            <v-input placeholder="No label" rounded></v-input>
        </v-field>

        <v-field label="Success" type="is-success">
            <v-input placeholder="Success"></v-input>
        </v-field>

        <v-field label="Error"
            type="is-danger"
            message="You can have a message too">
            <v-input placeholder="Error"></v-input>
        </v-field>

        <v-field label="Info" type="is-info">
            <v-input placeholder="Info"></v-input>
        </v-field>

        <v-field label="Warning" type="is-warning">
            <v-input placeholder="Warning"></v-input>
        </v-field>

        <v-field label="Disabled">
            <v-input placeholder="Disabled" disabled></v-input>
        </v-field>

        <v-field label="Loading">
            <v-input placeholder="Loading" loading></v-input>
        </v-field>
    </section>
</template>
