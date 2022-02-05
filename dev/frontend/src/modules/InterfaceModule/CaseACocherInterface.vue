<template>
  <div
    class="case-a-cocher"
  >
    <input
      :id="nom"
      type="checkbox"
      :name="nom"
      required
      @click="gestionChangement"
    >
    <img
      src="@ai/icone--rond.svg"
      class="nok"
      @click="gestionChangement"
    >
    <img
      src="@ai/icone--rond--ok.svg"
      class="ok"
      @click="gestionChangement"
    >
    <label :for="nom">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    nom: {
      type: String,
      default: "case-a-cocher",
      required: true
    },
    label: {
      type: String,
      default: "Label",
      required: true
    }
  },
  methods: {
    gestionChangement (e) {
      this.$emit("aClique", this.nom)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@s/interface/caseacocher";
</style>
