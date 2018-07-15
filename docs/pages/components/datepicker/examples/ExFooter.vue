<template>
    <v-field label="Select a date">
        <v-datepicker v-model="date"
            :first-day-of-week="1"
            placeholder="Click to select...">

            <button class="button is-primary"
                @click="date = new Date()">
                <v-icon icon="calendar-today"></v-icon>
                <span>Today</span>
            </button>

            <button class="button is-danger"
                @click="date = null">
                <v-icon icon="close"></v-icon>
                <span>Clear</span>
            </button>
        </v-datepicker>
    </v-field>
</template>

<script>
    export default {
        data() {
            return {
                date: new Date()
            }
        }
    }
</script>
