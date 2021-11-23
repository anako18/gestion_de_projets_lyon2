<template>
  <div class="container">
    <h1>
      S'authentifier
    </h1>
    <form>
      <div>
        <label for="email">Adresse email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
          placeholder="nom@adresse.com"
          required
        >
      </div>
      <div>
        <label for="password">Mot de passe</label>
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
          placeholder="Mot de passe"
          required
        >
        <div>
          {{ erreur }}
        </div>
      </div>
    </form>
    <button class="btn btn-primary" @click="authentification">
      Soumettre
    </button>
  </div>
</template>

<script>
import AuthentificationService from '../Services/AuthentificationService'
export default {
  name: 'AuthentificationFormulaire',
  data () {
    return {
      email: '',
      password: '',
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
        this.erreur = erreur.response.data.erreur
      }
    }
  }
}
</script>
