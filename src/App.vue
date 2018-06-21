<template lang="pug">
  #app
    nav-bar(v-if="false")
    .content
      transition(name="slide-fade", mode="out-in", duration="300")
        router-view(name="auth")
        router-view
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: { NavBar },
  created () {
    console.log(this.$router.history.current.name)
  }
}
</script>

<style lang="stylus">
*
  outline 0

body
  margin 0
  padding 0
  background-color #f9f9f9

.slide-fade-enter-active
  transition all .2s ease

.slide-fade-leave-active
  transition all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.slide-fade-enter,
.slide-fade-leave-to
  opacity 0
  transform translate(0px,40px)

#app
  display flex
  flex-direction column
  font-family 'Roboto', Helvetica, Arial, sans-serif

.content
  width 80%
  align-self center
  display flex
  padding 30px 0
</style>
