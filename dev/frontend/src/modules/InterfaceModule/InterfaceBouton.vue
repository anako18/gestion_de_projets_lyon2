<template>
  <button
    type="button"
    :class="style"
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
    }
  },
  data () {
    const correspondanceType = () => {
      const type = this.type
      switch (type) {
        case "connexion":
          return "bouton-style-1 couleur-c2 icone-connexion"
        case "inscription":
          return "bouton-style-1 couleur-c1 icone-inscription"
      }
    }
    return {
      style: correspondanceType()
    }
  },
  methods: {
    boutonClique () {
      this.$emit("onClique")
    }
  }
}
</script>
