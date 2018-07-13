<template>
    <section>
        <div class="field">
            <v-switch>Default</v-switch>
        </div>
        <div class="field">
            <v-switch v-model="isSwitched">
                {{ isSwitched }}
            </v-switch>
        </div>
        <div class="field">
            <v-switch v-model="isSwitchedCustom"
                true-value="Yes"
                false-value="No">
                {{ isSwitchedCustom }}
            </v-switch>
        </div>
        <div class="field">
            <v-switch disabled>Disabled</v-switch>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                isSwitched: false,
                isSwitchedCustom: 'Yes'
            }
        }
    }
</script>
