"use strict";
// TODO: Gestion de l'authentification
// TODO: Gestion de l'enregistrement
// TODO: Affichage des utilisateurs enregistrés
// TODO: Apparence basique avec SCSS

import Vue from "vue";
import App from "./App.vue";
import router from "./services/Router";
import "./styles/normalize.css";
import "./styles/common.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
