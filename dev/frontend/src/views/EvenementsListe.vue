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
            :src="require(`../assets/evenements/${getEvenementPhoto(evenement.photo)}`)"
            width="100%"
            height="50%"
          >
          <button class="favorite-button">
            <img
              @click="changerFavoris(evenement.idEvenement)"
              v-bind:id="evenement.idEvenement"
              :src="favorisImage(evenement.favoris)"
              width="17%"
            />
          </button>
        </div>
        <div class="evenement-content">
          <div class="profile-titre">
            <img
              class="profile-pic"
              :src="
                require(`../assets/avatars/${getHoteAvatar(
                  evenement.idEvenement
                )}`)
              "
              width="20%"
              height="20%"
            >
            <span class="evenement-titre">
              {{ evenement.titre }}
            </span>
          </div>
          <div class="evenement-info">
            <span class="evenement-date"
              ><i class="icon-calendar"></i>
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
    <FooterComponent />
  </main>
</template>

<script>
import FiltersComponents from "../modules/EvenementsModule/Filters.vue";
import Helper from "../modules/EvenementsModule/Helper.js";
import FooterComponent from "../modules/Footer.vue";
import EvenementsService from "../modules/EvenementsModule/EvenementsService.js";
import AuthentificationService from "../modules/CompteModule/AuthentificationModule/AuthentificationService.js";
import EvenementComponent from "../modules/EvenementsModule/Evenement.vue";


export default {
  name: "EvenementsListe",
  components: {
    FiltersComponents,
    FooterComponent,
  },
  data () {
    return { evenements: null, hotes: null, error: null, helper: null }
  },
  mounted () {
    this.getEvenements().then((res) => {
      let idHotes = this.evenements.map((e) => e.idHote);
      this.getUtilisateurs(idHotes);
    });
    this.helper = new Helper();
  },
  methods: {
    async getEvenements () {
      try {
        await EvenementsService.getEvenements().then(
          (res) => (this.evenements = res.data.data)
        )
        this.error = null
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message)
        this.error = erreur
      }
    },
    async getUtilisateurs(idHotes) {
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
    getHoteAvatar(evntId) {
      let photo = this.hotes.find((h) => h.idUtilisateur == evntId).photo;
      if (photo == null) {
        return "0.png";
      } else {
        return photo;
      }
    },
    getEvenementPhoto(photo) {
      if (photo == null) {
        return "0.png";
      } else {
        return photo;
      }
    },
    async mettreFavoris(idUtilisateur, idEvenement) {
      try {
        await EvenementsService.mettreFavoris(idUtilisateur, idEvenement);
        this.error = null;
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message);
        this.error = erreur;
      }
    },
    async supprimerDeFavoris(idUtilisateur, idEvenement) {
      try {
        await EvenementsService.supprimerFavoris(idUtilisateur, idEvenement);
        this.error = null;
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message);
        this.error = erreur;
      }
    },
    changerFavoris(id) {
      let scr = document.getElementById(id).src;
      if (scr.includes("heart.")) {
        this.mettreFavoris(window.localStorage.getItem("idUtilisateur"), id);
        document.getElementById(id).src = require("../assets/heart-f.png");
      } else {
        this.supprimerDeFavoris(window.localStorage.getItem("idUtilisateur"), id);
        document.getElementById(id).src = require("../assets/heart.png");
      }
    },
    redirect(id) {
      window.location.href = `/page-evenement/${id}`;
    },
    favorisImage(flag) {
      return flag == 1
        ? require("../assets/heart-f.png")
        : require("../assets/heart.png");
    },
  },
    FooterComponent,
    EvenementComponent,
  };
</script>

<style lang="scss" scoped>
@import "@s/evenements/evenements";
</style>
