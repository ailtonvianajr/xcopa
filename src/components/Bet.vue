<template lang="pug">
  .bet
    .main
      score(:teams="teams")
      .date 17 jun - 15:00
      span.status fechado
    router-link.hunch(:to="{ name : 'betting' }") Palpite
</template>

<script>
import Score from '@/components/Score'

export default {
  name: 'bet',
  components: { Score },
  data: () => ({
    teams: {
      home: {
        name: 'Brasil',
        shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/720px-Flag_of_Brazil.svg.png',
        goals: 2
      },
      away: {
        name: 'Alemanha',
        shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/290px-Flag_of_Germany.svg.png',
        goals: 0
      }
    }
  })
}
</script>

<style scoped lang="stylus">
.bet
  width 100%
  display flex
  flex-direction column
  text-decoration none

  .main
    cursor pointer
    flex 1
    display flex
    flex-direction column
    align-items center
    background-color white
    border-radius 5px 5px 0 0
    padding 25px 5px
    box-sizing border-box
    -webkit-box-shadow 0px 0px 100px -42px rgba(0,0,0,.25)
    -moz-box-shadow 0px 0px 100px -42px rgba(0,0,0,.25)
    box-shadow 0px 0px 100px -42px rgba(0,0,0,.25)

    .date
      display flex
      align-items center
      font-size 13px
      font-weight 600
      color #777
      margin 18px 0

      &:before
        content ''
        width 15px
        height 15px
        display block
        mask-image url('../assets/icons/alarm-clock.svg')
        mask-repeat no-repeat
        mask-size contain
        background-color #777
        margin-right 5px

    .status
      padding 7px
      border-radius 3px
      font-size 10px
      font-weight 600
      text-transform uppercase
      background-color firebrick
      color rgba(255, 255, 255, .7)

  .hunch
    display flex
    justify-content center
    align-items center
    color white
    text-decoration none
    font-size 16px
    font-weight 600
    border 0
    background-color #7226ea
    border-radius 0 0 5px 5px
    padding 15px 15px
    box-sizing border-box
    cursor pointer

    &:after
      content ''
      width 15px
      height 15px
      margin-left 5px
      mask-image url('../assets/icons/chevron.svg')
      mask-repeat no-repeat
      mask-size contain
      background-color white

</style>
