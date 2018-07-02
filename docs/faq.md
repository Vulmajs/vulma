## What is the VulmaJs Design System?

VulmaJs Design System is an open source tool for building web apps with [Vue.js](https://vuejs.org). It provides you and your team a set of organized tools, patterns & practices that work as the foundation for your application development.

## What browsers are supported?

The development environment supports the following browsers. To tweak browsers supported in production you will want to edit the `browsers list in package.json`. To see what browsers are selected by the browser list, run `npx browserslist --config="package.json"` in the root directory of this project.

| BROWSER         | VERSION |
| --------------- | ------- |
| Google Chrome   | Latest  |
| Microsoft Edge  | Latest  |
| Mozilla Firefox | Latest  |
| Opera           | Latest  |
| Safari          | Latest  |

## How do I get started?

See the [Getting Started guide](/docs/#!/Getting%20Started) on GitHub.

## I want to use this in existing Vue project, is that possible?

Definitely possible, see instructions in [Getting Started guide](/docs/#!/Getting%20Started).

## I can’t figure out what icons are available?

Icons are inside `src/assets/icons` directory, so you can just add any icons that you need. Use for example SVG files from [Font Awesome](https://github.com/encharm/Font-Awesome-SVG-PNG/tree/master/black/svg).

## How do I change the default typeface/font?

Vue Design System uses Typekit’s [Web Font Loader](https://github.com/typekit/webfontloader) which is easy to configure. To load your own font files, see [Getting Started with WebFontLoader](https://github.com/typekit/webfontloader#get-started). Currently, the app is loading _Fira Sans_ and a few different weights from Google Fonts. See `src/utils/webFontLoader.js` for an example.

## How to use design tokens in JavaScript?

First, import tokens inside the component you want to use them in:

```html
<script>
  import designTokens from "@/assets/tokens/tokens.raw.json";
</script>
```

Then, pass the data:

```html
<script>
export default {
  data() {
    return {
      tokens: designTokens.props
    };
  }
};
</script>
```

Once done, you can utilize tokens inside `<template>` like this:

```html
<template>
  <a-thing :style="{color: tokens.color_vermilion.value}" />
</template>
```

## How do you use media queries defined in tokens?

```scss
.wrapper {
  padding: $space-large;
  @media #{$media-query-large} {
    padding: $space-x-large;
  }
}
```

## How to disable browser from auto opening a new window?

Change the `autoOpenBrowser` setting in config to `false`.

## How do I use static image assets?

You can put your assets under `src/assets`. It’s ok to create new directories under that directory as well. Since Webpack is used to include all static assets on the Vue app side, you’ll have to define the path like this in order for it to work on both the app and the styleguide: `<img src="@/assets/img/example.jpg" />`.

For component’s `<docs>` section things work a bit differently. Using `<img src="img/example.jpg" />` without `@/assets/` works there. This is because [Styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) handles the assets directory a bit differently.
