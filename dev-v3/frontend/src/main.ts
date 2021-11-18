import { createApp } from "vue"
import { createPinia } from "pinia"
import { createVuetify } from "vuetify"
import router from "@/lib/Router"
import App from "./App.vue"
import "vuetify/styles"
import "vuetify/dist/vuetify.css"

// import vuetify from "./plugins/vuetify"
// import { loadFonts } from "./plugins/webfontloader"
// loadFonts()

const vuetify = createVuetify()

createApp(App).use(createPinia()).use(router).use(vuetify).mount("#app")
