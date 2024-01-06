# VueSelectQuantity component

This Vue 2 component was created for easily specifying a quantity, as is the case in a shopping cart.

![VueSelectQuantity Demo](https://github.com/chip/vue-select-quantity/blob/master/Demo.gif)

## How to install

$```npm install @chipcastle.com/vue-select-quantity```


## Quick start

```javascript
import { VueSelectQuantity } from '@chipcastle.com/vue-select-quantity'
import '@chipcastle.com/vue-select-quantity/dist/style.css'

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
    :value="quantity"
    data-id="vsq-1"
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
        quantity: 1
      }
    },
    methods: {
      update (evt) {
        const { id, qty } = evt
        if (qty) {
          this.quantity = qty
        }
        console.log(`update event received for id ${id} with quantity ${this.quantity}`)
      },
      remove (id) {
        console.log(`remove event received for id ${id}`)
      }
    }
  }
</script>
```

## Props

| Property name | Type | Default | Description |
| ------------- | ---- | ------- | ----------- |
| v-model | Number | null | A required property which represents the quantity to be updated |
| data-id | String | null | A data property to identify the component instance |

## Events

| Event name | Trigger |
| ------------- | ---- |
| update:quantity | Called when the quantity is changed (e.g., 1-9 is selected from the menu, Update button is clicked). Event object sent includes `id` and `qty` properties.|
| remove:quantity | Called when the 0 is selected from the menu) |

## Developers

Fork the project and enter the following commands:

    git clone https://github.com/YOUR_GITHUB_USERNAME/vue-select-quantity.git
    cd vue-select-quantity
    npm install (for dependencies)
    npm run dev
