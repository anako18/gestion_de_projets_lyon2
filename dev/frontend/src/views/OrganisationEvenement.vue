<template>
  <main class="organisation-evenement">
    <div class="evenement" :class="{ 'modal-active': modalActive === true }">
      <EnTeteInterface />
      <NavigationInteraction
        texte="J'organise un évènement"
        icone="validation--nop"
      />
      <section class="evenement__illustration">
        <div class="evenement__illustration__texte">
          <p>
            Pour <strong>illustrer votre évènement</strong>, ajoute une de tes photos
            ou encore une image libre de droits.
          </p>
        </div>
        <div class="evenement__illustration__image">
          <img :src="urlImage" alt="Placeholder illustration de l'évènement">
        </div>
        <BoutonInterface
          :etat="true"
          valeur="Ajouter une photo"
          icone="plus"
          type="ajouter-photo"
          @aClique="declencheChoixPhoto"
        />
        <input
          id="fileInput"
          ref="fileInput"
          type="file"
          style=" width: 0; height: 0;visibility: hidden;"
          accept="image/*"
          @change="photoChoisie"
        >
      </section>
      <section class="evenement__informations">
        <ChampInterface
          id="evenement-titre"
          label="Titre"
          marge="6"
          texte-substitution="Le nom de l'évènement (p.ex. Chili con Carne)."
          :valeur="evenementInformations.titre"
          type="text"
          @handleChange="handleChange('titre', $event)"
        />
        <ChampInterface
          id="evenement-description-evenement"
          label="Description de l'évènement"
          marge="6"
          texte-substitution="Une brève description de l'évènement."
          type="textarea"
          @handleChange="handleChange('descriptionEvenement', $event)"
        />
        <ChampInterface
          id="evenement-description-preparations"
          label="Description des préparations"
          marge="6"
          texte-substitution="Détaille les préparations que vous réaliserez ensemble."
          type="textarea"
          @handleChange="handleChange('descriptionPreparations', $event)"
        />
        <SelecteurInterface
          nom="evenement-nombre-places"
          label="Combien de places ?"
          @effectuerChoix="handleChange('nombrePlaces', $event)"
        />
        <router-link
          :to="{name: 'Type d\'évèmenent', params: {
            typeModal: 'typeEvenement',
            texte: 'Type d\'évènement',
            selectionRecue: evenementInformations.typeEvenement
          }}"
          @click.native="changementEtatModal"
        >
          <ChampModalInterface titre="Type d'évènement" :valeur="evenementInformations.typeEvenement" />
        </router-link>
        <router-link
          :to="{name: 'Type de cuisine', params: {
            typeModal: 'typeCuisine',
            texte: 'Type de cuisine',
            selectionRecue: evenementInformations.typeCuisine
          }}"
          @click.native="changementEtatModal"
        >
          <ChampModalInterface
            titre="Type de cuisine"
            :valeur="evenementInformations.typeCuisine"
            style="margin-bottom: 26px;"
          />
        </router-link>
        <ChampInterface
          id="evenement-description-heure"
          label="Date"
          texte-substitution=""
          type="date"
          @handleChange="handleChange('date', $event)"
        />
        <ChampInterface
          id="evenement-description-date"
          label="Heure"
          texte-substitution=""
          type="time"
          @handleChange="handleChange('heure', $event)"
        />
        <ChampInterface
          id="evenement-description-duree"
          label="Durée"
          texte-substitution="La durée de l'évènement au format XhYY"
          type="text"
          @handleChange="handleChange('duree', $event)"
        />
        <router-link
          :to="{name: 'Lieu', params: {
            typeModal: 'lieu',
            texte: 'Lieu',
            selectionRecue: evenementInformations.lieu
          }}"
          @click.native="changementEtatModal"
        >
          <ChampModalInterface titre="Lieu" :valeur="lieuRassemble" />
        </router-link>
        <router-link
          :to="{name: 'Accessibilité', params: {
            typeModal: 'accessibilite',
            texte: 'Accessibilité',
            selectionRecue: evenementInformations.accessibilite
          }}"
          @click.native="changementEtatModal"
        >
          <ChampModalInterface
            titre="Accessibilité"
            :valeur="accessibiliteRassemble"
            style="margin-bottom: 26px;"
          />
        </router-link>
        <ChampInterface
          id="evenement-prix-personne"
          label="Prix par personne"
          marge="6"
          texte-substitution="Le prix par personne (p. ex. 9€)."
          type="number"
          @handleChange="handleChange('prix', $event)"
        />
      </section>
      <div class="evenement__bouton">
        <BoutonInterface
          valeur="Créer l'évènement"
          type="ajouter-photo"
          :etat="validationInformations"
          @aClique="envoiCreerEvenement"
        />
      </div>
    </div>
    <transition name="slide-fade">
      <router-view @click="changementEtatModal($event)" />
    </transition>
  </main>
