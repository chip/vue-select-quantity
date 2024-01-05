# VueSelectQuantity component

This Vue 2 component was created for easily specifying a quantity, as is the case in a shopping cart.

## DEMO

[DEMO](https://www.github.com/chip/vue-select-quantity/Demo.vue)

## How to install

$```npm install @chipcastle.com/vue-select-quantity```


## Quick start

```javascript
import { VueSelectQuantity } from 'vue-select-quantity'

export default {
  components: {
    VueSelectQuantity
  }
}
```

## Basic Usage

```html
<template>
  <VueSelectQuantity
    data-id="id"
    v-model="quantity"
    @update:quantity="update($event)"
    @remove:quantity="remove($event)"
  />
</template>
```

```javascript
<script>
  export default {
    data () {
      return {
        id: '1',
        quantity: 1
      }
    },
    methods: {
      update (evt) {
        console.log('received update:quantity event', evt)
        this.quantity = evt
      },
      remove (evt) {
        console.log('received remove:quantity event', evt)
      }
    }
  }
</script>
```

## Props

| Property name | Type | Default | Description |
| ------------- | ---- | ------- | ----------- |
| data-id | String | null | A required property to identify the component instance |
| v-model | Number | null | A required property which represents the quantity to be updated |

## Events

| Event name | Trigger |
| ------------- | ---- |
| update:quantity | Called when the quantity is changed (e.g., 1-9 is selected from the menu, Update button is clicked) |
| remove:quantity | Called when the 0 is selected from the menu) |

## Developers

Fork the project and enter the following commands:

    git clone https://github.com/YOUR_GITHUB_USERNAME/vue-select-quantity.git
    cd vue-select-quantity
    npm install (for dependencies)
    npm run dev
