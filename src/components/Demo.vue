<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>VueSelectQuantity - component for Vue 2</h1>
    <!-- src="https://placehold.co/500x200/39af73/FFF?font=Montserrat&text=Sample\nProduct" -->
    <img
      class="image"
      src="/product.svg"
    >
    <div class="main">
      <div class="container">
        <div class="component">
          <VueSelectQuantity
            data-id="vsq-1"
            :value="quantity"
            @update:quantity="update($event)"
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
    <div style="color: red; padding-top: 10px;">
      {{ message }}
    </div>
  </div>
</template>

<script>
import VueSelectQuantity from './VueSelectQuantity.vue'
// import '@dist/style.css'

export default {
  components: { VueSelectQuantity },
  data () {
    return {
      quantity: 1,
      price: 100,
      message: ''
    }
  },
  methods: {
    update (evt) {
      const { id, qty } = evt
      if (qty) {
        this.quantity = qty
      }
      this.message = `update event received for id ${id} with quantity ${this.quantity}`
    },
    remove (id) {
      this.message = `remove event received for id ${id}`
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@assets/scss/demo.scss";
</style>
