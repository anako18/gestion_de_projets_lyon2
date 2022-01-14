<template>
  <div class="validation" :class="classes">
    <span class="validation__icone" />
    <span class="validation__texte">{{ texte }}</span>
  </div>
</template>

<script>
export default {
  props: {
    texte: {
      type: String,
      required: true
    },
    etat: {
      type: String,
      default: "invalide"
    }
  },
  computed: {
    classes: function () {
      return {
        "etat-valide": this.etat === "valide",
        "etat-invalide": this.etat === "invalide"
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@s/interface/validation";
</style>
