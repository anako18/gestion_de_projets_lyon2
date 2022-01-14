<<<<<<< HEAD
<template>
  <div class="bouton">
    <button
      type="button"
      class="bouton__conteneur"
      :class="classes"
      :disabled="!etat"
      @click="boutonClique"
    >
      <img
        class="bouton__icone"
        src="@ai/icone--plus.svg"
      >
      <span class="bouton__texte">
        {{ valeur }}
      </span>
    </button>
  </div>
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
      required: true
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
        "bouton-style-2": this.type === "ajouter-photo",
        "couleur-c3": this.type === "ajouter-photo",
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
=======
<template>
  <div class="bouton">
    <button
      type="button"
      class="bouton__conteneur"
      :class="classes"
      :disabled="!etat"
      @click="boutonClique"
    >
      <img
        class="bouton__icone"
        :src="require(`@ai/icone--${icone}.png`)"
      >
      <span class="bouton__texte">
        {{ valeur }}
      </span>
    </button>
  </div>
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
      required: true
    },
    etat: {
      type: Boolean,
      default: false
    },
    icone: {
      type: String,
      required: false
    }
  },
  computed: {
    classes: function () {
      return {
        "bouton-style-1": this.type === "inscription" || this.type === "connexion",
        "couleur-c1": this.type === "inscription",
        "bouton-icone-inscription": this.type === "inscription",
        "couleur-c2": this.type === "connexion",
        "bouton-icone-connexion": this.type === "connexion",
        "bouton-style-2": this.type === "ajouter-photo",
        "couleur-c3": this.type === "ajouter-photo",
        "bouton-icone-plus": this.type === "ajouter-photo",
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
>>>>>>> 00b0b9e (Front : Wow)
