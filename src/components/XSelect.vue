<template lang="pug">
  select.select(@input="setSelection($event.target.value)")
    option(v-for="option in options",
      :index="option.id",
      :value="option.id") {{ option.name }}
</template>

<script>
export default {
  name: 'x-select',
  data: () => ({
    selected: { }
  }),
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    buttonClick () {
      if (this.link && this.link != 'back') {
        this.$router.push({ name : this.link })
      } else if ( this.link && this.link == 'back' ) {
        this.$router.go(-1)
      }
    },
    setSelection(id) {
      this.$emit('onSelect', this.options.find(team => team.id == id))
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

<style scoped lang="stylus">
.select
  cursor pointer
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
