<template>
  <div>
    <div v-if="showInput">
      <input type="number" v-model="quantity" />
      <button type="button" @click="handleSubmit">Update</button>
      &nbsp; <a href="#" @click="handleCancel">Cancel</a>
    </div>
    <div v-else>
      <select v-model="quantity" @change="handleChange($event.target.value)">
        <option disabled value="">Please select quantity</option>
        <option value="0">Qty: 0 (Delete)</option>
        <option value="1">Qty: 1</option>
        <option value="2">Qty: 2</option>
        <option value="3">Qty: 3</option>
        <option value="4">Qty: 4</option>
        <option value="5">Qty: 5</option>
        <option value="6">Qty: 6</option>
        <option value="7">Qty: 7</option>
        <option value="8">Qty: 8</option>
        <option value="9">Qty: 9</option>
        <option value="10+">Qty: 10+</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VueSelectQuantity',
  data () {
    return {
      showInput: false,
      quantity: ""
    }
  },
  methods: {
    handleCancel () {
      console.log('handleCancel')
      this.showInput = false
      this.quantity = null
    },
    handleSubmit () {
      console.log('handleSubmit', this.quantity)
      this.$emit("vue-select-quantity:update", this.quantity)
    },
    handleChange (value) {
      console.log('handleChange', value)
      if (value === "0") {
        console.log('got zero')
        this.$emit("vue-select-quantity:delete")
      } else if (value === "10+") {
        console.log('got 10+')
        this.showInput = true
      } else {
        console.log('got else')
        this.$emit("vue-select-quantity:update", this.quantity)
      }
    }
  }
}
</script>
