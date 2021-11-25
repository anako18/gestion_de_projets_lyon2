import Vue from "vue"
import Router from "vue-router"
import Inscription from "@/components/Inscription"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Inscription",
      component: Inscription
    }
  ]
})
