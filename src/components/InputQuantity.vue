<template>
  <div>
    <input
      :value="quantity"
      @input.prevent="$emit('vue-select-quantity:input', $event.target.value)"
      size="5"
      class="vue-select-quantity-text-input"
    >
    <a type="button" class="vue-select-quantity-button" @click="$emit('vue-select-quantity:update', quantity)">Update</a>
    <a type="button" class="vue-select-quantity-cancel" @click="$emit('vue-select-quantity:cancel')">Cancel</a>
  </div>
</template>
<script>
export default {
  name: 'InputQuantity',
  props: {
    value: { type: Number, default: 0 }
  },
  data () {
    return {
      quantity: this.value
    }
  }
}
</script>
