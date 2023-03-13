import { createRouter, createWebHistory } from 'vue-router'
import PageView from '../views/Page.vue'

const routes = [
  {
    path: '/',
    name: 'page',
    component: PageView
  },

  // ***** Projects path
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
  },


  // ***** Project path
  {
    path: '/projectlanchonete',
    name: 'ProjectLanchonete',
    component: () => import('../views/ViewsProjects/ProjectLanchonete.vue')
  },
  {
    path: '/cozinharsb',
    name: 'CozinhaRsB',
    component: () => import('../views/ViewsProjects/CozinhaRsB.vue')
  },
  {
    path: '/centromedico',
    name: 'CentroMedico',
    component: () => import('../views/ViewsProjects/CentroMedico.vue')
  },
  {
    path: '/apartamentoht',
    name: 'ApartamentoHt',
    component: () => import('../views/ViewsProjects/ApartamentoHt.vue')
  },
  {
    path: '/clinicaodontologica',
    name: 'ClinicaOdontologica',
    component: () => import('../views/ViewsProjects/ClinicaOdontologica.vue')
  },
  {
    path: '/escritoriocontainer',
    name: 'EscritorioContainer',
    component: () => import('../views/ViewsProjects/EscritorioContainer.vue')
  },
  {
    path: '/estudiomusculacao',
    name: 'EstudioMusculacao',
    component: () => import('../views/ViewsProjects/EstudioMusculacao.vue')
  },
  {
    path: '/hotelfc',
    name: 'HotelFc',
    component: () => import('../views/ViewsProjects/HotelFc.vue')
  },
  {
    path: '/residencians',
    name: 'ResidenciaNs',
    component: () => import('../views/ViewsProjects/ResidenciaNs.vue')
  },
  {
    path: '/residenciaeg',
    name: 'ResidenciaEg',
    component: () => import('../views/ViewsProjects/ResidenciaEg.vue')
  },
  {
    path: '/spamedico',
    name: 'SpaMedico',
    component: () => import('../views/ViewsProjects/SpaMedico.vue')
  },
  {
    path: '/chaleserrabocaina',
    name: 'ChaleSerraBocaina',
    component: () => import('../views/ViewsProjects/ChaleSerraBocaina.vue')
  },
  {
    path: '/residenciaagpatrimonio',
    name: 'ResidenciaAgPatrimonio',
    component: () => import('../views/ViewsProjects/ResidenciaAgPatrimonio.vue')
  },

    // ***** Zoom Project path

  //CHALÉ
  {
    path: '/zoomchale',
    name: 'ZoomChale',
    component: () => import('../components/ZoomImage/ZoomChale.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
