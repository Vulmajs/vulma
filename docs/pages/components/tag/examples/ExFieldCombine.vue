<template>
    <section>
        <v-field grouped group-multiline>
            <div class="control">
                <v-taglist attached>
                    <v-tag type="is-dark">npm</v-tag>
                    <v-tag type="is-info">0.5.1</v-tag>
                </v-taglist>
            </div>

            <div class="control">
                <v-taglist attached>
                    <v-tag type="is-dark">downloads</v-tag>
                    <v-tag type="is-success">15k</v-tag>
                </v-taglist>
            </div>

            <div class="control">
                <v-taglist attached>
                    <v-tag type="is-dark">chat</v-tag>
                    <v-tag type="is-primary">on discord</v-tag>
                </v-taglist>
            </div>
        </v-field>
        <br>

        <v-field grouped group-multiline>
            <div class="control">
                <v-tag type="is-primary" attached closable>Technology</v-tag>
            </div>

            <div class="control">
                <v-tag type="is-primary" attached closable>Vuejs</v-tag>
            </div>

            <div class="control">
                <v-tag type="is-primary" attached closable>CSS</v-tag>
            </div>

            <div class="control">
                <v-tag type="is-primary" attached closable>Flexbox</v-tag>
            </div>
        </v-field>
    </section>
</template>
