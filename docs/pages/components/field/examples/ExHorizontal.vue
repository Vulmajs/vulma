<template>
    <section>
        <v-field horizontal label="Subject" type="is-danger" message="Please enter a subject">
            <v-input name="subject" expanded></v-input>
        </v-field>

        <v-field horizontal label="From">
            <v-input name="name" placeholder="Name" expanded></v-input>
            <v-input name="email" type="email" placeholder="nobody@nowhere.com" expanded></v-input>
        </v-field>

        <v-field horizontal label="Topic">
            <v-select placeholder="Select a topic">
                <option value="1">Bulma</option>
                <option value="2">Vue.js</option>
                <option value="3">VulmaJs</option>
            </v-select>
        </v-field>

        <v-field horizontal label="Message">
            <v-input type="textarea"></v-input>
        </v-field>

        <v-field horizontal><!-- Label left empty for spacing -->
            <p class="control">
                <button class="button is-primary">
                  Send message
                </button>
            </p>
        </v-field>

    </section>
</template>
