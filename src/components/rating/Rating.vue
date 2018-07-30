<template>
    <div class="control" :class="rootClasses">
        <fieldset class="rating" v-if="type === 'star'">
            <input
                type="radio"
                id="star5"
                name="rating"
                value="5"
                v-model="newValue">
            <label
                class = "full"
                for="star5" />
            <input
                type="radio"
                id="star4half"
                name="rating"
                value="4.5"
                v-model="newValue">
            <label
                class="half"
                for="star4half"/>
            <input
                type="radio"
                id="star4"
                name="rating"
                value="4"
                v-model="newValue">
            <label
                class = "full"
                for="star4" />
            <input
                type="radio"
                id="star3half"
                name="rating"
                value="3.5"
                v-model="newValue">
            <label
                class="half"
                for="star3half" />
            <input
                type="radio"
                id="star3"
                name="rating"
                value="3"
                v-model="newValue">
            <label
                class = "full"
                for="star3" />
            <input
                type="radio"
                id="star2half"
                name="rating"
                value="2.5"
                v-model="newValue">
            <label
                class="half"
                for="star2half" />
            <input
                type="radio"
                id="star2"
                name="rating"
                value="2"
                v-model="newValue">
            <label
                class = "full"
                for="star2" />
            <input
                type="radio"
                id="star1half"
                name="rating"
                value="1.5"
                v-model="newValue">
            <label
                class="half"
                for="star1half" />
            <input
                type="radio"
                id="star1"
                name="rating"
                value="1"
                v-model="newValue">
            <label
                class = "full"
                for="star1" />
            <input
                type="radio"
                id="starhalf"
                name="rating"
                value="0.5"
                v-model="newValue">
            <label
                class="half"
                for="starhalf" />
        </fieldset>

        <div
            class="rating-box"
            :class="style"
            v-if="type === 'box'">
            <div class="rating-box-content">{{ value }}</div>
            <div class="rating-box-footer">
                {{ message }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VRating',
    components: {},
    inheritAttrs: false,
    props: {
        value: {
            type: [Number, String],
            default: -1
        },
        type: {
            type: String,
            default: 'star',
            validator: (val) =>
                ['star', 'box'].indexOf(val) > -1
        },
        message: {
            type: String,
            default: ''
        },
        isInfo: Boolean,
        isPrimary: Boolean,
        isLink: Boolean,
        isSuccess: Boolean,
        isWarning: Boolean,
        isDanger: Boolean
    },
    data() {
        return {
            newValue: this.value
        };
    },
    computed: {
        style() {
            if (this.isInfo) {
                return 'is-info';
            }
            if (this.isPrimary) {
                return 'is-primary';
            }
            if (this.isLink) {
                return 'is-link';
            }
            if (this.isSuccess) {
                return 'is-success';
            }
            if (this.isWarning) {
                return 'is-warning';
            }
            if (this.isDanger) {
                return 'is-danger';
            }

            return '';
        }
    },
    watch: {
        /**
         * When v-model change, set internal value.
         */
        value(value) {
            this.newValue = Number(value)
        },
        /**
         * Emit input event to update the user v-model.
         */
        newValue(value) {
            // trigger input event on change
            this.$emit('input', Number(value))
        }
    }
};
</script>
