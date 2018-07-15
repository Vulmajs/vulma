<template>
    <v-timepicker v-model="time" inline></v-timepicker>
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
