<template lang="pug">
	#teams
		.main
			h2.title Equipes
			.container
				button-list(title="Novo", subtitle="Criar nova equipe", link="add-team")
				span.divider Equipes ativas
				button-list(template="flag", flag="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg", title="Brasil", link="team-details")
</template>

<script>
import ButtonList from '@/components/ButtonList'

export default {
	components: { ButtonList }
}
</script>

<style scoped lang="stylus">
#teams
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

		.container
			width 400px
			display flex
			flex-direction column

			.divider
				font-size 15px
				color #777
				padding 10px 10px 10px 20px
				box-sizing border-box
				margin 10px 0

</style>
