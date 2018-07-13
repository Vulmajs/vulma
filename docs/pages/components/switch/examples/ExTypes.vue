<template>
    <section>
        <div class="field">
            <v-switch :value="true">
                Default
            </v-switch>
        </div>
        <div class="field">
            <v-switch :value="true"
            type="is-info">
                Info
            </v-switch>
        </div>
        <div class="field">
            <v-switch :value="true"
            type="is-success">
                Success
            </v-switch>
        </div>
        <div class="field">
            <v-switch :value="true"
            type="is-danger">
                Danger
            </v-switch>
        </div>
        <div class="field">
            <v-switch :value="true"
            type="is-warning">
                Warning
            </v-switch>
        </div>
    </section>
</template>
