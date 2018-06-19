import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Games from '@/pages/Games/Games'
import AddGame from '@/pages/Games/AddGame'
import GameDetails from '@/pages/Games/GameDetails'
import Teams from '@/pages/Teams/Teams'
import AddTeam from '@/pages/Teams/AddTeam'
import TeamDetails from '@/pages/Teams/TeamDetails'
import Betting from '@/pages/Betting'
import Hunches from '@/pages/Hunches'
import Profile from '@/pages/Profile/Profile'
import ChangePassword from '@/pages/Profile/ChangePassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/games',
      name: 'games',
      component: Games
    },
    {
      path: '/games/add',
      name: 'add-game',
      component: AddGame
    },
    {
      path: '/games/details',
      name: 'game-details',
      component: GameDetails
    },
    {
      path: '/teams',
      name: 'teams',
      component: Teams
    },
    {
      path: '/teams/add',
      name: 'add-team',
      component: AddTeam
    },
    {
      path: '/teams/details',
      name: 'team-details',
      component: TeamDetails
    },
    {
      path: '/betting',
      name: 'betting',
      component: Betting
    },
    {
      path: '/hunches',
      name: 'hunches',
      component: Hunches
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/change-password',
      name: 'change-password',
      component: ChangePassword
    }
  ]
})
