<template lang="pug">
	#profile
		.main
			loading(v-if="false")
			h2.title Alterar Senha
			form.form
				text-field(type="text", placeholder="Senha atual")
				text-field(type="text", placeholder="Nova senha")
				text-field(type="text", placeholder="Confirme a nova senha")
				.buttons
					x-button(template="outline", link="back", value="Cancelar")
					x-button(template="primary", value="Confirmar")
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

		.title
			margin 0 0 20px

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
