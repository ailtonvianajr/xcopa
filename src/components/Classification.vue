<template lang="pug">
	.classification
		h2.title Classificação
		.users
			.user
				.info
					span.position 1º
					.photo
					h4.name Ailton
				span.points 36

			.user
				.info
					span.position 2º
					.photo
					h4.name Ailton
				span.points 36

			.user.highlighted
				.info
					span.position 3º
					.photo
					h4.name Ailton
				span.points 36

			.user
				.info
					span.position 4º
					.photo
					h4.name Ailton
				span.points 36

			.user
				.info
					span.position 5º
					.photo
					h4.name Ailton
				span.points 36
</template>

<script>

export default {
	name: 'classification'
}
</script>

<style lang="stylus">
.classification
	display flex
	flex-direction column
	background-color #7226EA
	border-radius 5px

	.title
		font-size 25px
		font-weight 700
		color white
		margin 30px 30px 20px

		&:after
			content ''
			width 25%
			height 3px
			background-color white
			display block

	.users
		width 100%
		display flex
		flex-direction column

		.user
			flex 1
			display flex
			flex-direction row
			justify-content space-between
			align-items center
			padding 14px 30px

			&:last-child
				margin-bottom 20px

			&.highlighted
				background-color #ffc800

			.info
				display flex
				justify-content space-between
				align-items center

				.position
					font-size 22px
					font-weight 900
					color white

				.photo
					width 38px
					height 38px
					border-radius 50%
					background-repeat no-repeat
					background-size cover
					background-position center
					background-image url('https://randomuser.me/api/portraits/men/60.jpg')
					margin 0 10px

				.name
					font-size 17px
					color white
					margin 0

			.points
				background-color rgba(255, 255, 255, .2)
				padding 8px
				box-sizing border-box
				border-radius 5px
				color white
				font-size 15px
				font-weight bold
</style>
