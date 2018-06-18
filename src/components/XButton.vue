<template lang="pug">
  input.button(type="button", value="Submit" :class="buttonClasses", @click="buttonClick")
</template>

<script>
export default {
  name: 'x-button',
  props: {
    template: {
      type: String,
      required: false
    },
    link: {
      type: String,
      required: false
    }
  },
  methods: {
    buttonClick () {
      if (this.link && this.link != 'back') {
        this.$router.push({ name : this.link })
      } else if ( this.link && this.link == 'back' ) {
        this.$router.go(-1)
      }
    }
  },
  computed: {
    buttonClasses () {
      return {
        'primary': this.template == 'primary',
        'outline': this.template == 'outline'
      }
    }
  }
}
</script>

<style lang="stylus">
.button
  flex 1
  cursor pointer
  padding 10px
  border 2px solid transparent
  font-size 15px
  font-weight 600
  color #222
  border-radius 5px
  text-align center
  text-decoration none
  transition all .25s ease

  &:hover
    background-color #ccc

  &.primary
    background-color #7226EA
    color white

    &:hover
      background-color #5f16d2

  &.outline
    background-color transparent
    border-color #222
    color #222

    &:hover
      background-color #222
      color white

  &.disabled
    pointer-events none
    border-color transparent
    color #777
    background-color #ddd
</style>
