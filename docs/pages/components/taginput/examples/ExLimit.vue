<template>
    <section>
        <v-field label="Limited to 10 characters">
            <v-taginput
                maxlength="10"
                :value="['Bulma', 'Vue', 'Buefy']">
            </v-taginput>
        </v-field>

        <v-field label="Limited to 5 tags">
            <v-taginput
                maxtags="5"
                :value="['One', 'Two', 'Three', 'Four']">
            </v-taginput>
        </v-field>

        <v-field label="Limited to 10 characters and 5 tags">
            <v-taginput
                maxlength="10"
                maxtags="5"
                :value="['Red', 'Green', 'Blue', 'White']">
            </v-taginput>
        </v-field>
    </section>
</template>
