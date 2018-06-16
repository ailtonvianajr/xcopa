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
	name: 'nav-bar'
}
</script>

<style scoped lang="stylus">
$primary-color = #7226EA

#nav-bar
	flex 1
	display flex
	justify-content center
	background-color $primary-color

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

					&:nth-child(1)
						a
							&:before
								mask-image url('../assets/icons/home.svg')

					&:nth-child(2)
						a
							&:before
								mask-image url('../assets/icons/puzzle.svg')

					&:nth-child(3)
						a
							&:before
								mask-image url('../assets/icons/bar-chart.svg')

					a
						display flex
						justify-content center
						align-items center
						cursor pointer
						padding 30px 25px
						color white
						font-weight bold
						transition all .25s ease

						&:before
							content ''
							width 20px
							height 20px
							margin-right 5px
							display block
							mask-repeat no-repeat
							mask-size contain
							background-color white
							transition all .25s ease

						&:hover
							background-color white
							color $primary-color

							&:before
								background-color $primary-color

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
				cursor pointer
				transition all .25s ease
</style>
