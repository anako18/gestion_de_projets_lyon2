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
        <p>
          {{ erreur }}
        </p>
        <input
          id=""
          type="checkbox"
          name="se-souvenir"
        >
        <label for="se souvenir">Se souvenir de moi</label>
      </form>
      <button class="bouton-style-1 couleur-c1" @click="enregistrement">
        Je m'inscris
      </button>
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
export default {
  name: "EnregistrementFormulaire",
  data () {
    return {
      email: "",
      password: "",
      erreur: null
    }
  },
  methods: {
    /**
     * **Enregistre un nouvel Utilisateur**
     *
     *  Envoie les données au backend.
     */
    async enregistrement () {
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
