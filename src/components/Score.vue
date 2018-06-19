<template lang="pug">
  .score
    .team
      h4.name {{ teams.home.name }}
      .shield(:style="{ 'background-image' : 'url('+teams.home.shield+')' }")
      span.goals(v-if="mode == 'read'") {{ teams.home.goals }}
      text-field(v-if="mode == 'edit'")
    span.divider x
    .team
      h4.name {{ teams.away.name }}
      .shield(:style="{ 'background-image' : 'url('+teams.away.shield+')' }")
      text-field(v-if="mode == 'edit'")
      span.goals(v-if="mode == 'read'") {{ teams.away.goals }}
</template>

<script>
import TextField from '@/components/TextField'

export default {
  name: 'score',
  components: { TextField },
  props: {
    mode: {
      type: String,
      required: false,
      default: 'read'
    },
    teams: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="stylus">
.score
  width 100%
  display flex
  justify-content space-between
  align-items center

  .team
    flex 1
    display flex
    align-items center
    flex-direction row

    .name
      flex 1
      text-align right
      font-size 18px
      font-weight 500
      margin 0 5px
      color #222

    &:last-child
      flex-direction row-reverse

      .name
        text-align left

    .shield
      width 40px
      height 40px
      border-radius 50%
      margin 0 5px
      background-repeat no-repeat
      background-size cover
      background-position center

    .goals
      font-size 25px
      font-weight 600
      margin 0 10px
      color #222

    input
      width 20px
      margin 0 10px

  .divider
    font-size 18px
    color #999

</style>
