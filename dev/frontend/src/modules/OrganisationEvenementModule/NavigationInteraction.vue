<template>
  <nav class="navigation">
    <img
      class="navigation__image"
      src="@ai/icone--validation--nop.svg"
      alt="Icône de la navigation"
    >
    <span class="navigation__texte">{{ texte }}</span>
  </nav>
</template>

<script>
export default {
  props: {
    texte: {
      type: String,
      required: true,
      default: "Navigation"
    }
  }
}
</script>

<style lang="scss">
  @import "@s/organisation-evenements/nav-filariane";
</style>
