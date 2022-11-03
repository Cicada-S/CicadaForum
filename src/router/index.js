import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
