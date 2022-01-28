<template>
  <main class="favoris-liste">
    <header class="header-logo">
      <img src="../assets/logo.png">
    </header>
    <div class="section-titre">
      <span class="titre">Mes évènements</span>
    </div>
    <div class="tab">
      <button
        class="tablinks activetab"
        @click="afficheCategory($event, 'invite')"
      >
        Je suis invité
      </button>
      <button class="tablinks" @click="afficheCategory($event, 'hote')">
        Je suis hôte
      </button>
    </div>

    <div id="invite" class="tabcontent activetab">
      <div v-if="!isLoading">
        <div
          v-for="evenementInv in evenementsInvite"
          :key="evenementInv.idEvenement"
          class="favoris-liste"
        >
          <div class="mon-evenement-item">
            <div class="favoris-row">
              <div class="favoris-image">
              <img
                  :src="
                    require(`../assets/evenements/${getEvenementPhoto(
                      evenementInv.photo
                    )}`)"
                  class="favoris-image"
                > 
              </div>
              <div class="favoris-description">
                <p class="evenement-titre">
                  {{ evenementInv.titre }}
                </p>
                <p class="avec">
                  {{ helper.afficherDate(evenementInv.date) }} <br>
                  A {{ evenementInv.ville }}
                </p>
                <span class="lieu">Avec {{ hotePrenom(evenementInv.idEvenement) }}</span>
              </div>
            </div>
            <button class="favoris-button" @click="redirect(evenementInv.idEvenement)">
              Voir plus de detail
            </button>
          </div>
        </div>
      </div>
    </div>

    <div id="hote" class="tabcontent">
      <div v-if="!isLoading">
        <div
          v-for="evenementsHt in evenementsHote"
          :key="evenementsHt.idEvenement"
          class="favoris-liste"
        >
          <div class="mon-evenement-item">
            <div class="favoris-row">
              <div class="favoris-image">
               <img
                  :src="
                    require(`../assets/evenements/${getEvenementPhoto(
                      evenementsHt.photo
                    )}`)"
                  class="favoris-image"
                >
              </div>
              <div class="favoris-description">
                <p class="evenement-titre">
                  {{ evenementsHt.titre }}
                </p>
                <p class="avec">
                  {{ helper.afficherDate(evenementsHt.date) }} <br>
                  A {{ evenementsHt.ville }}
                </p>
                <span class="lieu">Avec {{ hotePrenom(evenementsHt.idEvenement) }}</span>
              </div>
            </div>
            <button class="favoris-button" @click="redirect(evenementsHt.idEvenement)">
              Voir plus de detail
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Helper from "../modules/EvenementModule/Helper.js"
import EvenementsService from "../modules/EvenementModule/EvenementsService.js"
import AuthentificationService from "../modules/CompteModule/AuthentificationModule/AuthentificationService.js"
export default {
  name: "MesEvenements",
  data () {
    return {
      isLoading: true,
      idUtilisateur: null,
      evenementsInvite: null,
      evenementsHote: null,
      hotes: null,
      error: null,
      helper: null
    }
  },
  async mounted () {
    this.idUtilisateur = window.localStorage.getItem("idUtilisateur")
    await this.evenementsInviteListe()
    const idHotes = this.evenementsInvite.map((e) => e.idHote)
    idHotes.push(this.idUtilisateur)
    await this.getUtilisateurs(idHotes)
    await this.evenementsHoteListe()
    this.helper = new Helper()
    this.isLoading = false
  },
  methods: {
    afficheCategory (event, category) {
      let i, tabcontent, tablinks
      tabcontent = document.getElementsByClassName("tabcontent")
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
      }
      tablinks = document.getElementsByClassName("tablinks")
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" activetab", "")
      }
      document.getElementById(category).style.display = "block"
      event.currentTarget.className += " activetab"
    },
    async evenementsInviteListe () {
      try {
        await EvenementsService.evenementsInviteListe(this.idUtilisateur).then(
          (res) => (this.evenementsInvite = res.data.data)
        )
        this.error = null
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message)
        this.error = erreur
      }
    },
    async evenementsHoteListe () {
      try {
        await EvenementsService.evenementsHoteListe(this.idUtilisateur).then(
          (res) => (this.evenementsHote = res.data.data)
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
    hotePrenom (evntId) {
      if (this.hotes != null) {
        const nom = this.hotes.find((h) => h.idUtilisateur === evntId)
        if (nom == null) {
          return "N/A"
        } else {
          return nom.prenom
        }
      } else {
        return "N/A"
      }
    },
    getEvenementPhoto (photo) {
      if (photo == null) {
        return "0.png"
      } else {
        return photo
      }
    },
    redirect (id) {
      window.location.href = `/page-evenement/${id}`
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@s/evenements/evenements";
</style>