import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue';
import Terms from './views/Terms.vue';
import PageNotFound from './views/PageNotFound.vue';
import Versions from './views/Versions.vue';
import Tutorials from './views/Tutorials.vue';
import InstallationGuide from './views/InstallationGuide.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/terms', component: Terms },
  { path: '/versions', component: Versions },
  { path: '/tutorials', component: Tutorials },
  { path: '/installationGuide', component: InstallationGuide },
  { path: '/:pathMatch(.*)*', component: PageNotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => {
    return {top: 0, left: 0}
  }
})

export default router;