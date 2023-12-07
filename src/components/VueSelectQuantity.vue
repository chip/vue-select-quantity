<template>
  <div>
    <div v-if="showInput">
      <InputQuantity
        v-model="quantity"
        @vue-select-quantity:update="update"
        @vue-select-quantity:cancel="showInput = false"
      />
    </div>
    <div v-else>
      <ListQuantity
        :quantity="quantity"
        @vue-select-quantity:show-input="showInput = true"
      />
    </div>
    <div>
      quantity: {{ quantity }}
    </div>
  </div>
</template>
<script>
import InputQuantity from './InputQuantity.vue'
import ListQuantity from './ListQuantity.vue'
import '../../public/vue-select-quantity.css'

export default {
  name: 'VueSelectQuantity',
  components: {
    InputQuantity,
    ListQuantity
  },
  data () {
    return {
      quantity: 1,
      showInput: false,
      showList: false
    }
  },
  methods: {
    update: function () {
      console.log('update quantity', this.quantity)
    }
  }
}
</script>
