<template lang="pug">
  #home
    .main
      .wrap-bet
        bet
      .wrap-bet
        bet
      .wrap-bet
        bet
      .wrap-bet
        bet
    .sidebar
      classification
</template>

<script>
import Bet from '@/components/Bet'
import Classification from '@/components/Classification'

export default {
  name: 'home',
  components: { Bet, Classification },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="stylus">
#home
  flex 1
  display flex
  justify-content space-between

  .main
    flex .69
    display flex
    flex-wrap wrap

    .wrap-bet
      width 50%
      padding 0 0 15px
      box-sizing border-box

      &:nth-child(even)
        padding-left 15px

  .sidebar
    flex .29

</style>
