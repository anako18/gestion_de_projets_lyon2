<template>
  <div class="authentification">
    <h1 class="style-7">
      Connexion
    </h1>
    <section class="authentification__google">
      <button
        class="bouton1 couleur--c6 icone--google bouton--connexion-google"
      >
        Continuer avec Google
      </button>
    </section>
    <p class="authentification__separateur">
      ou
    </p>
    <section class="authentification__classique">
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
      <button class="bouton1 couleur--c1" @click="authentification">
        Je me connecte
      </button>
      <p>
        Tu n'as pas de compte ?
        <router-link to="inscription">
          Se créer un compte
        </router-link>
      </p>
    </section>
  </div>
</template>

<script>
import AuthentificationService from "./AuthentificationService.js"
export default {
  name: "AuthentificationFormulaire",
  data () {
    return {
      email: "",
      password: "",
      erreur: null
    }
  },
  methods: {
    async authentification () {
      try {
        await AuthentificationService.authentification({
          email: this.email,
          password: this.password
        })
      } catch (erreur) {
        this.erreur = erreur.response.data.message
      }
    }
  }
}
</script>
