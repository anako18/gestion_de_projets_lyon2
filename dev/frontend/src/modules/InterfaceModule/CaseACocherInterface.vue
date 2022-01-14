<template>
  <div
    class="case-a-cocher"
  >
    <input
      :id="nom"
      type="checkbox"
      :name="nom"
      required
      @click="handleChange"
    >
    <img
      src="@ai/icone--rond.svg"
      class="nok"
      @click="handleChange"
    >
    <img
      src="@ai/icone--rond--ok.svg"
      class="ok"
      @click="handleChange"
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
    handleChange (e) {
      this.$emit("clique", this.nom)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@s/interface/caseacocher";
</style>
