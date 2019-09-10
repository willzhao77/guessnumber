import Vue from 'vue'
import Router from 'vue-router'
import HumanGuess1 from '@/components/HumanGuess1'
import HumanGuess2 from '@/components/HumanGuess2'
import ComputerGuess1 from '@/components/ComputerGuess1'
import ComputerGuess2 from '@/components/ComputerGuess2'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'HumanGuess1',
      component: HumanGuess1
    },
    {
      path: '/HumanGuess2',
      name: 'HumanGuess2',
      component: HumanGuess2
    },
    {
      path: '/ComputerGuess1',
      name: 'ComputerGuess1',
      component: ComputerGuess1
    },
    {
      path: '/ComputerGuess2',
      name: 'ComputerGuess2',
      component: ComputerGuess2
    },

  ]
})
