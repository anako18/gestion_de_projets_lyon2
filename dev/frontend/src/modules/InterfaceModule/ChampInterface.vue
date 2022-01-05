<template>
  <input
    :class="classes"
    :name="nom"
    :placeholder="texte"
    :type="type"
    :value="value"
    class="champ"
    @input="handleChange"
  >
</template>

<script>
export default {
  props: {
    texte: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    etat: {
      type: String,
      default: "repos"
    },
    value: {
      type: String,
      required: true
    },
    nom: {
      type: String,
      default: "Champ"
    }
  },
  computed: {
    classes: function () {
      return {
        "etat-repos": this.etat === "repos",
        "etat-actif": this.etat === "actif",
        "etat-erreur": this.etat === "erreur"
      }
    }
  },
  methods: {
    handleChange (e) {
      this.$emit("handleChange", e.target.value)
    }
  }
}
</script>

<style lang="scss">
  @import "@s/interface/champ";
</style>
