import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Posts from '@/components/Posts'
import Messages from '@/components/Messages'
import Quiz from '@/components/Quiz'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/messages',
      name: 'messages',
      component: Messages
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz
    }
  ]
})
