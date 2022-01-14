"use strict"
import Vue from "vue"
import VueRouter from "vue-router"

import IntroVue from "@v/Intro.vue"
import PremiereVisiteVue from "@v/PremiereVisite.vue"
import ConnexionVue from "@v/Connexion.vue"
import InscriptionVue from "@v/Inscription.vue"
import OrganisationEvenement from "@v/OrganisationEvenement.vue"

import ModalInterface from "@m/OrganisationEvenementModule/ModalInterface.vue"

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
  },
  {
    path: "/organisation-evenement",
    component: OrganisationEvenement,
    children: [
      {
        path: "",
        name: "J'organise"
      },
      {
        path: "type",
        name: "Type d'évèmenent",
        component: ModalInterface
      },
      {
        path: "type",
        name: "Type de cuisine",
        component: ModalInterface
      }
    ]
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
