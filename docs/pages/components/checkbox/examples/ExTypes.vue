<template>
    <section>
        <div class="field">
            <v-checkbox :value="true">
                Default
            </v-checkbox>
        </div>
        <div class="field">
            <v-checkbox :value="true"
            type="is-info">
                Info
            </v-checkbox>
        </div>
        <div class="field">
            <v-checkbox :value="true"
            type="is-success">
                Success
            </v-checkbox>
        </div>
        <div class="field">
            <v-checkbox :value="true"
            type="is-danger">
                Danger
            </v-checkbox>
        </div>
        <div class="field">
            <v-checkbox :value="true"
            type="is-warning">
                Warning
            </v-checkbox>
        </div>
    </section>
</template>
