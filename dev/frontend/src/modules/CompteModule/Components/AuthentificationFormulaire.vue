<template>
  <main class="container">
    <h1>S'authentifier</h1>
    <form>
      <label for="email">Adresse email</label>
      <input
        id="email"
        v-model="email"
        type="email"
        name="email"
        class="form-control"
        placeholder="nom@adresse.com"
        required
      >
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
    </form>
    <button @click="authentification">
      Soumettre
    </button>
  </main>
</template>

<script>
import AuthentificationService from "../Services/AuthentificationService";
export default {
  name: "AuthentificationFormulaire",
  data () {
    return {
      email: "",
      password: "",
      erreur: null
    };
  },
  methods: {
    async authentification () {
      try {
        await AuthentificationService.authentification({
          email: this.email,
          password: this.password
        });
      } catch (erreur) {
        this.erreur = erreur.response.data.error;
      }
    }
  }
};
</script>
