import { createRouter, createWebHistory } from 'vue-router'
import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'
import Page3 from '../views/Page3.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'page-1',
      component: Page1
    },
    {
      path: '/page-2',
      name: 'page-2',
      component: Page2,
    },
    {
      path: '/page-3',
      name: 'page-3',
      component: Page3
    }
  ]
})

export default router
