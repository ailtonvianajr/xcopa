<template lang="pug">
	#team-details
		.main
			loading(v-if="false")
			h2.title Detalhes da equipe
			.avatar(style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg')")
			h4.name Brasil
			form.form
				text-field(type="text", placeholder="Nome", value="Brasil")
				.buttons
					x-button(template="outline", link="back", value="Voltar")
					x-button(template="danger", value="Excluir")
					x-button(template="primary", value="Salvar")
</template>

<script>
import XButton from '@/components/XButton'
import TextField from '@/components/TextField'

export default {
	components: { XButton, TextField }
}
</script>

<style scoped lang="stylus">
#team-details
	flex 1
	display flex
	justify-content center

	.main
		position relative
		display flex
		flex-direction column
		align-items center
		background-color white
		border-radius 5px
		padding 30px
		box-sizing border-box
		overflow hidden

		.avatar
			position relative
			cursor pointer
			width 80px
			height 80px
			border-radius 50%
			background-repeat no-repeat
			background-size cover
			background-position center
			overflow hidden

			&:hover
				&:before
					content ''
					position absolute
					top 0
					left 0
					width 100%
					height 100%
					background-color rgba(0, 0, 0, .7)
					display block

				&:after
					content ''
					position absolute
					top 0
					left 0
					width 100%
					height 100%
					display block
					mask-image url('../../assets/icons/edit.svg')
					mask-repeat no-repeat
					mask-size 30%
					mask-position center
					background-color white

		.name
			font-size 18px
			margin 10px 0

		.form
			width 300px
			display flex
			flex-direction column

			.buttons
				display flex
				margin 15px 0 0

				input
					&:nth-child(1)
						margin-right 15px

					&:nth-child(2)
						margin-right 15px

</style>
