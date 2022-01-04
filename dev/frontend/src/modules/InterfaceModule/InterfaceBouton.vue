<template>
  <button
    type="button"
    :class="classes"
    :disabled="!etat"
    @click="boutonClique"
  >
    {{ valeur }}
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    valeur: {
      type: String,
      default: "Texte",
      require: true
    },
    etat: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes: function () {
      return {
        "bouton-style-1": this.type === "inscription",
        "couleur-c1": this.type === "inscription",
        "icone-inscription": this.type === "inscription",
        "etat-desactive": !this.etat
      }
    }
  },
  methods: {
    boutonClique () {
      this.$emit("onClique")
    }
  }
}
</script>

<style lang="scss">
  @import "@s/interface/bouton";
</style>
