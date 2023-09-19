<template>
  <div>

    <h1>VueSelectQuantity - component for vue 2</h1>

    <p align="center">
      Edit
      <code>components/Demo.vue</code> or
      <code>components/VueSelectQuantity.vue</code>
      to test hot module replacement
    </p>

    <VueSelectQuantity
      @vue-select-quantity:change="() => change('change detected')"
    />
  </div>
</template>

<script>
import VueSelectQuantity from './VueSelectQuantity.vue'

export default {
  components: {
    VueSelectQuantity
  },
  methods: {
    change (msg) {
      console.log(msg)
    }
  }
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
