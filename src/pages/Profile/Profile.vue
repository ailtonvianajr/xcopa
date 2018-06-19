<template lang="pug">
	#profile
		.main
			loading(v-if="false")
			.avatar
			h4.name Ailton Viana
			form.form
				text-field(type="text", placeholder="Nome")
				text-field(type="text", placeholder="Sobrenome")
				text-field(type="text", placeholder="E-mail")
				.buttons
					x-button(template="outline", link="change-password", value="Alterar Senha")
					x-button(template="primary", value="Salvar")
</template>

<script>
import TextField from '@/components/TextField'
import XButton from '@/components/XButton'
import Loading from '@/components/Loading'

export default {
	components: { TextField, XButton, Loading }
}
</script>

<style scoped lang="stylus">
#profile
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
			background-image url('https://randomuser.me/api/portraits/men/79.jpg')
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
					&:first-child
						margin-right 15px

</style>
