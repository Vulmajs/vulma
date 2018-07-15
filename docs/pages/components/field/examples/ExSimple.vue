<template>
    <section>
        <v-field label="Name">
            <v-input value="Kevin Garvey"></v-input>
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

        <v-field label="Password"
            type="is-warning"
            :message="['Password is too short', 'Password must have at least 8 characters']">
            <v-input value="123" type="password" maxlength="30"></v-input>
        </v-field>

        <v-field label="Subject">
            <v-select placeholder="Select a subject">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </v-select>
        </v-field>
    </section>
</template>
