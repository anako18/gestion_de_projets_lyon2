<template>
  <main>
    <header class="header-logo">
      <img src="../assets/logo.png">
    </header>
    <div class="confirmation">
      <div class="confirmations">
        <span class="confirmation-titre">
          {{ selectionTextes.titre }}
        </span>
      </div>
      <div class="confirmation-section-vert">
        {{ selectionTextes.message }}
      </div>
      <div class="confirmations">
        {{ selectionTextes.rappel }}
      </div>
      <div class="confirmation-section-center">
        <router-link
          to="/mes-evenements"
        >
          <button class="confirmation-button" type="button">
            Voir mes événements
          </button>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "EvenementConfirmationVue",
  data () {
    const params = this.$route
    return {
      type: params.type
    }
  },
  computed: {
    selectionTextes: function () {
      switch (this.type) {
        case ("creation-evenement"):
          return {
            titre: "Confirmation de création",
            message: "Super ! Ton évènement a bien été créé.",
            rappel: "Tu seras tenu au courant dès que quelqu'un aura rejoint ce dernier."
          }
        case ("participation-evenement"):
          return {
            titre: "Confirmation de participation",
            message: "Super ! Ta participation a bien été prise en compte.",
            rappel: "On t'attend avec impatience !"
          }
        default:
          return {
            titre: "Confirmation de création",
            message: "Super ! Ton évènement a bien été créé.",
            rappel: "Tu seras tenu au courant dès que quelqu'un aura rejoint ce dernier."
          }
      }
    }
  },
  created () {
    this.verifParams()
  },
  methods: {
    verifParams () {
      console.log(this.$data)
      console.log(this.$params)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@s/evenements/evenements";
</style>
