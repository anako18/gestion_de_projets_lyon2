
<script>
export default {
  props: {
    valeur: {
      type: String,
      default: "Texte",
      require: true
    }
    // type: {
    //   type: String,
    //   required: true
    // }
  },
  data () {
    // const correspondanceType = () => {
    //   if (this.type === "inscription") {
    //     return "bouton-style-1 couleur-c2 icone-connexion"
    //   }
    // }
    // return {
    //   style: correspondanceType()
    // }
  }
}
</script>

<template>
  <button
    type="button"
  >
    {{ valeur }}
  </button>
</template>
