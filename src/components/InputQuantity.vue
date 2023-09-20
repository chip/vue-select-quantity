<template>
  <div>
    <input type="text" v-model="quantity" value="this.quantity" defaultValue="0" size="5" class="vsc-text-input" />
    <button type="button" class="vsc-button" @click="update">Update</button>
    <a href="#" class="vsc-cancel" @click="cancel">Cancel</a>
  </div>
</template>
<script>
export default {
  name: 'InputQuantity',
  props: ['quantity'],
  methods: {
    cancel () {
      console.log('cancel')
      this.$emit("vue-select-quantity:cancel")
    },
    update () {
      console.log('update', this.quantity)
      this.$emit("vue-select-quantity:update", this.quantity)
    }
  }
}
</script>
<style scoped>
.vsc-text-input {
  border: 0.12em solid rgb(208, 211, 211);
  border-radius: 6px;
  transition: 200ms box-shadow ease-in-out;
  padding-left: 8px;
}

.vsc-text-input:focus {
  outline: 0.36em solid rgb(197, 240, 248);
  border: 0.12em solid rgb(25, 100, 120);
}

.vsc-button {
  border: 1px solid rgb(245, 196, 48);
  background-color: rgb(255, 211, 55);
  border-radius: 6px;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  font-weight: 300;
  padding: 6px 4px;
  margin-left: 6px;
}

.vsc-button:hover {
  background-color: rgb(245, 196, 48);
}

.vsc-cancel {
  padding-left: 8px; 
}
</style>
