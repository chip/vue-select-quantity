<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>VueSelectQuantity - component for Vue 2</h1>
    <div class="edit">Edit <code>components/Demo.vue</code> to test hot module replacement</div>
    <!-- src="https://placehold.co/500x200/39af73/FFF?font=Montserrat&text=Sample\nProduct" -->
    <img
      class="image"
      src="/product.svg"
    >
    <div class="main">
      <div class="container">
        <div class="component">
          <VueSelectQuantity
            data-id="0"
            v-model="quantity"
            @update:quantity="quantity = $event"
            @remove:quantity="remove($event)"
          />
        </div>
        <div class="price-label">Price</div>
        <div class="price-amount">${{ price }}</div>
        <div class="total-label">Order total</div>
        <div class="total-amount">
          ${{ quantity * price }} ({{ quantity }} {{ quantity === 1 ? 'item' : 'items' }})
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSelectQuantity from './VueSelectQuantity.vue'
// import '../../dist/style.scss'
import '../../public/style.scss'

export default {
  components: {
    VueSelectQuantity
  },
  data () {
    return {
      quantity: 1,
      price: 100
    }
  },
  methods: {
    remove (evt) {
      console.log('remove', evt)
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../public/colors";
@import "../../public/demo";
</style>
