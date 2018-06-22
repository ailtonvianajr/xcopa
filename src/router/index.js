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

import SignIn from '@/pages/Auth/SignIn'

import Profile from '@/pages/Profile/Profile'
import ChangePassword from '@/pages/Profile/ChangePassword'


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/games',
      name: 'Games',
      component: Games
    },
    {
      path: '/games/add',
      name: 'AddGame',
      component: AddGame
    },
    {
      path: '/games/details',
      name: 'GameDetails',
      component: GameDetails
    },
    {
      path: '/teams',
      name: 'Teams',
      component: Teams
    },
    {
      path: '/teams/add',
      name: 'AddTeam',
      component: AddTeam
    },
    {
      path: '/teams/details',
      name: 'TeamDetails',
      component: TeamDetails
    },
    {
      path: '/betting',
      name: 'Betting',
      component: Betting
    },
    {
      path: '/hunches',
      name: 'Hunches',
      component: Hunches
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/change-password',
      name: 'ChangePassword',
      component: ChangePassword
    }
  ]
})
