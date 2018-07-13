<template>
    <section>
        <h3 class="subtitle">With Material Design Icons</h3>
        <v-field>
            <v-input placeholder="Search..."
                type="search"
                icon="magnify">
            </v-input>
        </v-field>

        <v-field>
            <v-input placeholder="Email"
                type="email"
                icon="email">
            </v-input>
        </v-field>

        <v-field>
            <v-input placeholder="Credit card"
                icon="credit-card">
            </v-input>
        </v-field>

        <h3 class="subtitle">With FontAwesome</h3>
        <v-field>
            <v-input placeholder="Search..."
                type="search"
                icon-pack="fas"
                icon="search">
            </v-input>
        </v-field>

        <v-field>
            <v-input placeholder="Email"
                type="email"
                icon-pack="fas"
                icon="envelope">
            </v-input>
        </v-field>

        <v-field>
            <v-input placeholder="Credit card"
                icon-pack="far"
                icon="credit-card">
            </v-input>
        </v-field>
    </section>
</template>
