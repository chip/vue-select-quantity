<template>
  <div v-if="display === 'list'">
    <ListQuantity @vue-select-quantity:change="change" />
  </div>
  <div v-else>
    <SelectQuantity @vue-select-quantity:change="change" />
  </div>
</template>
<script>
import ListQuantity from './ListQuantity.vue'
import SelectQuantity from './SelectQuantity.vue'

export default {
  name: 'VueSelectQuantity',
  props: {
    display: { type: String, default: 'list' }
  },
  components: {
    ListQuantity,
    SelectQuantity
  },
  data () {
    return {
      showInput: false,
      quantity: 1,
      showList: false
    }
  },
  methods: {
    change (value) {
      console.log('change value', value, 'change quantity', this.quantity)
      if (value === "0") {
        console.log('this.$emit("vue-select-quantity:delete")')
        this.$emit("vue-select-quantity:delete")
      } else if (value === "10") {
        console.log('value === 10 => showInput')
        this.showInput = true
      } else {
        console.log('this.$emit("vue-select-quantity:update")', this.quantity)
        this.$emit("vue-select-quantity:update", this.quantity)
      }
    }
  }
}
</script>
