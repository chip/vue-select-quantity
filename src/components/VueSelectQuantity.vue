<template>
  <div class="center">
    <div v-if="showInput">
      <input type="number" v-model="quantity" />
      <button type="button" @click="handleSubmit">Update</button>
      &nbsp; <a href="#" @click="handleCancel">Cancel</a>
    </div>
    <div v-else>
      <div class="box">
        <p class="description">Using an unordered list tag: </p>
      </div>
      <div class="box">
        <ul v-if="showList" ref="list" @click="handleListSelection($event.target)">
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
        <ul v-if="!showList">
          <li @click="showList = true">Qty: {{ quantity }}</li>
        </ul>
      </div>

      <div class="box">
        <p class="description">Using a select tag: </p>
      </div>
      <div class="box">
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
          <option value="10+">10+</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'VueSelectQuantity',
  data () {
    return {
      showInput: false,
      quantity: 1,
      showList: false
    }
  },
  methods: {
    handleCancel () {
      console.log('handleCancel')
      this.showInput = false
    },
    handleSubmit () {
      console.log('handleSubmit', this.quantity)
      this.$emit("vue-select-quantity:update", this.quantity)
    },
    handleListSelection (target) {
      this.quantity = parseInt(target.id.replace(/li-/, ''))
      this.showList = false
    },
    handleSelectChange (value) {
      console.log('handleSelectChange', value)
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

  <!-- .custom-select { -->
  <!--   position: relative; -->
  <!--   display: inline-block; -->
  <!-- } -->
  <!---->
  <!-- .custom-select select { -->
  <!--   appearance: none; -->
  <!--   padding: 10px; -->
  <!--   font-size: 16px; -->
  <!--   border: 1px solid #ccc; -->
  <!--   border-radius: 5px; -->
  <!--   background-color: transparent; -->
  <!--   color: #333; -->
  <!--   width: 100px; -->
  <!--   cursor: pointer; -->
  <!-- } -->
  <!---->
  <!-- .custom-select::after { -->
  <!--   content: '\25BC'; -->
  <!--   position: absolute; -->
  <!--   top: 50%; -->
  <!--   right: 10px; -->
  <!--   transform: translateY(-50%); -->
  <!--   pointer-events: none; -->
  <!-- } -->
  <!---->
  <!-- .custom-select select option { -->
  <!--   background-color: #fff; -->
  <!--   color: #333; -->
  <!--   border: 1px solid #ccc; -->
  <!--   padding: 5px; -->
  <!-- } -->
  <!---->
  <!-- .custom-select select option:hover { -->
  <!--   background-color: #f0f0f0; -->
  <!-- } -->

<style scoped>
.description {
  font-weight: 500;
}

#li-9:hover  {
  border-bottom: 1px solid rgb(238, 240, 240);
  background-color: rgb(238, 240, 240);
}

#li-10  {
  border-top: 1px solid rgb(208, 211, 212);
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
}

ul {
  font-size: 14px;
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
</style>
