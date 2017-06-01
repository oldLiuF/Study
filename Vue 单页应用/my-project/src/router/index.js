import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Todo,
      meta: {
        state: 'all'
      }
    },
    {
      path: '/all',
      component: Todo,
      meta: {
        state: 'all'
      }
    },
    {
      path: '/active',
      component: Todo,
      meta: {
        state: 'active'
      }
    },
    {
      path: '/completed',
      component: Todo,
      meta: {
        state: 'completed'
      }
    },
    {
      path: '/*',
      component: Todo,
      meta: {
        state: 'all'
      }
    }
  ]
})
