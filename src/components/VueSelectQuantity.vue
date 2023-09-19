<template>
  <div v-if="display === 'list'">
    <ListQuantity />
  </div>
  <div v-else>
    <SelectQuantity />
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
  }
}
</script>
