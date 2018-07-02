<template>
  <component :is="wrapper" class="textarea">
    <label v-if="label">{{ label }}</label>
    <textarea 
      :id="id"
      :disabled="disabled"
      :type="type"
      :hover="hover"
      :focus="focus"
      :value="value"
      :placeholder="placeholder"
      :class="['textarea', {'input-expand': width === 'expand'}]"
      @input="onInput($event.target.value)"
      @focus="onFocus($event.target.value)"
    />
  </component>
</template>

<script>
/**
 * Form Textarea are used to allow users to provide a longer text input.
 * Form Textarea has a range of options
 */
export default {
  name: "FormTextarea",
  status: "prototype",
  release: "1.0.0",
  props: {
    /**
     * Text value of the textarea field.
     */
    value: {
      type: String,
      default: null,
    },
    /**
     * The placeholder value for the textarea field.
     */
    placeholder: {
      type: String,
      default: null,
    },
    /**
     * The label of the textarea field.
     */
    label: {
      type: String,
      default: null,
    },
    /**
     * The html element name used for the wrapper.
     * `div, section`
     */
    wrapper: {
      type: String,
      default: "div",
      validator: value => {
        return value.match(/(div|section)/)
      },
    },
    /**
     * Unique identifier of the form input field.
     */
    id: {
      type: String,
      default: null,
    },
    /**
     * The width of the textarea field.
     * `auto, expand`
     */
    width: {
      type: String,
      default: "expand",
      validator: value => {
        return value.match(/(auto|expand)/)
      },
    },
    /**
     * Whether the textarea field is disabled or not.
     * `true, false`
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Manually trigger textarea field’s hover state.
     * `true, false`
     */
    hover: {
      type: Boolean,
      default: false,
    },
    /**
     * Manually trigger textarea field’s focus state.
     * `true, false`
     */
    focus: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onInput(value) {
      this.$emit("change", value)
    },
    onFocus(value) {
      this.$emit("focus", value)
    },
  },
}
</script>

<style lang="scss" scoped>
// Design Tokens with local scope
$color-placeholder: tint($color-silver, 50%);

.textarea {
  @include stack-space($space-small);
  font-weight: $font-weight-regular;
  font-family: $font-family-text;
  font-size: $font-size-base;
  line-height: $line-height-heading;
  width: auto;
  &.input-expand {
    width: 100%;
  }
  label {
    display: block;
    font-size: $font-size-small;
    color: tint($color-rich-black, 20%);
    @include stack-space($space-x-small);
  }
  textarea {
    @include reset;
    @include inset-squish-space($space-small);
    transition: all 0.2s ease;
    -webkit-appearance: none;
    appearance: none;
    font-family: $font-family-text;
    background: $color-white;
    border-radius: $border-radius-default;
    color: set-text-color($color-rich-black, $color-white);
    margin: 0;
    border: 0;
    box-shadow: inset 0 1px 0 0 rgba($color-rich-black, 0.07), 0 0 0 1px tint($color-rich-black, 80%);
    &::-webkit-input-placeholder {
      -webkit-font-smoothing: antialiased;
      color: $color-placeholder;
    }
    &:-ms-input-placeholder {
      color: $color-placeholder;
    }
    &::-moz-placeholder {
      color: $color-placeholder;
      -moz-osx-font-smoothing: grayscale;
      opacity: 1;
    }
    &:hover,
    &[hover] {
      box-shadow: 0 1px 5px 0 rgba($color-rich-black, 0.07), 0 0 0 1px tint($color-rich-black, 60%);
    }
    &:focus,
    &[focus] {
      transition: box-shadow 0.2s ease;
      box-shadow: inset 0 0 0 1px $color-bleu-de-france, 0 0 0 1px $color-bleu-de-france;
      outline: 0;
    }
    &[disabled] {
      box-shadow: inset 0 1px 0 0 rgba($color-rich-black, 0.07), 0 0 0 1px tint($color-rich-black, 80%);
      background: lighten($color-placeholder, 42%);
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
}
</style>


<docs>
  ```jsx
  <div>
    <form-textarea label="Input" placeholder="Write your text" />
    <form-textarea label=":hover" hover placeholder="Write your text" />
    <form-textarea label=":focus" focus placeholder="Write your text" />
    <form-textarea label="[disabled]" disabled placeholder="Disabled input" />
  </div>
  ```
</docs>
