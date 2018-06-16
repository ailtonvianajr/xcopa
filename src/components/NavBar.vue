<template lang="pug">
  #nav-bar
    .main
      .logo
      .menu
        ul
          li
            a Início
          li
            a Apostas
          li
            a Ranking
      .user
        .points 36 pontos
        .avatar
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang="stylus">
#nav-bar
  flex 1
  display flex
  justify-content center
  background-color #7226EA

  .main
    flex .8
    display flex
    justify-content space-between
    align-items center

    .logo
      width 125px
      height 50px
      mask-image url('../assets/logo.svg')
      mask-repeat no-repeat
      mask-size contain
      background-color white

    .menu
      flex 1
      display flex
      justify-content center

      ul
        display flex
        list-style none
        margin 0

        li
          margin 0 5px

          a
            display block
            padding 30px 25px
            color white
            font-weight bold

    .user
      display flex
      align-items center

      .points
        background-color rgba(255, 255, 255, .2)
        padding 10px
        margin-right 15px
        box-sizing border-box
        border-radius 5px
        color white
        font-size 15px
        font-weight bold

      .avatar
        width 50px
        height 50px
        border-radius 50%
        background-image url('https://randomuser.me/api/portraits/men/79.jpg')
        background-repeat no-repeat
        background-size cover
</style>
