<template lang="pug">
  input.text-field(@input="$emit('onSelectDate', $event.target.value)")
</template>

<script>
export default {
  name: 'text-field',
}
</script>

<style scoped lang="stylus">
.text-field
  font-size 16px
  color #555
  padding 12px
  margin 5px 0
  border solid 2px #f1f1f1
  border-radius 5px
  outline 0
  transition all .25s ease

  &:focus
    border-color #7226EA
</style>
