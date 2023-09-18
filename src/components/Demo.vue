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

    <button @click="count++">count is: {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>

    VueSelectQuantity:
    <VueSelectQuantity
      @vue-select-quantity:change="() => change('change detected')"
    />
  </div>
</template>

<script>
import VueSelectQuantity from './VueSelectQuantity.vue'

export default {
  components: {
    // HelloWorld,
    VueSelectQuantity
  },
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
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
