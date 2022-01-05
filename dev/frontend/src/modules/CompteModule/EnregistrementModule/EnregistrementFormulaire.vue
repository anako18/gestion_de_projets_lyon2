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
          :value="identifiants.email"
          nom="email"
          texte="Adresse email"
          type="email"
          @handleChange="handleChange('email', $event)"
          @select="selectionChamp('email')"
          @click="selectionChamp('email')"
        />
        <!-- <input
          v-model.trim="identifiants.email"
          class="champ--defaut"
          name="email"
          type="email"
          placeholder="Adresse email"
          required
          @select="selectionChamp('email')"
          @click="selectionChamp('email')"
        > -->
        <input
          v-model.trim="identifiants.mdp"
          class="champ--defaut"
          name="mdp"
          type="password"
          placeholder="Mot de passe"
          required
          @select="selectionChamp('mdp')"
          @click="selectionChamp('mdp')"
        >
        <input
          v-model.trim="identifiants.confMdp"
          class="champ--defaut"
          name="confirmation-mdp"
          type="password"
          placeholder="Confirmation de mot de passe"
          required
          @select="selectionChamp('mdp')"
          @click="selectionChamp('mdp')"
        >
        <transition name="slide-fade" mode="out-in">
          <div
            v-if="selection === 'email'"
            key="0"
            class="enregistrement__classique__validations"
          >
            <ValidationInterface
              texte="Présent"
              :etat="verificationEtat('email', 'EMAIL_MANQUANT')"
            />
            <ValidationInterface
              texte="Long"
              :etat="verificationEtat('email', 'EMAIL_LONGUEUR')"
            />
            <ValidationInterface
              texte="Valide"
              :etat="verificationEtat('email', 'EMAIL_INVALIDE')"
            />
          </div>
          <div
            v-if="selection === 'mdp'"
            key="1"
            class="enregistrement__classique__validations"
          >
            <ValidationInterface
              texte="Présent"
              :etat="verificationEtat('mdp', 'MDP_MANQUANT')"
            />
            <ValidationInterface
              texte="Long"
              :etat="verificationEtat('mdp', 'MDP_LONGUEUR')"
            />
            <ValidationInterface
              texte="Confirmé"
              :etat="verificationEtat('confMdp', 'CONFMDP_INVALIDE')"
            />
          </div>
        </transition>
        <input
          type="checkbox"
          name="se-souvenir"
        >
        <label for="se souvenir">Se souvenir de moi</label>
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
        email: null,
        mdp: null,
        confMdp: null
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
    /**
     * Transmet les identifiants renseignés par l'utilisateur pour l'enregistrement
     * pour validation.
     */
    validationEnregistrement () {
      this.reinitialisationErreurs()
      try {
        EnregistrementService.validation(this.identifiants)
        this.validation = true
      } catch (erreur) {
        this.erreurs = erreur
        this.validation = false
      }
    },
    // FIXME: Adapter les erreurs renvoyées par le backend
    /**
     * Envoie les identifiants renseignés par l'utilisateur pour l'enregistrement
     * au backend.
     */
    async envoiEnregistrement () {
      console.log("envoi")
      try {
        await EnregistrementService.enregistrement({
          email: this.email,
          password: this.password
        })
        this.reinitialisationErreurs()
      } catch (erreur) {
        this.erreurs.push(erreur.response.data.message)
      }
    },
    /**
     *  Réinitialise le tableau d'erreurs
     */
    reinitialisationErreurs () {
      for (const i in this.erreurs) this.erreurs[i] = []
    },
    selectionChamp (champ) {
      this.selection = champ
    },
    verificationEtat (donnee, erreur) {
      if (!this.erreurs[donnee]) { return "invalide" }
      for (const e in this.erreurs[donnee]) {
        if (this.erreurs[donnee][e] === erreur) {
          return "invalide"
        }
      }
      return "valide"
    },
    handleChange (donnee, payload) {
      this.identifiants[donnee] = payload
      console.log(donnee)
    }
  }
}
</script>
