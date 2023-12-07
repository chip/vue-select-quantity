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
  created () {
    if (this.value) {
      this.quantity = this.value
    }
  },
  data () {
    return {
      quantity: 0
    }
  },
  methods: {
    cancel () {
      console.log('cancel')
      this.$emit("vue-select-quantity:cancel")
    },
    update () {
      console.log('update', this.quantity)
      this.$emit("vue-select-quantity:update", this.quantity)
    }
  }
}
</script>
<style scoped>
.vsc-text-input {
  border: 0.12em solid rgb(208, 211, 211);
  border-radius: 6px;
  transition: 200ms box-shadow ease-in-out;
  padding-left: 8px;
}

.vsc-text-input:focus {
  outline: 0.36em solid rgb(197, 240, 248);
  border: 0.12em solid rgb(25, 100, 120);
}

.vsc-button {
  border: 1px solid rgb(245, 196, 48);
  background-color: rgb(255, 211, 55);
  border-radius: 6px;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  font-weight: 300;
  padding: 6px 4px;
  margin-left: 6px;
}

.vsc-button:hover {
  background-color: rgb(245, 196, 48);
}

.vsc-cancel {
  padding-left: 8px; 
}
</style>
