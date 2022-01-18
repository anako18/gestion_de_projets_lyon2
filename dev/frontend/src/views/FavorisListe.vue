<template>
  <main class="favoris-liste">
    <header class="header-logo">
      <img src="../assets/logo.png">
    </header>
    <div class="section-titre">
      <span class="titre"> Mes favoris </span>
    </div>

    <div
      v-for="evenement in evenements"
      :key="evenement.idEvenement"
      class="favoris-liste"
    >
      <div class="favoris-item">
        <div class="favoris-row">
          <div class="favoris-image">
            <img
              :src="
                require(`../assets/evenements/${getEvenementPhoto(
                  evenement.photo
                )}`)
              "
              class="favoris-image"
            >
            <button class="favorite-button">
              <img @click="changerFavoris(evenement.idEvenement)" v-bind:id="evenement.idEvenement" :src="require('../assets/heart.png')" width="40%" />
            </button>
          </div>
          <div class="favoris-description">
            <p class="evenement-titre">
              {{ evenement.titre }}
            </p>
            <p class="avec">
              Avec {{ hotePrenom(evenement.idEvenement) }}
            </p>
            <span class="lieu">
              A {{ evenement.ville }} {{ evenement.prix }}€
            </span>
          </div>
        </div>
        <div class="favoris-row">
          <div class="favoris-date">
            {{ helper.afficherDate(evenement.date) }}
          </div>
          <div class="favoris-chaise">
            Reste 1 chaise
          </div>
        </div>
        <button class="favoris-button" @click="redirect(evenement.idEvenement)">
          Voir plus de detail
        </button>
      </div>
    </div>
    <FooterComponent />
  </main>
</template>

<script>
import FavorisComponent from "../modules/EvenementsModule/Favoris.vue"
import FooterComponent from "../modules/Footer.vue"
import Helper from "../modules/EvenementsModule/Helper.js"
import EvenementsService from "../modules/EvenementsModule/EvenementsService.js"
import AuthentificationService from "../modules/CompteModule/AuthentificationModule/AuthentificationService.js"
export default {
  name: "Favoris",
  components: {
    FavorisComponent,
    FooterComponent
  },
  data () {
    return {
      favs: null,
      evenements: null,
      hotes: null,
      error: null,
      helper: null
    }
  },
  mounted () {
    this.getFavoris().then((res) => {
      const evntsIds = this.favs.map((e) => e.evenementId)
      this.getEvenements(evntsIds).then((res) => {
        const hoteIds = this.evenements.map((e) => e.hoteId)
        this.getUtilisateurs(hoteIds)
      })
    })
    this.helper = new Helper()
  },
  methods: {
    async getFavoris () {
      try {
        await EvenementsService.getFavoris(1).then(
          (res) => (this.favs = res.data.data)
        )
        this.error = null
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message)
        this.error = erreur
      }
    },
    async getEvenements (ids) {
      try {
        console.log(ids)
        await EvenementsService.getEvenementsByIds({ ids: ids }).then(
          (res) => (this.evenements = res.data.data)
        )
        this.error = null
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message)
        this.error = erreur
      }
    },
    async getUtilisateurs (hoteIds) {
      try {
        await AuthentificationService.getUtilisateurs({ ids: hoteIds }).then(
          (res) => (this.hotes = res.data.data)
        )
        this.error = null
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message)
        this.error = erreur
      }
    },
    hotePrenom (evntId) {
      const nom = this.hotes.find((h) => h.idUtilisateur == evntId).prenom
      if (nom == null) {
        return "N/A"
      } else {
        return nom
      }
    },
    getEvenementPhoto (photo) {
      if (photo == null) {
        return "0.png"
      } else {
        return photo
      }
    },
     async mettreFavoris(utilisateurId, evenementId) {
      try {
        await EvenementsService.mettreFavoris(utilisateurId, evenementId);
        this.error = null;
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message);
        this.error = erreur;
      }
    },
    async supprimerDeFavoris(utilisateurId, evenementId) {
      try {
        await EvenementsService.deleteFavoris(utilisateurId, evenementId);
        this.error = null;
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message);
        this.error = erreur;
      }
    },
    changerFavoris(id) {
      let scr = document.getElementById(id).src;
      if (scr.includes("heart.")) {
        this.mettreFavoris(1, id);
        document.getElementById(id).src = require("../assets/heart-f.png");
      } else {
        this.supprimerDeFavoris(1, id);
        document.getElementById(id).src = require("../assets/heart.png");
      }
    },
    redirect(id) {
      window.location.href = `/page-evenement/${id}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@s/evenements/evenements";
</style>
