<template>
  <div>

    <h1>VueSelectQuantity - component for vue 2</h1>

    <p align="center">
      Edit <code>components/Demo.vue</code> to test hot module replacement
    </p>

    <div class="center">
      <div>
        <div class="box">
          <p class="description">Using an unordered list tag: </p>
        </div>
        <div class="box">
          <VueSelectQuantity
            @vue-select-quantity:change="() => console.log('list component recd vue-select-quantity:change event')"
            @vue-select-quantity:update="() => console.log('list component recd vue-select-quantity:update event')"
            @vue-select-quantity:delete="() => console.log('list component recd vue-select-quantity:delete event')"
          />
        </div>
      </div>
      <div>
        <div class="box">
          <p class="description">Using a select tag: </p>
        </div>
        <div class="box">
          <VueSelectQuantity
            display="select"
            @vue-select-quantity:change="() => console.log('select component recd vue-select-quantity:change event')"
            @vue-select-quantity:update="() => console.log('select component recd vue-select-quantity:update event')"
            @vue-select-quantity:delete="() => console.log('select component recd vue-select-quantity:delete event')"
          />
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
