import { createRouter, createWebHistory } from 'vue-router'
import PageView from '../views/Page.vue'

const routes = [
  {
    path: '/',
    name: 'page',
    component: PageView
  },
  {
    path: '/electronicmodel',
    name: 'ElectronicModel',
    component: () => import('../views/ElectronicModel.vue')
  },
  {
    path: '/architecturaldesign',
    name: 'ArchitecturalDesign',
    component: () => import('../views/ArchitecturalDesign.vue')
  },
  {
    path: '/authorprojects',
    name: 'AuthorProjects',
    component: () => import('../views/AuthorProjects.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
