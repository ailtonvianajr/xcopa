<template lang="pug">
	#games
		.main
			h2.title Jogos
			.container
				button-list(title="Novo", subtitle="Criar novo jogo", link="AddGame")
				span.divider Jogos ativos
				button-list(
					v-for="(game, key) in games",
					:key="key",
					template="game",
					:title="game.teamOne.name + ' x ' + game.teamTwo.name",
					link="GameDetails")
</template>

<script>
import firebase from '@/modules/firebase-setup'
import ButtonList from '@/components/ButtonList'


const db = firebase.firestore()

export default {
	components: { ButtonList },
	data: () => ({
		games: []
	}),
	created() {
		db.collection("games").get().then(querySnapshot => {
			querySnapshot.forEach(doc => {
				this.games.push(doc.data())
			})
		})
	}
}
</script>

<style scoped lang="stylus">
#games
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
