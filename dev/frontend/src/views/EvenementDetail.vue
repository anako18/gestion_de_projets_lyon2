<template>
  <main class="page-evenement">
    <header class="header-logo">
      <img src="../assets/logo.png">
    </header>
    <div v-if="!isLoading">
      <div class="evenement events-scroll-ecran">
        <div class="evenement-image">
          <img
            :src="
              require(`../assets/evenements/${getEvenementPhoto(
                evenement.photo
              )}`)
            "
            width="100%"
          >
          <button class="favorite-button">
            <img
              :id="evenement.idEvenement"
              :src="
                evenement.favoris === 1
                  ? require('../assets/heart-f.png')
                  : require('../assets/heart.png')
              "
              width="17%"
              @click="changerFavoris(evenement.idEvenement)"
            >
          </button>
        </div>
        <div class="evenement-content">
          <div class="profile-titre">
            <img
              class="profile-pic"
              :src="require(`../assets/avatars/${getHoteAvatar()}`)"
              width="20%"
              height="20%"
            >
            <div style="display: flex; flex-direction: column">
              <span class="evenement-titre">
                {{ evenement.titre }}
              </span>
              <span class="lieu">Avec {{ hote.prenom }}</span>
            </div>
          </div>
          <div class="evenement-date-lieu" style="display: flex">
            <div class="evenement-section first">
              <span class="evenement-date"><i class="icon-calendar" />{{
                helper.afficherDate(evenement.date)
              }}
              </span>
              <br>
              <span class="evenement-font-petit"> {{ evenement.ville }}</span>
            </div>
            <div class="evenement-section second">
              <span class="evenement-font-petit">
                Durée: {{ evenement.duree }}h
              </span>
            </div>
            <div class="evenement-section third">
              <span class="evenement-font-petit">
                {{ participants.length }} participants <br>
                Il reste encore
                {{ evenement.capacite - participants.length }} places
              </span>
              <br>
              <span class="evenement-font-petit"> {{ evenement.prix }}€ </span>
            </div>
          </div>
          <div class="event-description">
            <div class="a-propos">
              {{ evenement.description }}
            </div>
            <div class="realisation-du-repas">
              <span class="evenement-titre"> Réalisation du repas </span>
              <br>
              {{ evenement.descriptionPreparations }}
            </div>
          </div>
          <div class="hote">
            <span class="evenement-titre"> A propos de moi </span>
            <br><br>
            {{ hote.description }}
            <br><br>
            <a href="#">
              <u> Poser une question à {{ hote.prenom }} </u>
            </a>
          </div>
          <div class="mes-evenements">
            <span class="evenement-titre"> Mes événements </span>
            <br><br>
            J’ai participé à <b>20 événements</b>. <br>
            J’ai été <b>7 fois hôte</b> de la soirée.
          </div>
          <div class="informations-pratiques">
            <span class="evenement-titre"> Informations pratiques </span>
            <br><br>
            <u>Type d’événement </u>: {{ evenement.typeEvenement }} <br>
            <u>Type de cuisine </u>: {{ evenement.typeCuisine }} <br>
            <br>
            <span class="evenement-titre"> Accessibilité </span> <br>
            <br>
            <u>Transport en commun </u>:
            {{ afficherOuiNon(evenement.accessTransportCommun) }} <br>
            <u>PMR </u>: {{ afficherOuiNon(evenement.accessPMR) }} <br>
            <u>Voiture </u>: {{ afficherOuiNon(evenement.accessVoiture) }}
          </div>
          <div class="participants">
            <span class="evenement-titre"> Participants </span> <br>
            <div class="participants-info">
              {{ participants.length }} participants <br>
              Il reste encore
              {{ evenement.capacite - participants.length }} places
            </div>
          </div>
          <div
            v-for="participant in participants"
            :key="participant.idUtilisateur"
            class="paricipants-previews"
          >
            >
            <div class="paricipants-preview">
              <img
                class="profile-pic"
                :src="require(`../assets/avatars/${participant.photo}`)"
                width="40%"
                height="40%"
              >
              {{ participant.prenom }}
            </div>
          </div>
        </div>
        <center>
          <button
            class="yellow-button"
            :disabled="evenement.idHote == idUtilisateur"
            @click="participerEnEvenement(evenement.idEvenement)"
          >
            Participer
          </button>
        </center>
      </div>
    </div>
  </main>
</template>

<script>
import EvenementService from "@m/EvenementModule/EvenementService.js"
import AuthentificationService from "@m/CompteModule/AuthentificationModule/AuthentificationService.js"
import Helper from "@m/EvenementModule/Helper.js"
export default {
  name: "EvenementDetailVue",
  data () {
    return {
      isLoading: true,
      evenement: null,
      hote: null,
      error: null,
      idUtilisateur: null,
      participants: null
    }
  },
  async mounted () {
    this.idUtilisateur = window.localStorage.getItem("idUtilisateur")
    await this.getEvenement(this.$route.params.id)
    await this.getUtilisateur(this.evenement.idHote)
    await this.getParicipants()
    this.helper = new Helper()
    this.isLoading = false
  },
  methods: {
    async getEvenement (id) {
      try {
        await EvenementService.evenement(id).then(
          (res) => (this.evenement = res.data.data)
        )
        this.error = null
        console.log(this.evenement)
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message)
        this.error = erreur
      }
    },
    async getUtilisateur (id) {
      try {
        await AuthentificationService.getUtilisateur(id).then(
          (res) => (this.hote = res.data.data)
        )
        this.error = null
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message)
        this.error = erreur
      }
    },
    async getParicipants () {
      try {
        await AuthentificationService.getUtilisateurs({
          ids: this.evenement.idsParticipants
        }).then((res) => (this.participants = res.data.data))
        this.error = null
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message)
        this.error = erreur
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
    async participerEnEvenement (idEvenement) {
      try {
        await EvenementService.participerEnEvenement({
          idUtilisateur: this.idUtilisateur,
          idEvenement: idEvenement
        }).then((res) => (window.location.href = "/confirmation"))
        this.error = null
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message)
        this.error = erreur
      }
    },
    afficherOuiNon (flag) {
      return flag === 0 ? "Non" : "Oui"
    },
    getEvenementPhoto (photo) {
      if (photo === null) {
        return "0.png"
      } else {
        return photo
      }
    },
    getHoteAvatar () {
      if (this.hote == null || this.hote.photo == null) {
        return "0.png"
      } else {
        return this.hote.photo
      }
    },
    changerFavoris (id) {
      const scr = document.getElementById(id).src
      if (scr.includes("heart.")) {
        this.mettreFavoris(this.idUtilisateur, id)
        document.getElementById(id).src = require("../assets/heart-f.png")
      } else {
        this.supprimerDeFavoris(this.idUtilisateur, id)
        document.getElementById(id).src = require("../assets/heart.png")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@s/evenements/evenements";
</style>
