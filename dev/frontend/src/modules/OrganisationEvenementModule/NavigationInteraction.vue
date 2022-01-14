<template>
  <nav class="navigation">
    <img
      class="navigation__image"
<<<<<<< HEAD
      src="@ai/icone--validation--nop.svg"
      alt="Icône de la navigation"
=======
      :src="require(`@ai/icone--${icone}.svg`)"
      alt="Icône de la navigation"
      @click="retourNavigation"
>>>>>>> 00b0b9e (Front : Wow)
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
<<<<<<< HEAD
=======
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
>>>>>>> 00b0b9e (Front : Wow)
    }
  }
}
</script>

<style lang="scss">
  @import "@s/organisation-evenements/nav-filariane";
</style>
