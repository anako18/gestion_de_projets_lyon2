// TODO: Transformer les champs en composants
<template>
  <div class="enregistrement">
    <h1 class="style-7">
      Inscription
    </h1>
    <section class="enregistrement__google">
      <button
        class="bouton-style-1 couleur-c6 icone-google bouton-connexion-google"
      >
        Continuer avec Google
      </button>
    </section>
    <p class="enregistrement__separateur">
      ou
    </p>
    <section class="enregistrement__classique">
      <form class="enregistrement__classique__formulaire">
        <ChampInterface
          :etat="selectionEtatChamp('email')"
          :value="identifiants.email"
          texte="Adresse email"
          type="email"
          @click="gestionClic('lol', $event)"
        />
        <ChampInterface
          :etat="selectionEtatChamp('mdp')"
          :value="identifiants.mdp"
          texte="Mot de passe"
          type="password"
          @handleChange="handleChange('mdp', $event)"
          @select="selectionUtilisateurChamp('mdp')"
          @click="selectionUtilisateurChamp('mdp')"
        />
        <ChampInterface
          :etat="selectionEtatChamp('confMdp')"
          :value="identifiants.confMdp"
          texte="Confirmation mot de passe"
          type="password"
          @handleChange="handleChange('confMdp', $event)"
          @select="selectionUtilisateurChamp('confMdp')"
          @click="selectionUtilisateurChamp('confMdp')"
        />
        <transition name="slide-fade" mode="out-in">
          <div
            v-if="selection === 'email'"
            key="0"
            class="enregistrement__classique__validations"
          >
            <ValidationInterface
              texte="Présent"
              :etat="verificationErreurChamp('email', 'EMAIL_MANQUANT')"
            />
            <ValidationInterface
              texte="Long"
              :etat="verificationErreurChamp('email', 'EMAIL_LONGUEUR')"
            />
            <ValidationInterface
              texte="Valide"
              :etat="verificationErreurChamp('email', 'EMAIL_INVALIDE')"
            />
          </div>
          <div
            v-if="selection === 'mdp' || selection === 'confMdp'"
            key="1"
            class="enregistrement__classique__validations"
          >
            <ValidationInterface
              texte="Présent"
              :etat="verificationErreurChamp('mdp', 'MDP_MANQUANT')"
            />
            <ValidationInterface
              texte="Long"
              :etat="verificationErreurChamp('mdp', 'MDP_LONGUEUR')"
            />
            <ValidationInterface
              texte="Confirmé"
              :etat="verificationErreurChamp('confMdp', 'CONFMDP_INVALIDE')"
            />
          </div>
        </transition>
        <input
          type="checkbox"
          name="se-souvenir"
        >
        <label for="se-souvenir">Se souvenir de moi</label>
      </form>
      <BoutonInterface
        valeur="Je m'inscris"
        type="inscription"
        :etat="validation"
        @onClique="envoiEnregistrement"
      />
      <p>
        Tu as déjà un compte ?
        <router-link to="connexion">
          Me connecter
        </router-link>
      </p>
    </section>
  </div>
</template>

<script>
import EnregistrementService from "./EnregistrementService.js"
import EnregistrementEvenements from "./EnregistrementEvenements.js"

import BoutonInterface from "@m/InterfaceModule/BoutonInterface.vue"
import ChampInterface from "@m/InterfaceModule/ChampInterface.vue"
import ValidationInterface from "@m/InterfaceModule/ValidationInterface.vue"

export default {
  name: "EnregistrementFormulaire",
  components: {
    BoutonInterface,
    ChampInterface,
    ValidationInterface
  },
  data () {
    return {
      identifiants: {
        email: "",
        mdp: "",
        confMdp: ""
      },
      erreurs: {
        email: [],
        mdp: [],
        confMdp: []
      },
      validation: false,
      selection: "email"
    }
  },
  watch: {
    identifiants: { handler: "validationEnregistrement", deep: true }
  },
  mounted () {
    this.validationEnregistrement()
  },
  methods: {
    validationEnregistrement: EnregistrementService.validationEnregistrement,
    reinitialisationErreurs: EnregistrementService.reinitialisationErreurs,
    selectionUtilisateurChamp: EnregistrementService.selectionUtilisateurChamp,
    verificationErreurChamp: EnregistrementService.verificationErreurChamp,
    selectionEtatChamp: EnregistrementService.selectionEtatChamp,
    // FIXME: Adapter les erreurs renvoyées par le backend
    /**
     * Envoie les identifiants renseignés par l'utilisateur pour l'enregistrement
     * au backend.
     */
    async envoiEnregistrement () {
      try {
        await EnregistrementService.enregistrement(this.identifiants)
        this.reinitialisationErreurs()
      } catch (erreur) {
        this.erreurs.push(erreur.response.data.message)
      }
    },
    /**
     * @param {string} donnee
     * @param {Array} payload
     */
    handleChange (donnee, payload) {
      console.log(payload)
      this.identifiants[donnee] = payload
    },
    gestionClic (lol, payload) {
      console.log(payload)
    }
  }
}
</script>
