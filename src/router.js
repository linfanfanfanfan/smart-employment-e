import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/publish',
      name: 'publish',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Publish.vue')
    },
    {
      path: '/processing',
      name: 'processing',
      component: () => import('./views/Processing.vue')
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('./views/Me.vue')
    }
  ]
})
