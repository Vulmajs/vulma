<template>
    <v-tabs type="is-boxed">
        <v-tab-item>
            <template slot="header">
                <v-icon icon="information-outline"></v-icon>
                <span> Issues <v-tag rounded> 3 </v-tag> </span>
            </template>
        </v-tab-item>
        <v-tab-item>
            <template slot="header">
                <v-icon icon="source-pull"></v-icon>
                <span> Pull Requests <v-tag rounded> 1 </v-tag> </span>
            </template>
        </v-tab-item>
    </v-tabs>
</template>
