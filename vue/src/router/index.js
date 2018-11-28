import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Register from '@/pages/common/Register'
import Login from '@/pages/common/Login'
import UChat from '@/pages/chat/UChat'
import ChatWindow from '@/pages/chat/ChatWindow'

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
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/chat-window',
      name: 'ChatWindow',
      component: ChatWindow
    }
  ]
})
