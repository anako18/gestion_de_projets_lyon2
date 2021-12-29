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
          v-model="email"
          name="email"
          type="email"
          placeholder="Adresse email"
          required
        >
        <input
          v-model="password"
          name="password"
          type="password"
          placeholder="Mot de passe"
          required
        >
        <input
          name="confirmation-password"
          type="password"
          placeholder="Confirmation de mot de passe"
          required
        >
        <p v-if="erreurs.length">
          <span v-for="erreurValidation in erreurs" :key="erreurValidation.id">
            {{ erreurValidation }}
          </span>
        </p>
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
        @onClique="validationEnregistrement"
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
      email: "",
      password: "",
      erreurs: []
    }
  },
  methods: {
    /**
     * Transmet les identifiants renseignés par l'utilisateur pour l'enregistrement
     * pour validation.
     */
    async validationEnregistrement () {
      try {
        await EnregistrementService.validation({
          email: this.email,
          password: this.password
        })
        this.erreurs = []
        this.envoiEnregistrement()
      } catch (erreur) {
        this.erreurs = erreur
      }
    },
    /**
     * Envoie les identifiants renseignés par l'utilisateur pour l'enregistrement
     * au backend.
     */
    async envoiEnregistrement () {
      try {
        await EnregistrementService.enregistrement({
          email: this.email,
          password: this.password
        })
        this.erreur = null
      } catch (erreur) {
        this.erreur = erreur.response.data.message
      }
    }
  }
}
</script>
