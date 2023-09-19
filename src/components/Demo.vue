<template>
  <div>

    <h1>{{ msg }}</h1>

    <p>
      <a
        href="https://vitejs.dev/guide/features.html"
        target="_blank"
      >Vite Documentation</a> |
      <a
        href="https://vuejs.org/v2/guide/"
        target="_blank"
      >Vue 2 Documentation</a>
    </p>

    <p>
      Edit these components to test hot module replacement:

      <ul>
        <li><code>components/Demo.vue</code></li>
        <li><code>components/VueSelectQuantity.vue</code></li>
      </ul>
    </p>

    <h2>VueSelectQuantity component:</h2>
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
