import Vue from 'vue'
import VueRouter from 'vue-router'
import MaskedInput from 'vue-text-mask'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import axios from 'axios'
import VueAxios from 'vue-axios' 
Vue.use(VueAxios, axios)

Vue.use(VueRouter,VueAxios, axios)
Vue.component('masked-input', MaskedInput);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    props: {
      header: true,
      content: true
   }
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
