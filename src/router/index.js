import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/liste',
      name: 'liste',
      component: () => import('../views/liste.vue'),
    },
    {
      path: '/live',
      name: 'canlı-yayın',
      component: () => import('../views/live.vue'),
    },
    {
      path: '/map',
      name: 'harita',
      component: () => import('../views/map.vue'),
    },
    {
      path: '/student/:name',
      name: 'student',
      component: () => import('../views/student.vue'),
    },
    {
      path: '/student',
      name: 'student_page without name',
      component: () => import('../views/student.vue'),
    },
  ],
})

export default router
