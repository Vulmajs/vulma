<template>
    <section>
        <v-tooltip label="Tooltip right"
            position="is-right">
            <button class="button is-dark">
                Right
            </button>
        </v-tooltip>

        <v-tooltip label="Tooltip top">
            <button class="button is-dark">
                Top (default)
            </button>
        </v-tooltip>

        <v-tooltip label="Tooltip bottom"
            position="is-bottom">
            <button class="button is-dark">
                Bottom
            </button>
        </v-tooltip>

        <v-tooltip label="Tooltip left"
            position="is-left">
            <button class="button is-dark">
                Left
            </button>
        </v-tooltip>
    </section>
</template>
