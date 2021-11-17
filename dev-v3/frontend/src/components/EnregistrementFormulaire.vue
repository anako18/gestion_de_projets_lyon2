<template>
  <div id="enregistrement" class="container">
    <h1 class="mb-5">S'enregister</h1>
    <form>
      <div class="mb-3 form-group">
        <label for="email" class="form-label">Adresse email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
          class="form-control"
          placeholder="nom@adresse.com"
          required
        />
      </div>
      <div class="mb-3 form-group">
        <label for="password" class="form-label">Mot de passe</label>
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
          class="form-control"
          placeholder="Mot de passe"
          required
        />
        <div class="form-text">Veuillez choisir un mot de passe compliqué.</div>
        <div class="error">
          {{ error }}
        </div>
      </div>
    </form>
    <button class="btn btn-primary" @click="register">Soumettre</button>
  </div>
</template>

<script lang="ts">
  import AuthentificationService from "@/services/AuthentificationService"

  export default {
    name: "EnregistrementFormulaire",
    data() {
      return {
        email: "",
        password: "",
        error: null
      }
    },
    methods: {
      async register() {
        try {
          await AuthentificationService.register({
            email: this.email,
            password: this.password
          })
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    }
  }
</script>

<style lang="scss" scoped></style>
