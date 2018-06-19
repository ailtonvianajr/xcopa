<template lang="pug">
	#add-game
		.main
			loading(v-if="false")
			h2.title Novo jogo
			form.form
				x-select(:options="teams")
				x-select(:options="teams")
				text-field(type="date", placeholder="Data")
				.buttons
					x-button(template="outline", link="back", value="Cancelar")
					x-button(template="primary", value="Salvar")
</template>

<script>
import TextField from '@/components/TextField'
import XButton from '@/components/XButton'
import XSelect from '@/components/XSelect'
import Loading from '@/components/Loading'

export default {
	components: { TextField, XButton, XSelect, Loading },
	data: () => ({
		teams: [
			{ value: 0, name: 'Brasil' },
			{ value: 1, name: 'Argentina' },
			{ value: 2, name: 'Alemanha' },
			{ value: 3, name: 'Inglaterra' },
			{ value: 4, name: 'Espanha' },
			{ value: 5, name: 'França' }
		]
	})
}
</script>

<style scoped lang="stylus">
#add-game
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
