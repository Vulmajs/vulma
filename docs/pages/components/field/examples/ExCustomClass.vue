<template>
    <section>
        <v-field label="Small" custom-class="is-small">
            <v-input value="Kevin Garvey" size="is-small"></v-input>
        </v-field>
        <v-field label="Large" custom-class="is-large">
            <v-input value="Kevin Garvey" size="is-large"></v-input>
        </v-field>

        <v-field label="Danger"
            custom-class="has-text-danger"
            type="is-danger"
            message="This email is invalid">
            <v-input type="email"
                value="john@"
                maxlength="30">
            </v-input>
        </v-field>

        <v-field label="Multiple (small and success)"
            custom-class="is-small has-text-success"
            type="is-success"
            >
            <v-input value="johnsilver" maxlength="30" size="is-small"></v-input>
        </v-field>

        <v-field label="Computed (medium and primary)"
            :custom-class="classes"
            type="is-primary"
            >
            <v-input value="johnsilver" maxlength="30" size="is-medium"></v-input>
        </v-field>

    </section>
</template>

<script>
    export default {
        data() {
            return {
                firstClass: 'has-text-primary',
                secondClass: 'is-medium'
            }
        },
        computed: {
            classes() {
                return `${this.firstClass} ${this.secondClass}`
            }
        }
    }
</script>