<template>
  <div v-if="showInput">
    <InputQuantity @vue-select-quantity:cancel="showInput = false" :value="quantity" />
  </div>
  <div v-else>
    <select
      v-model="quantity"
      @change="handleChange($event.target.value)"
      class="custom-select"
    >
      <option disabled value="">Please select quantity</option>
      <option v-for="(n, index) in Array(11).keys()"
        :key="index"
        :data-qty="n"
      >
        <span v-if="n === 0">{{n}} (Delete)</span>
        <span v-else>{{ n !== 10 ? n : `${n}+` }}</span>
      </option>
    </select>
  </div>
</template>
<script>
import InputQuantity from './InputQuantity.vue'

export default {
  name: 'SelectQuantity',
  props: {
    handleChange: { type: Function }
  },
  components: {
    InputQuantity
  },
  data () {
    return {
      quantity: 1,
      showInput: false
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

