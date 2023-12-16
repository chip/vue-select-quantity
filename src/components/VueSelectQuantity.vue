<template>
  <form class="vue-select-quantity" tabindex="0" @keyup="handleKeyUp">
    <div v-if="showInput">
      <input
        :value="quantity"
        @input.prevent="quantity = $event.target.value"
        size="5"
        class="input"
      >
      <a type="button" class="update" @click="update">Update</a>
      <a type="button" class="cancel" @click="showInput = false">Cancel</a>
    </div>
    <div v-else>
      <div v-if="showList" class="select">
        <ul @click="select($event)" class="optList">
          <li
            v-for="option in options"
            :key="option.key"
            :data-item="option.key"
            class="option"
            :class="quantity === option.key ? 'selected' : ''"
          >
            {{ option.label }}
          </li>
        </ul>
      </div>
      <div v-else class="select">
        <ul class="optList">
          <li @click="showList = true">Qty: {{ quantity }}</li>
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
  created () {
    //     select.addEventListener("focus", (event) => {
    //     select.addEventListener("blur", (event) => {
    //     select.addEventListener("keyup", (event) => {
    //       // deactivate on keyup of `esc`
    //       if (event.key === "Escape") {
    //         this.deactivateSelect(select)
    //       }
    //     })
    //   })
    // })
  },
  methods: {
    select: function (evt) {
      console.log('select', evt)
      this.showList = false

      const { target } = evt
      console.log('target', target)
      if (target) {
        let attr = target.getAttribute('data-item')
        console.log('attr', attr)
        if (attr) {
          this.quantity = parseInt(attr)
        }
      }
      console.log('this.quantity', this.quantity)
      if (this.quantity === 10) {
        this.showInput = true
      } else {
        if (this.quantity === 0) {
          let id = null
          if (this.$attrs && this.$attrs['data-id']) {
            id = this.$attrs['data-id']
          }
          console.log('id', id)
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
    handleKeyUp: function (event) {
      if (event.key === "Escape") {
        this.showInput = false
        this.showList = false
      }
    }
  }
}
</script>
