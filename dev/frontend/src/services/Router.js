"use strict";
import Vue from "vue";
import VueRouter from "vue-router";
import IntroVue from "../views/Intro.vue";
import PremiereVisiteVue from "../views/PremiereVisite.vue";
import EnregistrementFormulaire from "../modules/CompteModule/EnregistrementFormulaire.vue";
import AuthentificationFormulaire from "../modules/CompteModule/AuthentificationFormulaire.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Intro",
    component: IntroVue
  },
  {
    path: "/premiere-visite",
    name: "Première visite",
    component: PremiereVisiteVue,
    children: [
      {
        path: "enregistrement",
        component: EnregistrementFormulaire
      },
      {
        path: "authentification",
        component: AuthentificationFormulaire
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
