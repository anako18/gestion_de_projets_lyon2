<template>
  <main>
    <header class="header-logo">
      <img src="../assets/logo.png">
    </header>
    <div class="confirmation">
      <div class="confirmations">
        <span class="confirmation-titre">Confirmation de participation</span>
      </div>
      <div class="confirmation-section-vert">
        Super ! Ta participation a bien été prise en compte.
      </div>
      <div class="confirmations">
        On t'attend avec impatience !
      </div>
      <div class="confirmation-section-center">
        <button class="confirmation-button" @click="redirect()">
          Voir mes événements
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "EvenementConfirmationParticipationVue",
  methods: {
    redirect () {
      window.location.href = `/mes-evenements`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@s/evenements/evenements";
</style>
