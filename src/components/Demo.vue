<template>
  <div class="box">
    <div>
      <img
        alt="Vue logo"
        src="../assets/logo.png"
      />
    </div>
    <div><h1>VueSelectQuantity - component for Vue 2</h1></div>
    <div>Edit <code>components/Demo.vue</code> to test hot module replacement</div>
    <div class="description">
      <div class="list-item">
        <img src="https://dummyimage.com/sqrpop/f1f1f1/39af78.png&text=Sample+Product">
        <VueSelectQuantity
          data-id="0"
          v-model="quantity"
          @update:quantity="quantity = $event"
          @remove:quantity="remove($event)"
        />
        <div>Price: ${{ price }}</div>
        <div>Subtotal ({{ quantity }} items): ${{ quantity * price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSelectQuantity from './VueSelectQuantity.vue'
import '../../dist/style.scss'

export default {
  components: {
    VueSelectQuantity
  },
  data () {
    return {
      quantity: 1,
      price: 100,
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

.box {
  height: 300px;
  width: 100%;
}

.description {
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.list-item {
  border: 2px solid #f2f2f2;
  text-align: center;
}
</style>
