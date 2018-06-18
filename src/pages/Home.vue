<template lang="pug">
  #home
    .main
      h2.title Olá&nbsp;
        span.user-name Ailton
        span , seja bem-vindo
      h4.subtitle Aqui estão todas as apostas
      .bets
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
  components: { Bet, Classification }
}
</script>

<style scoped lang="stylus">

#home
  flex 1
  display flex
  justify-content space-between

  .main
    flex .68
    display flex
    flex-direction column
    flex-wrap wrap

    .title
      font-size 30px
      font-weight 500
      color #333
      margin 10px 0 5px

      .user-name
        color #7226EA
        font-weight 600

    .subtitle
      font-size 20px
      font-weight 400
      color #777
      margin 0 0 30px

    .bets
      display flex
      flex-wrap wrap

      .wrap-bet
        width 50%
        padding 0 0 30px
        box-sizing border-box

        &:nth-child(even)
          padding-left 30px

  .sidebar
    flex .29

</style>
