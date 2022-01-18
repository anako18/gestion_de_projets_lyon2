<template>
  <main class="page-evenement">
    <header class="header-logo">
      <img src="../assets/logo.png">
    </header>
    <div class="evenement events-scroll-ecran">
      <div class="evenement-image">
        <img
          src="../assets/food.png"
          width="100%"
          height="70%"
        >
        <button class="favorite-button">
          <img src="../assets/heart.png" width="17%">
        </button>
      </div>
      <div class="evenement-content">
        <div class="profile-titre">
          <img
            class="profile-pic"
            src="../assets/person.png"
            width="20%"
            height="20%"
          >
          <div style="display: flex; flex-direction: column;">
            <span class="evenement-titre">
              {{ evenement.titre }}
            </span>
            <span class="lieu">Avec Demien</span>
          </div>
        </div>
        <div class="evenement-date-lieu" style="display: flex;">
          <div class="evenement-section first">
            <span class="evenement-date"><i class="icon-calendar" /> Demain 18/11 a 11h
            </span>
            <br>
            <span class="evenement-font-petit"> {{ evenement.ville }} a 11h</span>
          </div>
          <div class="evenement-section second">
            <span class="evenement-font-petit"> Durée: {{ evenement.duree }}h </span>
          </div>
          <div class="evenement-section third">
            <span class="evenement-font-petit">
              3 participants <br>
              Il reste encore 2 places
            </span>
            <span class="evenement-font-petit"> 13€ </span>
          </div>
        </div>
        <div class="event-description">
          <div class="a-propos">
            {{ evenement.description }}
          </div>
          <div class="realisation-du-repas">
            <span class="evenement-titre"> Réalisation du repas </span>
            <br>
            - Pâtes fraîches <br>
            - Sauce bolognaise <br>
            - Entrée avec mozzarella
          </div>
        </div>
        <div class="hote">
          <span class="evenement-titre"> A propos de moi </span>
          <br><br>
          Bonjour, je m'appelle Demian, je suis passionné par la cuisine et
          j'aime rencontrer de nouvelles personnes ! Je suis prêt à partager
          avec vous un grand nombre de mes recettes préférées, ainsi qu'à passer
          un bon moment avec une agréable conversation. Je suis une personne
          très sociable, j'aime le football et la gastronomie. Enchanté de vous
          rencontrer !
          <br><br>
          <a href="#"> <u> Poser une question a Demien </u> </a>
        </div>
        <div class="mes-evenements">
          <span class="evenement-titre"> Mes evenements </span>
          <br><br>
          J’ai participé à <b>20 événements</b>. <br>
          J’ai été <b>7 fois hôte</b> de la soirée.
        </div>
        <div class="informations-pratiques">
          <span class="evenement-titre"> Informations pratiques </span>
          <br><br>
          <u>Type d’événement </u>: Soirée / Dîner <br>
          <u>Type de cuisine </u>: Italien <br>
          <br>
          <span class="evenement-titre"> Accessibilité </span> <br>
          <br>
          <u>Transport en commun </u>: Oui <br>
          <u>PMR </u>: Oui <br>
          <u>Voiture </u>: Oui
        </div>
        <div class="participants">
          <span class="evenement-titre"> Participants </span> <br>
          <div class="participants-info">
            3 participants <br>
            Il reste encore 2 places
          </div>
        </div>
        <div class="paricipants-previews">
          <div class="paricipants-preview">
            <img
              class="profile-pic"
              src="../assets/person.png"
              width="40%"
              height="40%"
            >
            Demien
          </div>
          <div class="paricipants-preview">
            <img
              class="profile-pic"
              src="../assets/person.png"
              width="40%"
              height="40%"
            >
            Demien
          </div>
          <div class="paricipants-preview">
            <img
              class="profile-pic"
              src="../assets/person.png"
              width="40%"
              height="40%"
            >
            Demien
          </div>
        </div>
        <center>
          <button class="yellow-button">
            Participer
          </button>
        </center>
      </div>
    </div>
    <FooterComponent />
  </main>
</template>

<script>
import EvenementsService from "../modules/EvenementsModule/EvenementsService.js"
import AuthentificationService from "../modules/CompteModule/AuthentificationModule/AuthentificationService.js"
import FooterComponent from "../modules/Footer.vue"
export default {
  name: "EvenementPage",
  components: {
    FooterComponent
  },
  data () {
    return { evenement: null, hote: null, error: null }
  },
  mounted () {
    this.getEvenement(this.$route.params.id).then(res => this.getUtilisateur(this.evenement.hoteId))
  },
  methods: {
    async getEvenement (id) {
      try {
        await EvenementsService.evenement(id).then(res =>
          this.evenement = res.data.data
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
        await AuthentificationService.getUtilisateur(id).then(res => this.hote = res.data.data)
        this.error = null
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message)
        this.error = erreur
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@s/evenements/evenements";
</style>

