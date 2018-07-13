<template>
    <section>
        <div class="block">
            <v-radio v-model="radio"
                native-value="Flint">
                Flint
            </v-radio>
            <v-radio v-model="radio"
                native-value="Silver">
                Silver
            </v-radio>
            <v-radio v-model="radio"
                native-value="Jack">
                Jack
            </v-radio>
            <v-radio v-model="radio"
                native-value="Vane"
                disabled>
                Vane
            </v-radio>
        </div>
        <p class="content">
            <b>Selection:</b>
            {{ radio }}
        </p>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                radio: 'Jack'
            }
        }
    }
</script>
