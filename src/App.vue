<template lang="pug">
  #app
    nav-bar
    .content
      router-view
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: { NavBar }
}
</script>

<style lang="stylus">
body
  margin 0
  padding 0
  background-color #f9f9f9

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
