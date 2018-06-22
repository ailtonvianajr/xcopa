<template lang="pug">
	router-link.button-list(:to="{ name : this.link }", :class="buttonClasses")
		.icon-left(:style="buttonStyles")
		.text
			h2.title {{ title }}
			h4.subtitle {{ subtitle }}
		.icon-right
</template>

<script>
export default {
	name: 'button-list',
	props: {
		template: {
			type: String,
			required: false
		},
		flag: {
			type: String,
			required: false
		},
		title: {
			type: String,
			required: true
		},
		subtitle: {
			type: String,
			required: false,
			default: 'Ver detalhes'
		},
		link: {
			type: String,
			required: true
		},
		linkParams: {
			type: String,
			required: false
		}
	},
	methods: {
		buttonClick () {
			if (this.link && this.link != 'back') {
				this.$router.push({ name : this.link })
			} else if ( this.link && this.link == 'back' ) {
				this.$router.go(-1)
			}
		}
	},
	computed: {
		buttonClasses () {
			return {
				'game': this.template == 'game',
				'flag': this.template == 'flag',
			}
		},
		buttonStyles () {
			if ( this.flag ) {
				return {
					'background-image': 'url('+this.flag+')'
				}
			}
		}
	}
}
</script>

<style scoped lang="stylus">
.button-list
	cursor pointer
	border 0
	background-color transparent
	padding 15px
	box-sizing border-box
	border-radius 5px
	display flex
	align-items center
	color black
	text-decoration none
	transition background-color .25s ease

	&:active
		color black

	&:visited
		color black

	&:hover
		background-color #f7f7f7

	.icon-left, .icon-right
		display flex
		justify-content center
		align-items center
		width 40px
		height 40px
		border-radius 50%
		background-color #7226EA
		margin-right 15px
		overflow hidden

		&:after
			content ''
			width 40%
			height 40%
			mask-image url('../assets/icons/plus.svg')
			mask-repeat no-repeat
			mask-size contain
			display block
			background-color white

	&.game
		.icon-left
			background-color #bbb

			&:after
				content ''
				width 40%
				height 40%
				mask-image url('../assets/icons/puzzle.svg')
				mask-repeat no-repeat
				mask-size contain
				display block
				background-color white

	&.flag
		.icon-left
			background-repeat no-repeat
			background-size cover
			background-position center

			&:after
				content none

	.text
		flex 1
		display flex
		flex-direction column

		.title
			font-size 18px
			font-weight 600
			text-align left
			margin 0

		.subtitle
			font-size 15px
			font-weight 500
			text-align left
			margin 0

	.icon-right
		background-color transparent
		margin-right 0
		margin-left 15px

		&:after
			width 40%
			height 40%
			mask-image url('../assets/icons/chevron.svg')
			background-color #555
</style>