</template>

<script>
import EnTeteInterface from "@m/InterfaceModule/EnTeteInterface.vue"
import BoutonInterface from "@m/InterfaceModule/BoutonInterface.vue"
import NavigationInteraction from "@m/EvenementModule/OrganisationModule/NavigationInteraction.vue"
import ChampInterface from "@m/EvenementModule/OrganisationModule/ChampInterface.vue"
import SelecteurInterface from "@m/EvenementModule/OrganisationModule/SelecteurInterface.vue"
import ChampModalInterface from "@m/EvenementModule/OrganisationModule/ChampModalInterface.vue"
import OrganisationEvenementService from "@m/EvenementModule/OrganisationModule/OrganisationEvenementService.js"
import TeleversementService from "@m/TeleversementModule/TeleversementService.js"

export default {
  name: "OrganisationEvenementVue",
  components: {
    EnTeteInterface,
    NavigationInteraction,
    BoutonInterface,
    ChampInterface,
    SelecteurInterface,
    ChampModalInterface
  },
  data () {
    return {
      modalActive: false,
      evenementInformations: {
        titre: undefined,
        descriptionEvenement: undefined,
        descriptionPreparations: undefined,
        nombrePlaces: 0,
        typeEvenement: undefined,
        typeCuisine: undefined,
        date: undefined,
        heure: undefined,
        duree: undefined,
        lieu: {
          "numero-rue": "",
          ville: "",
          codePostal: ""
        },
        accessibilite: [],
        prix: undefined,
        photo: undefined
      },
      image: "",
      urlImage: ""
    }
  },
  computed: {
    lieuRassemble: function () {
      return `${this.evenementInformations.lieu["numero-rue"]}
      ${this.evenementInformations.lieu.ville}
      ${this.evenementInformations.lieu.codePostal}`
    },
    accessibiliteRassemble: function () {
      let chaine = ""
      const accessibilite = this.evenementInformations.accessibilite
      for (const index in accessibilite) {
        if (accessibilite[index] === "Transports en commun") {
          chaine += "Transports, "
        } else if (accessibilite[index] === "Accessible PMR") {
          chaine += "PMR, "
        } else {
          chaine += `${accessibilite[index]}, `
        }
      }
      chaine = chaine.slice(0, -2)
      return chaine
    },
    validationInformations: function () {
      for (const valeur in this.evenementInformations) {
        if (this.evenementInformations[valeur] === undefined) {
          return false
        }
      }
      return true
    }
  },
  methods: {
    changementEtatModal (evenement) {
      const donnee = evenement.donnee
      const type = evenement.type
      if (this.evenementInformations[type] !== null && (type !== "click")) {
        this.evenementInformations[type] = donnee
      }
      this.modalActive = !this.modalActive
      this.scrollPosition = window.scrollX
    },
    handleChange (donnee, payload) {
      this.evenementInformations[donnee] = payload
    },
    /**
     * Ouvre le sélecteur de fichiers de l'utilisateur
     */
    declencheChoixPhoto () {
      this.$refs.fileInput.click()
    },
    photoChoisie (evenement) {
      const fichiers = evenement.target.files
      const lecteurDeFichiers = new FileReader()
      const formData = new FormData()

      this.image = fichiers[0]
      lecteurDeFichiers.addEventListener("load", () => {
        this.urlImage = lecteurDeFichiers.result
      })
      lecteurDeFichiers.readAsDataURL(fichiers[0])

      formData.append("file", this.image)
      this.envoieTeleversement(formData)
        .then((resultat) => this.evenementInformations.photo = resultat.data.fichier)
        .catch((erreur) => console.log("error lors de l'upload", erreur))
      // this.download("1643408477271.png")
      //   .then((resultat) => this.urlImage = resultat.request.responseURL)
    },
    envoiCreerEvenement: OrganisationEvenementService.envoiCreerEvenement,
    creerEvenement: OrganisationEvenementService.creerEvenement,
    envoieTeleversement: TeleversementService.envoieTeleversement,
    recupereTeleversement: TeleversementService.recupereTeleversement
  }
}
</script>

<style lang="scss" scoped>
  @import "@s/organisation-evenements/commun";
</style>
