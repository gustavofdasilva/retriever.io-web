import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue';
import Terms from './views/Terms.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/terms', component: Terms },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => {
    return {top: 0, left: 0}
  }
})

export default router;