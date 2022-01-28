<template>
  <main class="favoris-liste">
    <header class="header-logo">
      <img src="../assets/logo.png" />
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
            />
            <button class="favorite-button">
              <img
                :id="evenement.idEvenement"
                :src="require('../assets/heart-f.png')"
                width="40%"
                @click="changerFavoris(evenement.idEvenement)"
              >
            </button>
          </div>
          <div class="favoris-description">
            <p class="evenement-titre">
              {{ evenement.titre }}
            </p>
            <p class="avec">Avec {{ hotePrenom(evenement.idEvenement) }}</p>
            <span class="lieu">
              A {{ evenement.ville }} {{ evenement.prix }}€
            </span>
          </div>
        </div>
        <div class="favoris-row">
          <div class="favoris-date">
            {{ helper.afficherDate(evenement.date) }}
          </div>
          <div class="favoris-chaise">Reste 1 chaise</div>
        </div>
        <button class="favoris-button" @click="redirect(evenement.idEvenement)">
          Voir plus de detail
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import Helper from "../modules/EvenementModule/Helper.js"
import EvenementsService from "../modules/EvenementModule/EvenementsService.js"
import AuthentificationService from "../modules/CompteModule/AuthentificationModule/AuthentificationService.js"
export default {
  name: "Favoris",
  data() {
    return {
      favs: null,
      evenements: null,
      hotes: null,
      error: null,
      helper: null,
    };
  },
  mounted () {
    this.favorisListe().then((res) => {
      const evntsIds = this.favs.map((e) => e.idEvenement)
      this.getEvenements(evntsIds).then((res) => {
        const idHotes = this.evenements.map((e) => e.idHote)
        this.getUtilisateurs(idHotes)
      })
    })
    this.helper = new Helper()
  },
  methods: {
    async favorisListe () {
      try {
        await EvenementsService.favorisListe(
          window.localStorage.getItem("idUtilisateur")
        ).then((res) => (this.favs = res.data.data));
        this.error = null;
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message);
        this.error = erreur;
      }
    },
    async getEvenements(ids) {
      try {
        await EvenementsService.getEvenementsByIds({ ids: ids }).then(
          (res) => (this.evenements = res.data.data)
        );
        this.error = null;
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message);
        this.error = erreur;
      }
    },
    async getUtilisateurs (idHotes) {
      try {
        await AuthentificationService.getUtilisateurs({ ids: idHotes }).then(
          (res) => (this.hotes = res.data.data)
        );
        this.error = null;
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message);
        this.error = erreur;
      }
    },
    hotePrenom (evntId) {
     if (this.hotes) {
        const nom = this.hotes.find((h) => h.idUtilisateur == evntId).prenom
        if (nom != null) {
          return nom
        }
      }
      return "N/A"
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
        await EvenementsService.mettreFavoris(idUtilisateur, idEvenement)
        this.error = null
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message)
        this.error = erreur
      }
    },
    async supprimerDeFavoris (idUtilisateur, idEvenement) {
      try {
        await EvenementsService.supprimerFavoris(idUtilisateur, idEvenement)
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
        this.supprimerDeFavoris(
          window.localStorage.getItem("idUtilisateur"),
          id
        );
        document.getElementById(id).src = require("../assets/heart.png");
      }
    },
    redirect(id) {
      window.location.href = `/page-evenement/${id}`;
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@s/evenements/evenements";
</style>
