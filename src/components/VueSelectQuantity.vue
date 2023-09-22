<template>
  <div v-if="showInput">
    <InputQuantity v-model="quantity" />
    <a href="#" class="vue-select-quantity-cancel" @click="showInput = false">Cancel</a>
  </div>
  <div v-else>
    <div data-id="0" @click="handleData($event.target)">psst</div>
    <div v-if="showList">
      <ul class="vue-select-quantity" @click="handleListSelection($event.target)">
        <li
          v-for="(n, index) in Array(11).keys()"
          :key="index"
          :data-id="n"
          :class="cssClass(n)"
        >
          <span>{{ handleData(n) }}</span>
          <!-- <span v-if="n === 0">{{n}} (Delete)</span> -->
          <!-- <span v-else>{{ n !== 10 ? n : `${n}+` }}</span> -->
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
  name: 'VueSelectQuantity',
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
    handleData: function (value) {
      console.log('handleData', value)
      return value
    },
    handleListSelection: function (target) {
      console.log('handleListSelection', target.dataset)
      if (target) {
        // let attr = target.getAttribute('data-qty')
        let attr = target.getAttribute('data-id')
        console.log('handleListSelection attr', attr)
        if (attr) {
          this.quantity = parseInt(attr)
        }
      }
      if (this.quantity === 10) {
        this.showInput = true
        this.showList = false
      } else {
        if (this.quantity === 0) {
          console.log('here')
          this.$emit('vue-select-quantity:delete')
        } else {
          this.$emit('vue-select-quantity:change', this.quantity)
        }
      }
    },
    cssClass: function (n) {
      let classes = []
      if (this.quantity === n) {
        classes.push('selected')
      }
      if (n === 9 || n === 10) {
        classes.push(n === 9 ? 'border-bottom-9' : 'border-top-10')
      }
      return classes
    }
  }
}
</script>
<style scoped>
ul.vue-select-quantity {
  font-size: 1.2rem;
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

ul.vue-select-quantity li {
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

ul.vue-select-quantity li:first-child {
  margin-top: 5px;
}

ul.vue-select-quantity li:last-child {
  margin-bottom: 5px;
}

ul.vue-select-quantity li:hover {
  border-top: 1px solid rgb(208, 211, 212);
  border-right: 1px solid rgb(238, 240, 240);
  border-bottom: 1px solid rgb(208, 211, 212);
  border-left: 1px solid rgb(238, 240, 240);
  background-color: rgb(238, 240, 240);
}

ul.vue-select-quantity li:first-child:hover {
  border-top: 1px solid rgb(208, 211, 212);
}

ul.vue-select-quantity li:last-child:hover {
  border-bottom: 1px solid rgb(208, 211, 212);
}

ul.vue-select-quantity li.selected {
  border: 1px solid rgb(61, 163, 165);
  background-color: rgb(236, 252, 255);
}

ul.vue-select-quantity li.selected:hover {
  background-color: rgb(238, 240, 240);
}

ul.vue-select-quantity li.border-bottom-9:hover {
  border-bottom: 1px solid rgb(238, 240, 240);
  background-color: rgb(238, 240, 240);
}

ul.vue-select-quantity li.border-top-10 {
  border-top: 1px solid rgb(208, 211, 212);
}

.vue-select-quantity-cancel {
  padding-left: 8px;
}
</style>
