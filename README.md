# vue-cleave-directive

Vue.js directive for cleave.js

## Installation

##### Yarn
```sh
$ yarn add vue-cleave-directive
```

##### npm
```sh
$ npm install vue-cleave-directive --save
```

##### CDN
```html
<script src="https://unpkg.com/vue-cleave-directive/dist/vue-cleave-directive.min.js"></script>
```


## Usage

It's more simple if you use the directive globally :

```js
import Vue from 'vue'
import VueCleaveDirective from 'vue-cleave-directive'

Vue.use(VueCleaveDirective)
```

Best practice is to use the directive locally :

```js
import VueCleaveDirective from 'vue-cleave-directive'

<script>
  export default {
    directives: {
      cleave: VueCleaveDirective.directive
    },
  };
</script>
```

## Examples

Simply use the directive on your input that you want format.

```js
<template>
  <input v-cleave="{ date: true, datePattern: ['d', 'm', 'Y'] }">
</template>
```

It's also working with a Custom Component :

```js
<template>
  <FormInput v-cleave="{ date: true, datePattern: ['d', 'm', 'Y'] }" />
</template>
```

## License

ISC