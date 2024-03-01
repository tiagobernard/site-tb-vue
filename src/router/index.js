import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ThanKs from '../views/ThanKs.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path: '/tks',
    name: 'thanks',
    component: ThanKs
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
