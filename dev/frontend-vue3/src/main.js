"use strict"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./services/RouterService"

createApp(App).use(router).mount("#app")
