"use strict"
import Vue from "vue"
import VueRouter from "vue-router"
import IntroVue from "../../views/Intro.vue"
import PremiereVisiteVue from "../../views/PremiereVisite.vue"
import ConnexionVue from "../../views/Connexion.vue"
import InscriptionVue from "../../views/Inscription.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Intro",
    component: IntroVue
  },
  {
    path: "/premiere-visite",
    name: "Première visite",
    component: PremiereVisiteVue
  },
  {
    path: "/connexion",
    name: "Connexion",
    component: ConnexionVue
  },
  {
    path: "/inscription",
    name: "Inscription",
    component: InscriptionVue
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
