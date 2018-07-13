<template>
    <section>
        <v-field>
            <v-upload v-model="dropFiles"
                multiple
                drag-drop>
                <section class="section">
                    <div class="content has-text-centered">
                        <p>
                            <v-icon
                                icon="upload"
                                size="is-large">
                            </v-icon>
                        </p>
                        <p>Drop your files here or click to upload</p>
                    </div>
                </section>
            </v-upload>
        </v-field>

        <div class="tags">
            <span v-for="(file, index) in dropFiles"
                :key="index"
                class="tag is-primary" >
                {{file.name}}
                <button class="delete is-small"
                    type="button"
                    @click="deleteDropFile(index)">
                </button>
            </span>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                dropFiles: []
            }
        },
        methods: {
            deleteDropFile(index) {
                this.dropFiles.splice(index, 1)
            }
        }
    }
</script>
