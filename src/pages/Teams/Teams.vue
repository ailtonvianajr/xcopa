<template lang="pug">
	#teams
		.main
			h2.title Equipes
			.container
				button-list(title="Novo", subtitle="Criar nova equipe", link="add-team")
				span.divider Equipes ativas
				button-list(
					v-for="(team, key) in teams",
					:key="key",
					template="flag",
					:flag="team.image",
					:title="team.name",
					link="team-details")
</template>

<script>
import firebase from '@/modules/firebase-setup'
import ButtonList from '@/components/ButtonList'


const db = firebase.firestore()

export default {
	components: { ButtonList },
	data: () => ({
		teams: []
	}),
	created() {
		db.collection("teams").get().then(querySnapshot => {
			querySnapshot.forEach(doc => {
				let team = doc.data()
				team.id = doc.id
				this.teams.push(team)
			})
		})
	}
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
