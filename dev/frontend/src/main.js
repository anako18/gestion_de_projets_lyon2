"use strict"
import Vue from "vue"
import App from "./App.vue"
import router from "@m/RouterModule/RouterService.js"

import "@s/_normalize.scss"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
