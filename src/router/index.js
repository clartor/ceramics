import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes =[
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kassa',
    name: 'Kassa',
    component: () => import('../views/Kassa.vue')
  },
  {
    path: '/slatis',
    name: 'Slatis',
    component: () => import('../views/VaruSpecar/Slatis.vue')
  },
  {
    path: '/lugn',
    name: 'Lugn',
    component: () => import('../views/VaruSpecar/Lugn.vue')
  },
  {
    path: '/kaffe',
    name: 'Kaffe',
    component: () => import('../views/VaruSpecar/Kaffe.vue')
  },
  {
    path: '/ribbis',
    name: 'Ribbis',
    component: () => import('../views/VaruSpecar/Ribbis.vue')
  },
  {
    path: '/lillOra',
    name: 'LillOra',
    component: () => import('../views/VaruSpecar/LillOra.vue')
  },
  {
    path: '/oljeflaska',
    name: 'Oljeflaska',
    component: () => import('../views/VaruSpecar/Oljeflaska.vue')
  },
  {
    path: '/kannor',
    name: 'Kannor',
    component: () => import('../views/VaruSpecar/Kannor.vue')
  },
  {
    path: '/mortlar',
    name: 'Mortlar',
    component: () => import('../views/VaruSpecar/Mortlar.vue')
  },
  {
    path: '/krukor',
    name: 'Krukor',
    component: () => import('../views/VaruSpecar/Krukor.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
