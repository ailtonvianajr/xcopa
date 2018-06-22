<template lang="pug">
	#add-game
		.main
			loading(v-if="false")
			h2.title Novo jogo
			form.form
				x-select(:options="teams", @onSelect="getFirstTeam")
				x-select(:options="teams", @onSelect="getSecondTeam")
				text-field(type="date", placeholder="Data", @onSelectDate="emitDate")
				.buttons
					x-button(template="outline", link="back", value="Cancelar")
					x-button(template="primary", value="Salvar", @onClick="addGame")
</template>

<script>
import moment from 'moment'
import firebase from '@/modules/firebase-setup'
import TextField from '@/components/TextField'
import XButton from '@/components/XButton'
import XSelect from '@/components/XSelect'
import Loading from '@/components/Loading'


const db = firebase.firestore()

export default {
	components: { TextField, XButton, XSelect, Loading },
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
	},
	methods: {
		getFirstTeam(team) {
			console.log('first:', team)
		},
		getSecondTeam(team) {
			console.log('second:', team)
		},
		emitDate(value) {
			console.log('data:', value)
		},
		addGame() {
			console.log('Salva jogo...')
		}
	}
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
