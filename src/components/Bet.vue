<template lang="pug">
  .bet
    .main
      .teams
        .team
          h4.name Brasil
          .shield
          span.score 3
        span.divider x
        .team
          h4.name Suiça
          .shield
          span.score 0
      .date 17 jun - 15:00
      span.status fechado
    .footer
      span.bets Apostas
      .users
        .user
        .user
        .user
        .user
        .user
</template>

<script>
export default {
  name: 'bet',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="stylus">
.bet
  width 100%
  display flex
  flex-direction column

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

    .teams
      display flex
      justify-content space-between
      align-items center

      .team
        display flex
        align-items center
        flex-direction row

        &:last-child
          flex-direction row-reverse

        .name
          font-size 18px
          font-weight 500
          margin 0 5px
          color #222

        .shield
          width 40px
          height 40px
          border-radius 50%
          margin 0 5px
          background-repeat no-repeat
          background-size cover
          background-position center
          background-image url('data:image/png;base64,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')

        .score
          font-size 25px
          font-weight 600
          margin 0 10px
          color #222

      .divider
        font-size 18px
        color #999

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

  .footer
    display flex
    justify-content space-between
    align-items center
    background-color #7226ea
    border-radius 0 0 5px 5px
    padding 10px 15px
    box-sizing border-box
    cursor pointer

    .bets
      font-size 15px
      font-weight 600
      color white

    .users
      display flex

      .user
        width 30px
        height 30px
        border-radius 50%
        border solid 2px #f5f5f5
        margin 0 -3px
        background-repeat no-repeat
        background-size cover
        background-position center
        background-image url('https://randomuser.me/api/portraits/men/60.jpg')

</style>
