<template>
    <v-field label="Select a date">
        <v-datepicker
            placeholder="Click to select..."
            :min-date="minDate"
            :max-date="maxDate">
        </v-datepicker>
    </v-field>
</template>

<script>
    export default {
        data() {
            const today = new Date()

            return {
                date: new Date(),
                minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5),
                maxDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5)
            }
        }
    }
</script>
