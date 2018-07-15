<template>
    <transition name="fade">
        <article
            v-if="isActive"
            class="notification"
            :class="type">
            <button
                v-if="closable"
                class="delete"
                type="button"
                @click="close"
            />
            <div class="media">
                <div v-if="icon && hasIcon" class="media-left">
                    <v-icon
                        :icon="icon"
                        both
                        size="is-large"/>
                </div>
                <div class="media-content">
                    <slot/>
                </div>
            </div>
        </article>
    </transition>
</template>

<script>
    import MessageMixin from '../../utils/MessageMixin.js'

    export default {
        name: 'VNotification',
        mixins: [MessageMixin]
    }
</script>
