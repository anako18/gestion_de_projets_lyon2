import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexVue from '../views/Index'
import EnregistrementFormulaire from '../modules/CompteModule/Components/EnregistrementFormulaire.vue'
import AuthentificationFormulaire from '../modules/CompteModule/Components/AuthentificationFormulaire.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexVue,
    children: [
      {
        path: 'enregistrement',
        component: EnregistrementFormulaire
      },
      {
        path: 'authentification',
        component: AuthentificationFormulaire
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
