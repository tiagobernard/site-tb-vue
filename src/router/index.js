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
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.querySelector(to.hash);
          if (element) {
            // Detecta dinamicamente a altura do cabeçalho
            const header = document.querySelector('header'); // Substitua pelo seletor correto do cabeçalho
            const headerHeight = header ? header.offsetHeight : 0;
  
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerHeight;
  
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
          resolve();
        }, 750); // Ajuste o delay, se necessário
      });
    }
  
    return savedPosition || { top: 0 };
  }  
});

export default router
