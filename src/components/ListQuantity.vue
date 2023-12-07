<template>
  <div class="vue-select-quantity">
    <div v-if="showList">
      <ul @click="handleListSelection($event)">
        <li
          v-for="(n, index) in Array(11).keys()"
          :key="index"
          :data-item="n"
          :class="cssClass(n)"
        >
          {{ itemLabel(n) }}
        </li>
      </ul>
    </div>
    <div v-else>
      <ul>
        <li @click="showList = true">Qty: {{ qty }}</li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ListQuantity',
  props: {
    quantity: { type: Number, default: 1 }
  },
  data () {
    return {
      qty: this.quantity,
      showList: false
    }
  },
  methods: {
    itemLabel: function (n) {
      if (n === 0) {
        return '0 (Delete)'
      } else if (n === 10) {
        return '10+'
      }
      return `${n}`
    },
    handleListSelection: function (evt) {
      const { target } = evt
      if (target) {
        let attr = target.getAttribute('data-item')
        console.log('attr', attr)
        if (attr) {
          this.qty = parseInt(attr)
        }
      }
      if (this.qty === 10) {
        // this.showInput = true
        console.log('vue-select-quantity:show-input')
        this.$emit('vue-select-quantity:show-input')
        this.showList = false
      } else {
        if (this.qty === 0) {
          console.log('vue-select-quantity:delete')
          this.$emit('vue-select-quantity:delete')
        } else {
          console.log('vue-select-quantity:change', this.qty)
          this.$emit('vue-select-quantity:change', this.qty)
        }
      }
    },
    cssClass: function (n) {
      let classes = []
      if (this.qty === n) {
        classes.push('selected')
      }
      if (n === 9 || n === 10) {
        classes.push(n === 9 ? 'border-bottom-9' : 'border-top-10')
      }
      return classes
    }
  }
}
</script>
