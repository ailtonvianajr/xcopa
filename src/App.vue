<template lang="pug">
  #app
    nav-bar
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
#app
  display flex
  font-family 'Roboto', Helvetica, Arial, sans-serif
</style>
