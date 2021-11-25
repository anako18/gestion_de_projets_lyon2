import Vue from "vue"
import VueRouter from "vue-router"

import RegisterComponent from "@/components/Register"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Register",
    component: RegisterComponent
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
