<template>
  <div>

    <h1>VueSelectQuantity - component for vue 2</h1>

    <p align="center">
      Edit
      <code>components/Demo.vue</code> or
      <code>components/VueSelectQuantity.vue</code>
      to test hot module replacement
    </p>

    <div class="center">
      <div>
        <div class="box">
          <p class="description">Using an unordered list tag: </p>
        </div>
        <div class="box">
          <VueSelectQuantity @vue-select-quantity:change="handleChange('list component')" />
        </div>
      </div>
      <div>
        <div class="box">
          <p class="description">Using a select tag: </p>
        </div>
        <div class="box">
          <VueSelectQuantity @vue-select-quantity:change="handleChange('select component')" display="select" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSelectQuantity from './VueSelectQuantity.vue'

export default {
  components: {
    VueSelectQuantity
  },
  methods: {
    handleChange (msg) {
      console.log('Demo.vue change msg', msg)
    }
  }
};
</script>

<style scoped>
a {
  color: #42b983;
}

.description {
  font-weight: 500;
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
