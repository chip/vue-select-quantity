<template>
  <div v-if="showInput">
    <InputQuantity @vue-select-quantity:cancel="showInput = false" />
  </div>
  <div v-else>
    <select
      v-model="quantity"
      @change="handleSelectChange($event.target.value)"
      class="custom-select"
    >
      <option disabled value="">Please select quantity</option>
      <option value="0">0 (Delete)</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10+</option>
    </select>
  </div>
</template>
<script>
import InputQuantity from './InputQuantity.vue'

export default {
  name: 'SelectQuantity',
  components: {
    InputQuantity
  },
  data () {
    return {
      quantity: 1,
      showInput: true
    }
  },
  methods: {
    handleSelectChange (value) {
      console.log('handleSelectChange', value)
      console.log('handleSelectChange quantity', this.quantity)
      if (value === "0") {
        console.log('got zero')
        this.$emit("vue-select-quantity:delete")
      } else if (value === "10") {
        console.log('got 10')
        this.showInput = true
      } else {
        console.log('got else')
        this.$emit("vue-select-quantity:update", this.quantity)
      }
    }
  }
}
</script>
<style scoped>
.custom-select {
  position: relative;
  display: inline-block;
}

.custom-select select {
  appearance: none;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: transparent;
  color: #333;
  width: 100px;
  cursor: pointer;
}

.custom-select::after {
  content: '\25BC';
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
}

.custom-select select option {
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  padding: 5px;
}

.custom-select select option:hover {
  background-color: #f0f0f0;
}
</style>

