"use strict"
import { createWebHistory, createRouter } from "vue-router"
import IntroVue from "@/views/IntroVue.vue"
import PremiereVisiteVue from "@/views/PremiereVisiteVue.vue"

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
