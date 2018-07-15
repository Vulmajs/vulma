<template>
    <v-field grouped>
        <v-field label="Name" expanded>
            <v-field>
                <v-select placeholder="Title">
                    <option>Mr.</option>
                    <option>Ms.</option>
                </v-select>
                <v-input placeholder="Name" expanded></v-input>
            </v-field>
        </v-field>
        <v-field label="Email" expanded>
            <v-input placeholder="some@email.com"></v-input>
        </v-field>
    </v-field>
</template>
