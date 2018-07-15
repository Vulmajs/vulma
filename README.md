<p align="center">
    <a href="https://vulmajs.com">
        <img src="https://github.com/vulmajs/vulmajs/blob/dev/static/img/vulmajs-logo.png" />
    </a>
    <a href="https://www.npmjs.com/package/vulmajs"><img src="https://img.shields.io/npm/v/vulmajs.svg" /></a>
    <a href="https://www.npmjs.com/package/vulmajs"><img src="https://img.shields.io/npm/dt/vulmajs.svg" /></a>
    <a href="https://circleci.com/gh/vulmajs/vulmajs"><img src="https://img.shields.io/circleci/project/github/vulmajs/vulma.svg?style=flat-square" /></a>
    <a href="https://codecov.io/gh/vulmajs/vulmajs"><img src="https://img.shields.io/codecov/c/github/vulmajs/vulma.svg?style=flat-square" /></a>
    <a href="https://www.npmjs.com/package/vulmajs"><img src="https://img.shields.io/npm/l/vulmajs.svg" /></a>
</p>

> VulmaJs is a lightweight UI library of responsive components for [Vue.js](https://vuejs.org/) based on [Bulma](http://bulma.io/) framework and design system, with code style guides.

## Features

* Keep your current Bulma theme / variables easily
* Supports both [Material Design Icons](https://materialdesignicons.com/) and [FontAwesome](http://fontawesome.io/)
* Very lightweight with none internal dependencies aside from Vue & Bulma
* About 60KB min+gzip (with Bulma included)
* Semantic code output
* Follows Bulma design and some of the [Material Design UX](https://material.io/)
* Focus on usability and performance without *over-animating* stuff

## Documentation

The documentation is in the docs directory, it serves as the demo as well.

Browse [online documentation here](https://vulmajs.com).

## Quick start

You need [Vue.js](https://vuejs.org/) **version 2.5+**.

### 1 Install via npm

```bash
npm install vulmajs
```
or 
```bash
yarn add vulmajs
```

### 2 Import and use Vulmajs

```javascript
import Vue from 'vue';
import Vulmajs from 'vulmajs';
import 'vulmajs/lib/vulmajs.css';

Vue.use(Vulmajs);

// OR

Vue.component(Vulmajs.Checkbox.name, Vulmajs.Checkbox);
Vue.component(Vulmajs.Table.name, Vulmajs.Table);
Vue.component(Vulmajs.Switch.name, Vulmajs.Switch);
```

### 3 Include Material Design Icons

```html
<link rel="stylesheet" href="//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css">
```

If you want to customize the icons or the theme, refer to the [customization section on the documentation](https://vulmajs.com/#/documentation/customization).

### Alternatively, you can use a CDN or even download

```html
<!-- VulmaJs CSS -->
<link rel="stylesheet" href="https://unpkg.com/vulmajs/lib/vulmajs.min.css">

<!-- VulmaJs JavaScript -->
<script src="https://unpkg.com/vulmajs"></script>
```

```javascript
// Global variable
Vue.use(Vulmajs.default)
```

## Browser support

Recent versions of Firefox, Chrome, Edge, Opera and Safari. IE10+ is only partially supported.

## Versioning

While it's still in beta, version will follow **v0.Y.Z**, where:

* **Y**: Major (breaking changes)
* **Z**: Minor or patch

## Current roadmap

https://github.com/vulmajs/vulma/

## Stay in touch


## Core Team

* Ronni H. Baslund — [@ronnibaslund](https://github.com/ronnibaslund)

## License

Code released under [MIT]((https://github.com/vulmajs/vulma/blob/master/LICENSE)) license.

Copyright (c) 2018, Ronni H. Baslund.
