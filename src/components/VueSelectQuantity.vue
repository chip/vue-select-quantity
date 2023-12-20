<template>
  <form
    class="vue-select-quantity"
    tabindex="0"
    @keyup="handleKeyUp"
  >
    <div v-if="showInput">
      <input
        :value="quantity"
        @input.prevent="quantity = $event.target.value"
        size="5"
        class="input"
        tabindex="1"
      >
      <a type="button" class="update" @click="update">Update</a>
      <a type="button" class="cancel" @click="showInput = false">Cancel</a>
    </div>
    <div v-else>
      <div v-if="showList" class="select" role="listbox">
        <ul
          class="opt-list"
          tabindex="1"
          role="presentation"
        >
          <li
            v-for="option in options"
            :key="option.key"
            :data-item="option.key"
            :class="itemClass(option)"
            :aria-selected="option.key == quantity"
            role="option"
            @click="select($event, 'item click')"
          >
            {{ option.label }}
          </li>
        </ul>
      </div>
      <div v-else class="select" role="listbox">
        <ul
          class="opt-list highlight"
          role="presentation"
        >
          <li
            @click="open()"
            role="option"
          >
            Qty: {{ quantity }}
            <span class="down-arrow">⌄</span>
          </li>
        </ul>
      </div>
    </div>
  </form>
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
      showList: false,
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
      this.showList = true
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
    select: function (evt, label) {
      this.showList = false

      let value = this.getDataItem(evt)
      if (value) {
        this.quantity = parseInt(value)
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
    handleKeyUp: function (evt) {
      if (evt.key === "Escape") {
        this.showInput = false
        this.showList = false
      }
    },
    itemClass: function (option) {
      let selector = []
      if (option.key === this.quantity) {
        selector.push('selected')
      }
      if (option.key === 10) {
        selector.push('ten')
      }
      return selector
    }
  }
}
</script>
