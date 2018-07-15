<template>
    <section>
        <v-dropdown>
            <button class="button is-primary" slot="trigger">
                <span>Click me!</span>
                <v-icon icon="menu-down"></v-icon>
            </button>

            <v-dropdown-item>Action</v-dropdown-item>
            <v-dropdown-item>Another action</v-dropdown-item>
            <v-dropdown-item>Something else</v-dropdown-item>
        </v-dropdown>

        <v-dropdown hoverable>
            <button class="button is-info" slot="trigger">
                <span>Hover me!</span>
                <v-icon icon="menu-down"></v-icon>
            </button>

            <v-dropdown-item>Action</v-dropdown-item>
            <v-dropdown-item>Another action</v-dropdown-item>
            <v-dropdown-item>Something else</v-dropdown-item>
        </v-dropdown>

        <v-dropdown disabled>
            <button class="button" slot="trigger">
                <span>Disabled</span>
                <v-icon icon="menu-down"></v-icon>
            </button>

            <v-dropdown-item>Action</v-dropdown-item>
            <v-dropdown-item>Another action</v-dropdown-item>
            <v-dropdown-item>Something else</v-dropdown-item>
        </v-dropdown>

        <v-dropdown>
            <p class="tag is-success" slot="trigger">
                Custom trigger
            </p>

            <v-dropdown-item>Action</v-dropdown-item>
            <v-dropdown-item>Another action</v-dropdown-item>
            <v-dropdown-item>Something else</v-dropdown-item>
        </v-dropdown>
    </section>
</template>

<style scoped>
    .tag {
        cursor: pointer;
    }
</style>
