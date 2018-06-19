<template lang="pug">
  .loading
    .loader
</template>

<script>
export default {
}
</script>

<style scoped lang="stylus">
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.loading
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  background-color white
  display flex
  justify-content center
  align-items center
  opacity .8

  .loader,
  .loader:after
    border-radius 50%
    width 5em
    height 5em

  .loader
    font-size 10px
    position relative
    text-indent -9999em
    border-top .5em solid rgba(0, 0, 0, 0.2)
    border-right .5em solid rgba(0, 0, 0, 0.2)
    border-bottom .5em solid rgba(0, 0, 0, 0.2)
    border-left .5em solid white
    -webkit-transform translateZ(0)
    -ms-transform translateZ(0)
    transform translateZ(0)
    -webkit-animation load8 1.1s infinite linear
    animation load8 1.1s infinite linear
</style>
