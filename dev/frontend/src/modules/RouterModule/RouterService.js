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
import ConfirmationVue from "@v/ConfirmationParticipation.vue"

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
    ],
    meta: {
      requiertAuthentification: true
    }
  },
  {
    path: "/evenements-liste",
    name: "Evenements",
    component: EvenementsListVue,
    meta: {
      requiertAuthentification: true
    }
  },
  {
    path: "/favoris-liste",
    name: "Favoris",
    component: FavorisListVue,
    meta: {
      requiertAuthentification: true
    }
  },
  {
    path: "/mes-evenements",
    name: "MesEvenements",
    component: MesEvenementsVue,
    meta: {
      requiertAuthentification: true
    }
  },
  {
    path: "/page-evenement/:id",
    name: "PageEvenement",
    component: PageEvenementVue,
    meta: {
      requiertAuthentification: true
    }
  },
  {
    path: "/bienvenue",
    name: "Bienvenue",
    component: BienvenueVue,
    meta: {
      requiertAuthentification: true
    }
  },
  {
    path: "/instructions1",
    name: "Instructions-1",
    component: Instructions1Vue,
    meta: {
      requiertAuthentification: true
    }
  },
  {
    path: "/instructions2",
    name: "Instructions-2",
    component: Instructions2Vue,
    meta: {
      requiertAuthentification: true
    }
  },
  {
    path: "/instructions3",
    name: "Instructions-3",
    component: Instructions3Vue,
    meta: {
      requiertAuthentification: true
    }
  },
  {
    path: "/confirmation",
    name: "Confirmation",
    component: ConfirmationVue,
    meta: {
      requiertAuthentification: true
    }
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiertAuthentification)) {
    if (window.localStorage.getItem("idUtilisateur") === null) {
      console.log("navigation: nop")
      next({
        path: "/connexion",
        params: { nextUrl: to.fullPath }
      })
    } else {
      console.log("navigation: ok")
      next()
    }
  } else {
    next()
  }
})

export default router
