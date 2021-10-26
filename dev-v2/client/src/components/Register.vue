<template>
  <div class="container">
    <h1 class="mb-5">S'enregister</h1>
    <form>
      <div class="mb-3 form-group">
        <label for="email" class="form-label">Adresse email</label>
        <input
          type="email"
          name="email"
          id="email"
          class="form-control"
          placeholder="nom@adresse.com"
          v-model="email"
          required
        />
      </div>
      <div class="mb-3 form-group">
        <label for="password" class="form-label">Mot de passe</label>
        <input
          type="password"
          name="password"
          id="password"
          class="form-control"
          placeholder="Mot de passe"
          v-model="password"
          required
        />
        <div class="form-text">Veuillez choisir un mot de passe compliqué.</div>
      </div>
    </form>
    <button class="btn btn-primary" @click="register">Soumettre</button>
  </div>
</template>

<script>
import AuthentificationService from "@/services/AuthentificationService";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      await AuthentificationService.register({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>