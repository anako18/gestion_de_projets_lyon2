<template>
  <main class="container">
    <h1>
      S'enregister
    </h1>
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
        Veuillez choisir un mot de passe compliqué.
      </div>
      <div v-html="erreur">
        <!-- {{ erreur }} -->
      </div>
    </form>
    <button @click="enregistrement">
      Soumettre
    </button>
  </main>
</template>

<script>
import EnregistrementService from "../Services/EnregistrementService";
export default {
  name: "EnregistrementFormulaire",
  data () {
    return {
      email: "",
      password: "",
      erreur: null
    };
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
        });
        this.erreur = null;
      } catch (erreur) {
        this.erreur = erreur.response.data.message;
      }
    }
  }
};
</script>
