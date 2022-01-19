<template>
  <div class="notification">
    <p class="notification__message">
      {{ valeur }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    valeur: {
      type: String,
      default: "Texte",
      required: true
    },
    etat: {
      type: String,
      default: ""
    }
  },
  methods: {
    gestionClic () {
      this.$emit("aClique")
    }
  }
}
</script>

<style lang="scss">
  @import "@s/interface/notification";
</style>
