<template>
    <v-dropdown v-model="isPublic">
        <button class="button is-primary" type="button" slot="trigger">
            <template v-if="isPublic">
                <v-icon icon="earth"></v-icon>
                <span>Public</span>
            </template>
            <template v-else>
                <v-icon icon="account-multiple"></v-icon>
                <span>Friends</span>
            </template>
            <v-icon icon="menu-down"></v-icon>
        </button>

        <v-dropdown-item :value="true">
            <div class="media">
                <v-icon class="media-left" icon="earth"></v-icon>
                <div class="media-content">
                    <h3>Public</h3>
                    <small>Everyone can see</small>
                </div>
            </div>
        </v-dropdown-item>

        <v-dropdown-item :value="false">
            <div class="media">
                <v-icon class="media-left" icon="account-multiple"></v-icon>
                <div class="media-content">
                    <h3>Friends</h3>
                    <small>Only friends can see</small>
                </div>
            </div>
        </v-dropdown-item>
    </v-dropdown>
</template>

<script>
    export default {
        data() {
            return {
                isPublic: true
            }
        }
    }
</script>
