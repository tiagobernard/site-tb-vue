import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SinglepostTb from '../views/SinglepostTb.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/single',
    name: 'singlepost',
    component: SinglepostTb
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
