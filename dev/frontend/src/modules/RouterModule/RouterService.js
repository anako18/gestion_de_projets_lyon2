"use strict"
import Vue from "vue"
import VueRouter from "vue-router"

import BienvenueVue from "@v/Bienvenue.vue"
import EvenementConfirmationParticipationVue from "@v/EvenementConfirmationParticipation.vue"
import ConnexionVue from "@v/Connexion.vue"
import EvenementDetailVue from "@v/EvenementDetail.vue"
import EvenementListeVue from "@v/EvenementListe.vue"
import EvenementOrganisationVue from "@v/EvenementOrganisation.vue"
import EvenementUtilisateurVue from "@v/EvenementUtilisateur.vue"
import FavoriListeVue from "@v/FavoriListe.vue"
import InscriptionVue from "@v/Inscription.vue"
import Instructions1Vue from "@v/Instructions-1.vue"
import Instructions2Vue from "@v/Instructions-2.vue"
import Instructions3Vue from "@v/Instructions-3.vue"
import IntroVue from "@v/Intro.vue"
import ModalInterface from "@m/EvenementModule/OrganisationModule/ModalInterface.vue"
import PremiereVisiteVue from "@v/PremiereVisite.vue"

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
    component: EvenementOrganisationVue,
    children: [
      {
        path: "",
        name: "J'organise un évènement"
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
      },
      {
        path: "lieu",
        name: "Lieu",
        component: ModalInterface
      },
      {
        path: "accessibilite",
        name: "Accessibilité",
        component: ModalInterface
      }
    ],
    meta: {
      requiertAuthentification: true
    }
  },
  {
    path: "/evenements-liste",
    name: "Liste des évènements",
    component: EvenementListeVue,
    meta: {
      requiertAuthentification: true
    }
  },
  {
    path: "/favoris-liste",
    name: "Évènements favoris",
    component: FavoriListeVue,
    meta: {
      requiertAuthentification: true
    }
  },
  {
    path: "/mes-evenements",
    name: "Mes évènements",
    component: EvenementUtilisateurVue,
    meta: {
      requiertAuthentification: true
    }
  },
  {
    path: "/page-evenement/:id",
    name: "Page d'un évènement",
    component: EvenementDetailVue,
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
    component: EvenementConfirmationParticipationVue,
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
      next({
        path: "/connexion",
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
