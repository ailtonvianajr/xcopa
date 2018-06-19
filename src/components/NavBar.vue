<template lang="pug">
	.nav-bar
		.main
			.logo
			.menu
				ul
					li
						router-link.item(:to="{ name : 'home' }") Início
					li
						router-link.item(:to="{ name : 'games' }") Jogos
					li
						router-link.item(:to="{ name : 'teams' }") Equipes
					li
						router-link.item(:to="{ name : 'ranking' }") Ranking
			.user
				.points 36 pontos
				router-link.avatar(:to="{ name: 'profile' }")
				button.sign-out
</template>

<script>
export default {
	name: 'nav-bar'
}
</script>

<style scoped lang="stylus">
$primary-color = #7226EA

.nav-bar
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
						.item
							&:before
								mask-image url('../assets/icons/home.svg')

					&:nth-child(2)
						.item
							&:before
								mask-image url('../assets/icons/puzzle.svg')

					&:nth-child(3)
						.item
							&:before
								mask-image url('../assets/icons/shield.svg')

					&:nth-child(4)
						.item
							&:before
								mask-image url('../assets/icons/bar-chart.svg')

					.item
						display flex
						justify-content center
						align-items center
						cursor pointer
						padding 30px 25px
						color white
						font-weight bold
						text-decoration none
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
							background-color #f9f9f9
							color $primary-color

							&:before
								background-color $primary-color

		.user
			display flex
			align-items center

			.points
				background-color rgba(255, 255, 255, .2)
				padding 10px
				box-sizing border-box
				border-radius 5px
				color white
				font-size 15px
				font-weight bold

			.avatar
				width 50px
				height 50px
				border-radius 50%
				margin 0 15px
				background-image url('https://randomuser.me/api/portraits/men/79.jpg')
				background-repeat no-repeat
				background-size cover
				background-position center
				cursor pointer
				transition all .25s ease

			.sign-out
				cursor pointer
				width 45px
				height 45px
				border-radius 50%
				border none
				background-color transparent
				overflow hidden
				transition background-color .25s ease

				&:after
					content ''
					width 100%
					height 100%
					display block
					mask-image url('../assets/icons/log-out.svg')
					mask-repeat no-repeat
					mask-size 60%
					mask-position center
					background-color white

				&:hover
					background-color #5f16d2
</style>
