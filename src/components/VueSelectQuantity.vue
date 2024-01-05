<template>
  <form
    class="vue-select-quantity"
    tabindex="0"
    @keydown.prevent.stop="onKeyDown($event)"
    v-click-outside="onClickOutside"
  >
    <div v-if="showInput" class="input">
      <div class="input-elements">
        <input
          :value="quantity"
          size="3"
          class="text"
          tabindex="1"
        >
        <a type="button" class="update" @click="update">Update</a>
        <a type="button" class="cancel" @click="cancel">Cancel</a>
      </div>
    </div>
    <div v-else>
      <div class="select" role="listbox">
        <ul
          class="opt-list"
          tabindex="1"
          role="presentation"
        >
          <span v-if="showMenu">
            <li
              v-for="option in options"
              :key="option.key"
              :data-item="option.key"
              :class="itemClass(option)"
              :aria-selected="option.key == quantity"
              role="option"
              @click="select($event)"
            >
              {{ option.label }}
            </li>
          </span>
          <span v-else>
            <li
              @click="open()"
              class="option"
              role="option"
            >
              Qty: {{ quantity }}
              <span class="down-arrow">⌄</span>
            </li>
          </span>
        </ul>
      </div>
    </div>
  </form>
</template>
<script>
import vClickOutside from 'v-click-outside'

export default {
  name: 'VueSelectQuantity',
  props: {
    value: {
      required: true,
      type: Number,
      default: 1
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  data () {
    return {
      quantity: this.$props.value,
      showInput: false,
      showMenu: false,
      options: [
        { key: 0, label: '0 (Delete)' },
        { key: 1, label: '1' },
        { key: 2, label: '2' },
        { key: 3, label: '3' },
        { key: 4, label: '4' },
        { key: 5, label: '5' },
        { key: 6, label: '6' },
        { key: 7, label: '7' },
        { key: 8, label: '8' },
        { key: 9, label: '9' },
        { key: 10, label: '10 +' }
      ]
    }
  },
  methods: {
    open: function () {
      this.showMenu = true
      this.showInput = false
    },
    getDataItem: function (evt) {
      const { target } = evt
      if (target) {
        const attr = target.getAttribute('data-item')
        if (attr) {
          return parseInt(attr)
        }
      }
    },
    getDataId: function () {
      let id = null
      if (this.$attrs && this.$attrs['data-id']) {
        id = this.$attrs['data-id']
      }
      return id
    },
    emitUpdate() {
      const obj = {
        id: this.getDataId(),
        qty: Number(this.quantity)
      }
      this.$emit('update:quantity', obj)
    },
    emitRemove() {
      const id = this.getDataId()
      this.$emit('remove:quantity', id)
    },
    select: function (evt) {
      //console.log(evt)
      this.showMenu = false

      let value = this.getDataItem(evt)
      if (!isNaN(value)) {
        this.quantity = parseInt(value)
      }
      // console.log('*quantity', this.quantity)
      if (this.quantity === 10) {
        // console.log('quantity === 10')
        this.showInput = true
      } else {
        this.emitUpdate()
        if (this.quantity === 0) {
          this.emitRemove()
        }
      }
    },
    update: function () {
      if (this.quantity) {
        this.emitUpdate()
        this.showInput = false
        this.showMenu = false
      }
    },
    cancel: function () {
      this.showInput = false
      this.quantity = 1
    },
    label: function (n) {
      if (n === 0) {
        return '0 (Delete)'
      } else if (n === 10) {
        return '10+'
      }
      return `${n}`
    },
    itemClass: function (option) {
      let selector = []
      if (option.key === this.quantity) {
        selector.push('selected')
      }
      if (option.key === 10) {
        selector.push('ten')
      }
      const klass = selector.length > 0 ? selector.join(' ') : 'item'
      return klass
    },
    nonNumeric: function (key) {
      return key.replace(/\D/g, '') === ''
    },
    maxLength: function () {
      return this.quantity.length > 2
    },
    onClickOutside () {
      this.showMenu = false
    },
    onKeyDown: function (evt) {
      if (!evt.key) {
        return
      }
      if (evt.key === "Escape") {
        this.showInput = false
        this.showMenu = false
        return
      }
      if (evt.key === 'Backspace' && evt.target && evt.target.value && evt.target.value.length >= 1) {
        const { value } = evt.target
        this.quantity = value.substring(0, value.length - 1)
        return
      }
      if (this.nonNumeric(evt.key)) {
        return
      }
      if (this.maxLength()) {
        return
      }
      if (evt.target) {
        const quantity = evt.target.value + evt.key

        const re = new RegExp(/^[1-9]/)
        if (quantity.match(re)) {
          this.quantity = evt.target.value = quantity
        }
      }
    }
  }
}
</script>
<style scoped>
@import "../../dist/style.css"
</style>
