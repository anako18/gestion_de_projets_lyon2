<template>
  <div class="organisation-evenement-champ-modal">
    <button type="button">
      <div class="textuel">
        <span class="titre">{{ titre }}</span>
        <span class="valeur">{{ valeur }}</span>
      </div>
      <img src="@ai/icone--fleche-droite.svg">
    </button>
  </div>
</template>

<script>
export default {
  props: {
    titre: {
      type: String,
      required: true
    },
    valeur: {
      type: String,
      required: false,
      default: ""
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@s/organisation-evenements/bouton";
</style>
