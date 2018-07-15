<template>
    <section>
        <v-field>
            <v-switch v-model="formatAmPm">AM/PM</v-switch>
        </v-field>
        <v-field label="Select time">
            <v-timepicker
                rounded
                placeholder="Click to select..."
                icon="clock"
                :hour-format="format">
            </v-timepicker>
        </v-field>
    </section>
</template>

<script>
export default {
    data() {
        return {
            formatAmPm: false
        }
    },
    computed: {
        format() {
            return this.formatAmPm ? '12' : '24'
        }
    }
}
</script>
