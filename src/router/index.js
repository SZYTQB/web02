import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import step from '@/page/step'
import stepa from '@/page/stepa'
import stepb from '@/page/stepb'
import stepc from '@/page/stepc'
import stepd from '@/page/stepd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children:[
        {
          path: '',
          redirect: '/step'
        },
        {
          path: '/step',
          name:'step',
          component: step
        },
        {
          path: '/stepa',
          name:'stepa',
          component: stepa
        },
        {
          path: '/stepb',
          name:'stepb',
          component: stepb
        },
        {
          path: '/stepc',
          name:'stepc',
          component: stepc
        },
        {
          path: '/stepd',
          name:'stepd',
          component: stepd
        }
      ]
    }
  ]
})
