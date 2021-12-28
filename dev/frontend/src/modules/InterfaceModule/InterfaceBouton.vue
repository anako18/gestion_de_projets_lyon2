<template>
  <button
    type="button"
    :class="style"
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
    }
  },
  data () {
    const correspondanceType = () => {
      if (this.type === "connexion") {
        return "bouton-style-1 couleur-c2 icone-connexion"
      }
      if (this.type === "inscription") {
        return "bouton-style-1 couleur-c1 icone-inscription"
      }
    }
    return {
      style: correspondanceType()
    }
  }
}
</script>
