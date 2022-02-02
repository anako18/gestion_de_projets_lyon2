<template>
  <main class="main-evenements">
    <header class="header-logo">
      <img src="../assets/logo.png">
    </header>
    <FiltersComponents />
    <div
      v-for="evenement in evenements"
      :key="evenement.idEvenement"
      class="events-scroll-ecran"
    >
      <div class="evenement">
        <div class="evenement-image">
          <img
            :ref="`champImg${evenement.idEvenement}`"
            src=""
            width="100%"
          >
          <button class="favorite-button">
            <img
              :id="evenement.idEvenement"
              :src="favorisImage(evenement.favoris)"
              width="17%"
              @click="changerFavoris(evenement.idEvenement)"
            >
          </button>
        </div>
        <div class="evenement-content">
          <div class="profile-titre">
            <!-- // FIXME: Mettre en place la photo Utilisateur -->
             <img
              class="profile-pic"
              :src=" require(`../assets/avatars/${getHoteAvatar( evenement.idEvenement )}`) "
              width="20%"
              height="20%"
            > 
            <span class="evenement-titre">
              {{ evenement.titre }}
            </span>
          </div>
          <div class="evenement-info">
            <span class="evenement-date"><i class="icon-calendar" />
              {{ helper.afficherDate(evenement.date) }}
            </span>
            <span class="evenement-font-petit"> {{ evenement.ville }} </span>
          </div>
          <div class="description-price">
            <p class="evenement-description">
              {{ evenement.description }}
            </p>
            <div class="price-tag">
              <img src="../assets/price.png">
              <div class="price-centered">
                {{ evenement.prix }}€
              </div>
            </div>
          </div>
          <center>
            <button
              class="yellow-button"
              @click="redirect(evenement.idEvenement)"
            >
              Voir plus de detail
            </button>
          </center>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import FiltersComponents from "@m/EvenementModule/Filters.vue"
import Helper from "@m/EvenementModule/Helper.js"
import EvenementService from "@m/EvenementModule/EvenementService.js"
import AuthentificationService from "@m/CompteModule/AuthentificationModule/AuthentificationService.js"
import TeleversementService from "@m/TeleversementModule/TeleversementService.js"

export default {
  name: "EvenementListeVue",
  components: {
    FiltersComponents
  },
  data () {
    return {
      evenements: null,
      hotes: null,
      error: null,
      helper: null,
      photos: {}
    }
  },
  mounted () {
    this.getEvenements().then((res) => {
      const idHotes = this.evenements.map((e) => e.idHote)
      this.getUtilisateurs(idHotes)
      this.recuperePhotoEvenement()
    })
    this.helper = new Helper()
  },
  methods: {
    async getEvenements () {
      try {
        await EvenementService.getEvenements(window.localStorage.getItem("idUtilisateur")).then(
          (res) => (this.evenements = res.data.data)
        )
        this.error = null
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message)
        this.error = erreur
      }
    },
    async getUtilisateurs (idHotes) {
      try {
        await AuthentificationService.getUtilisateurs({ ids: idHotes }).then(
          (res) => (this.hotes = res.data.data)
        )
        this.error = null
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message)
        this.error = erreur
      }
    },
    getHoteAvatar (evntId) {
      if (this.hotes) {
        const photo = this.hotes.find((h) => h.idUtilisateur === evntId).photo
        if (photo != null) {
          return photo
        }
      }
      return "0.png"
    },
    getEvenementPhoto (photo) {
      if (photo === null) {
        return "0.png"
      } else {
        return photo
      }
    },
    async mettreFavoris (idUtilisateur, idEvenement) {
      try {
        await EvenementService.mettreFavoris(idUtilisateur, idEvenement)
        this.error = null
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message)
        this.error = erreur
      }
    },
    async supprimerDeFavoris (idUtilisateur, idEvenement) {
      try {
        await EvenementService.supprimerFavoris(idUtilisateur, idEvenement)
        this.error = null
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message)
        this.error = erreur
      }
    },
    changerFavoris (id) {
      const scr = document.getElementById(id).src
      if (scr.includes("heart.")) {
        this.mettreFavoris(window.localStorage.getItem("idUtilisateur"), id)
        document.getElementById(id).src = require("../assets/heart-f.png")
      } else {
        this.supprimerDeFavoris(window.localStorage.getItem("idUtilisateur"), id)
        document.getElementById(id).src = require("../assets/heart.png")
      }
    },
    redirect (id) {
      window.location.href = `/page-evenement/${id}`
    },
    favorisImage (flag) {
      return flag === 1
        ? require("../assets/heart-f.png")
        : require("../assets/heart.png")
    },
    recupereTeleversement: TeleversementService.recupereTeleversement,
    async recuperePhotoEvenement () {
      console.debug("lol")
      for (const index in this.evenements) {
        const evenement = this.evenements[index]
        if (evenement.photo !== "") {
          await this.recupereTeleversement(evenement.photo)
            .then((resultat) => {
              const id = evenement.idEvenement
              const champNom = `champImg${id}`
              this.photos[id] = resultat.request.responseURL

              for (const valeur in Object.keys(this.$refs)) {
                if (Object.keys(this.$refs)[valeur] === champNom) {
                  const ref = Object.keys(this.$refs)[valeur]
                  this.$refs[ref][0].src = this.photos[id]
                }
              }
            })
            .catch((erreur) => {
              console.log("recuperePhotoEvenement", erreur)
            })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@s/evenements/evenements";
</style>
