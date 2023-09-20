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
    handleChange (value) {
      console.log('handleSelectChange', value)
      console.log('handleSelectChange quantity', this.quantity)
      if (value === "0") {
        console.log('got zero')
        this.$emit("vue-select-quantity:delete")
      } else if (value === "10") {
        console.log('got 10')
        this.showInput = true
      } else {
        console.log('got else')
        this.$emit("vue-select-quantity:update", this.quantity)
      }
    }
  }
}
</script>
