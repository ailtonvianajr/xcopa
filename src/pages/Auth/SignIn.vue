<template lang="pug">
  #sign-in
    .main
      h2.title Entrar
      form.form
</template>

<script>
import Bet from '@/components/Bet'
import Classification from '@/components/Classification'

export default {
  name: 'SignIn',
  components: { Bet, Classification }
}
</script>

<style scoped lang="stylus">

#sign-in
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  flex 1
  display flex
  justify-content center
  align-items center
  background-color #7226ea

  .main
    display flex
    flex-direction column
    flex-wrap wrap
    background-color white

</style>
