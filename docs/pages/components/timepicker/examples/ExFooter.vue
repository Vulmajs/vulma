<template>
    <v-field label="Select time">
        <v-timepicker v-model="time"
            placeholder="Click to select...">

            <button class="button is-primary"
                @click="time = new Date()">
                <v-icon icon="clock"></v-icon>
                <span>Now</span>
            </button>

            <button class="button is-danger"
                @click="time = null">
                <v-icon icon="close"></v-icon>
                <span>Clear</span>
            </button>
        </v-timepicker>
    </v-field>
</template>

<script>
    export default {
        data() {
            return {
                time: new Date()
            }
        }
    }
</script>
