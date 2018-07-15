<template>
    <v-field class="file">
        <v-upload v-model="files">
            <a class="button is-primary">
                <v-icon icon="upload"></v-icon>
                <span>Click to upload</span>
            </a>
        </v-upload>
        <span class="file-name"
            v-if="files && files.length">
            {{ files[0].name }}
        </span>
    </v-field>
</template>

<script>
    export default {
        data() {
            return {
                files: []
            }
        }
    }
</script>
