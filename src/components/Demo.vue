<template>
  <div class="box">
    <div>
      <img
        alt="Vue logo"
        src="../assets/logo.png"
      />
    </div>
    <div><h1>VueSelectQuantity - component for vue 2</h1></div>
    <div>Edit <code>components/Demo.vue</code> to test hot module replacement</div>
    <div class="description">
      Using an unordered list tag:
      <br />
      type = 'styled' : 'unstyled'
      <VueSelectQuantity
        @vue-select-quantity:input="handleEvent(`input event`)"
        @vue-select-quantity:delete="handleEvent(`delete event`)"
        @vue-select-quantity:update="handleEvent(`update event`)"
      />
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
    handleEvent (msg) {
      console.log('handleEvent', msg)
    }
  }
};
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
}

.description {
  font-weight: 500;
}
</style>
