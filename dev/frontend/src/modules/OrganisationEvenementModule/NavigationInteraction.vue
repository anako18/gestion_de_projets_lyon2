<template>
  <nav class="navigation">
    <img
      class="navigation__image"
      :src="require(`@ai/icone--${icone}.svg`)"
      alt="Icône de la navigation"
      @click="retourNavigation"
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
    },
    icone: {
      type: String,
      required: false,
      default: "fleche-gauche"
    }
  },
  methods: {
    retourNavigation () {
      this.$router.go(-1)
      this.$emit("click")
    }
  }
}
</script>

<style lang="scss">
  @import "@s/organisation-evenements/nav-filariane";
</style>
