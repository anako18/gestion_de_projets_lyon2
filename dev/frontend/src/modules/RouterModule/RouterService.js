"use strict"
import Vue from "vue"
import VueRouter from "vue-router"

import IntroVue from "@v/Intro.vue"
import PremiereVisiteVue from "@v/PremiereVisite.vue"
import ConnexionVue from "@v/Connexion.vue"
import InscriptionVue from "@v/Inscription.vue"
import OrganisationEvenement from "@v/OrganisationEvenement.vue"

import ModalInterface from "@m/OrganisationEvenementModule/ModalInterface.vue"
import EvenementsListVue from "@v/EvenementsListe.vue"
import FavorisListVue from "@v/FavorisListe.vue"
import MesEvenementsVue from "@v/MesEvenements.vue"
import PageEvenementVue from "@v/PageEvenement.vue"
import BienvenueVue from "@v/Bienvenue.vue"
import Instructions1Vue from "@v/Instructions-1.vue"
import Instructions2Vue from "@v/Instructions-2.vue"
import Instructions3Vue from "@v/Instructions-3.vue"


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
  },
  {
    path: "/evenements-liste",
    name: "Evenements",
    component: EvenementsListVue
  },
  {
    path: "/favoris-liste",
    name: "Favoris",
    component: FavorisListVue
  },
  {
    path: "/mes-evenements",
    name: "MesEvenements",
    component: MesEvenementsVue
  },
  {
    path: "/page-evenement",
    name: "PageEvenement",
    component: PageEvenementVue
  },
  {
    path: "/bienvenue",
    name: "Bienvenue",
    component: BienvenueVue
  },
  {
    path: "/instructions1",
    name: "Instructions-1",
    component: Instructions1Vue
  },
  {
    path: "/instructions2",
    name: "Instructions-2",
    component: Instructions2Vue
  },
  {
    path: "/instructions3",
    name: "Instructions-3",
    component: Instructions3Vue
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router