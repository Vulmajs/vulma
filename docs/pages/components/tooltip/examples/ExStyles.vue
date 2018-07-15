<template>
    <section>
        <v-tooltip label="Text is dashed" dashed>
            Simple text
        </v-tooltip>

        <v-tooltip label="Maybe you like a little animation"
            position="is-bottom"
            animated>
            <button class="button">Animated</button>
        </v-tooltip>

        <v-tooltip label="You prefer dark?"
            type="is-dark"
            position="is-bottom">
            <button class="button">Dark</button>
        </v-tooltip>

        <v-tooltip label="Or light?"
            type="is-light"
            position="is-bottom">
            <button class="button">Light</button>
        </v-tooltip>

        <v-tooltip label="I'm never closing" always>
            <button class="button">Always</button>
        </v-tooltip>

        <v-tooltip label="I'm square"
            position="is-bottom"
            square>
            <button class="button">Square</button>
        </v-tooltip>
    </section>
</template>
