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
        // Aguarda a navegação para a nova rota ser concluída
        setTimeout(() => {
          const element = document.querySelector(to.hash);
          if (element) {
            const headerHeight = 108; // Altura do cabeçalho fixo
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerHeight;
  
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
          resolve(); // Finaliza a Promise
        }, 750); // Reduza ou ajuste conforme necessário
      });
    }
  
    return savedPosition || { top: 0 }; // Caso padrão: rola para o topo ou posição salva
  }
});

export default router
