<template>
  <div class="vue-select-quantity-container">
    <div v-if="showInput">
      <input
        :value="quantity"
        @input.prevent="quantity = $event.target.value"
        size="5"
        class="vue-select-quantity-text-input"
      >
      <a type="button" class="vue-select-quantity-button" @click="update">Update</a>
      <a type="button" class="vue-select-quantity-cancel" @click="showInput = false">Cancel</a>
    </div>
    <div v-else>
      <div class="vue-select-quantity">
        <div v-if="showList">
          <ul @click="select($event)">
            <li
              v-for="(n, index) in Array(11).keys()"
              :key="index"
              :data-item="n"
              :class="css(n)"
            >
              {{ label(n) }}
            </li>
          </ul>
        </div>
        <div v-else>
          <ul>
            <li @click="showList = true">Qty: {{ quantity }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'VueSelectQuantity',
  props: {
    value: {
      required: true,
      type: Number
    }
  },
  data () {
    return {
      quantity: this.$props.value,
      showInput: false,
      showList: false
    }
  },
  methods: {
    select: function (evt) {
      this.showList = false

      const { target } = evt
      if (target) {
        let attr = target.getAttribute('data-item')
        if (attr) {
          this.quantity = parseInt(attr)
        }
      }
      if (this.quantity === 10) {
        this.showInput = true
      } else {
        if (this.quantity === 0) {
          let id = null
          if (this.$attrs && this.$attrs['data-id']) {
            id = this.$attrs['data-id']
          }
          this.$emit('update:quantity', this.quantity)
          this.$emit('remove:quantity', id)
        } else {
          this.$emit('update:quantity', this.quantity)
        }
      }
    },
    update: function () {
      if (this.quantity) {
        this.$emit('update:quantity', Number(this.quantity))
        console.log('update', this.quantity)
        this.showInput = false
        this.showList = false
      }
    },
    label: function (n) {
      if (n === 0) {
        return '0 (Delete)'
      } else if (n === 10) {
        return '10+'
      }
      return `${n}`
    },
    css: function (n) {
      let classes = []
      if (this.quantity === n) {
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
