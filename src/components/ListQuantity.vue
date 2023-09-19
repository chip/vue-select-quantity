<template>
  <div v-if="showInput">
    <InputQuantity @vue-select-quantity:cancel="showInput = false" />
  </div>
  <div v-else>
    <ul v-if="showList" @click="handleListSelection($event.target)">
      <li :class="quantity === 0 ?  'selected' : ''" id="li-0">0 (Delete)</li>
      <li :class="quantity === 1 ?  'selected' : ''" id="li-1">1</li>
      <li :class="quantity === 2 ?  'selected' : ''" id="li-2">2</li>
      <li :class="quantity === 3 ?  'selected' : ''" id="li-3">3</li>
      <li :class="quantity === 4 ?  'selected' : ''" id="li-4">4</li>
      <li :class="quantity === 5 ?  'selected' : ''" id="li-5">5</li>
      <li :class="quantity === 6 ?  'selected' : ''" id="li-6">6</li>
      <li :class="quantity === 7 ?  'selected' : ''" id="li-7">7</li>
      <li :class="quantity === 8 ?  'selected' : ''" id="li-8">8</li>
      <li :class="quantity === 9 ?  'selected' : ''" id="li-9">9</li>
      <li :class="quantity === 10 ? 'selected' : ''" id="li-10">10+</li>
    </ul>
    <ul v-else>
      <li @click="showList = true">Qty: {{ quantity }}</li>
    </ul>
  </div>
</template>
<script>
import InputQuantity from './InputQuantity.vue'

export default {
  name: 'ListQuantity',
  components: {
    InputQuantity
  },
  data () {
    return {
      quantity: 1,
      showInput: false,
      showList: false
    }
  },
  methods: {
    handleListSelection (target) {
      console.log('handleListSelection', target)
      this.quantity = parseInt(target.id.replace(/li-/, ''))
      this.showList = false
    }
  }
}
</script>
<style scoped>
ul {
  font-size: 1.125em;
  border-top: 1px solid rgb(208, 211, 212);
  border-right: 1px solid rgb(208, 211, 212);
  border-bottom: 1px solid rgb(208, 211, 212);
  border-left: 1px solid rgb(208, 211, 212);
  background-color: white;
  border-radius: 6px;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  padding: 1px 0;
  color: #000;
  width: 6em;
}

ul li {
  list-style: none;
  border-top: 1px solid rgb(255, 255, 255);
  border-right: 1px solid rgb(255, 255, 255);
  border-bottom: 1px solid rgb(255, 255, 255);
  border-left: 1px solid rgb(255, 255, 255);
  background-color: white;
  color: #000;
  font-weight: 500;
  padding: 5px 0 5px 12px;
  text-align: left;
}

ul li:first-child {
  margin-top: 5px;
}

ul li:last-child {
  margin-bottom: 5px;
}

ul li:hover {
  border-top: 1px solid rgb(208, 211, 212);
  border-right: 1px solid rgb(238, 240, 240);
  border-bottom: 1px solid rgb(208, 211, 212);
  border-left: 1px solid rgb(238, 240, 240);
  background-color: rgb(238, 240, 240);
}

ul li:first-child:hover {
  border-top: 1px solid rgb(208, 211, 212);
}

ul li:last-child:hover {
  border-bottom: 1px solid rgb(208, 211, 212);
}

ul li.selected {
  border: 1px solid rgb(61, 163, 165);
  background-color: rgb(236, 252, 255);
}

ul li.selected:hover {
  background-color: rgb(238, 240, 240);
}

#li-9:hover  {
  border-bottom: 1px solid rgb(238, 240, 240);
  background-color: rgb(238, 240, 240);
}

#li-10  {
  border-top: 1px solid rgb(208, 211, 212);
}

</style>
