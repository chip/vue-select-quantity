<template>
  <div v-if="showInput">
    <InputQuantity @vue-select-quantity:cancel="showInput = false" :value="quantity" />
  </div>
  <div v-else>
    <div v-if="showList">
      <ul @click="handleListSelection($event.target)">
        <li
          v-for="(n, index) in Array(11).keys()"
          :key="index"
          :data-qty="n"
          :class="cssClass(n)">
          <span v-if="n === 0">{{n}} (Delete)</span>
          <span v-else>{{ n !== 10 ? n : `${n}+` }}</span>
        </li>
      </ul>
    </div>
    <div v-else>
      <ul>
        <li @click="showList = true">Qty: {{ quantity }}</li>
      </ul>
    </div>
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
      if (target) {
        let attr = target.getAttribute('data-qty')
        if (attr) {
          this.quantity = parseInt(attr)
        }
      }
      if (this.quantity === 10) {
        this.showInput = true
      }
      this.showList = false
    }
  },
  cssClass (n) {
    classes = []
    if (quantity === n) {
      classes.push('selected')
    }
    if (n === 9 || n === 10) {
      classes.push(n === 9 ? 'li-9' : 'li-10')
    }
    return classes
  }
}
</script>
<style scoped>
ul {
  font-size: 0.8rem;
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
  padding: .2rem 0 .2rem 0.8rem;
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

.li-9:hover  {
  border-bottom: 1px solid rgb(238, 240, 240);
  background-color: rgb(238, 240, 240);
}

.li-10  {
  border-top: 1px solid rgb(208, 211, 212);
}

</style>
