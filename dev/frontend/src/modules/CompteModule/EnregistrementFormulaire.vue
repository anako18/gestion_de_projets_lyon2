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
    <p>ou</p>
    <section class="enregistrement__classique">
      <form>
        <input
          v-model.trim="identifiants.email"
          class="champ--defaut"
          name="email"
          type="email"
          placeholder="Adresse email"
          required
        >
        <input
          v-model.trim="identifiants.mdp"
          class="champ--defaut"
          name="password"
          type="password"
          placeholder="Mot de passe"
          required
        >
        <input
          v-model.trim="identifiants.confMdp"
          class="champ--defaut"
          name="confirmation-password"
          type="password"
          placeholder="Confirmation de mot de passe"
          required
        >
        <input
          id=""
          type="checkbox"
          name="se-souvenir"
        >
        <label for="se souvenir">Se souvenir de moi</label>
      </form>
      <InterfaceBouton
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
import EnregistrementService from "./EnregistrementService"
import InterfaceBouton from "@m/InterfaceModule/InterfaceBouton"

export default {
  name: "EnregistrementFormulaire",
  components: {
    InterfaceBouton
  },
  data () {
    return {
      identifiants: {
        email: null,
        mdp: null,
        confMdp: null
      },
      erreurs: {
        email: null,
        mdp: null,
        confMdp: null
      },
      validation: false
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
      for (const i in this.erreurs) this.erreurs[i] = null
    }
  }
}
</script>
