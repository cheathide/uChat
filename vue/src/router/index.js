import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import UChat from '@/pages/chat/UChat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/uchat',
      children: [
          {
              path: '/uchat',
              name: 'UChat',
              component: UChat
          }
      ]
    }
  ]
})
