<template>
    <section>
        <div class="field">
            <v-checkbox>Basic</v-checkbox>
        </div>
        <div class="field">
            <v-checkbox v-model="checkbox">
                {{ checkbox }}
            </v-checkbox>
        </div>
        <div class="field">
            <v-checkbox v-model="checkboxCustom"
                true-value="Yes"
                false-value="No">
                {{ checkboxCustom }}
            </v-checkbox>
        </div>
        <div class="field">
            <v-checkbox disabled>Disabled</v-checkbox>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                checkbox: false,
                checkboxCustom: 'Yes'
            }
        }
    }
</script>
