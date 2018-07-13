<template>
    <section>
        <v-field label="Name">
            <v-input v-model="name"></v-input>
        </v-field>

        <v-field label="Email"
            type="is-danger"
            message="This email is invalid">
            <v-input type="email"
                value="john@"
                maxlength="30">
            </v-input>
        </v-field>

        <v-field label="Username"
            type="is-success"
            message="This username is available">
            <v-input value="johnsilver" maxlength="30"></v-input>
        </v-field>

        <v-field label="Password">
            <v-input type="password"
                value="iwantmytreasure"
                password-reveal>
            </v-input>
        </v-field>

        <v-field label="Message">
            <v-input maxlength="200" type="textarea"></v-input>
        </v-field>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                name: 'John Silver'
            }
        }
    }
</script>
