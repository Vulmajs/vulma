<template>
    <section>
        <div class="block">
            <v-checkbox v-model="checkboxGroup"
                native-value="Silver">
                Silver
            </v-checkbox>
            <v-checkbox v-model="checkboxGroup"
                native-value="Flint">
                Flint
            </v-checkbox>
            <v-checkbox v-model="checkboxGroup"
                native-value="Vane">
                Vane
            </v-checkbox>
            <v-checkbox v-model="checkboxGroup"
                native-value="Billy" disabled>
                Billy
            </v-checkbox>
        </div>
        <p class="content">
            <b>Selection:</b>
            {{ checkboxGroup }}
        </p>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                checkboxGroup: ['Flint']
            }
        }
    }
</script>
