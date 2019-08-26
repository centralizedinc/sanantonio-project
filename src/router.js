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
      path: '/app',
      component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue'),
      children:[
        {
          path:'',
          component:() => import('./views/app/Home')
        }
      ]
    }
  ]
})
