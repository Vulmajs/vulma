<template>
    <section>
        <v-field>
            <v-input placeholder="Email" type="email"></v-input>
        </v-field>

        <v-field>
            <v-input placeholder="Number"
                type="number"
                min="10"
                max="20">
            </v-input>
        </v-field>

        <v-field>
            <v-input placeholder="URL" type="url"></v-input>
        </v-field>

        <v-field>
            <v-input type="textarea"
                minlength="10"
                maxlength="100"
                placeholder="Maxlength automatically counts characters">
            </v-input>
        </v-field>
    </section>
</template>
