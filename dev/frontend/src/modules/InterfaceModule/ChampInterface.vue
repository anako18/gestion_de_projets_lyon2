<template>
  <textarea
    v-if="type === 'textarea'"
    :class="classes"
    :name="nom"
    :placeholder="texte"
    :type="type"
    :value="value"
    :etat="etat"
    class="champ"
    v-on="gestionEvenements"
  ></textarea>
  <input
    v-else
    :class="classes"
    :name="nom"
    :placeholder="texte"
    :type="type"
    :value="value"
    :etat="etat"
    class="champ"
    v-on="gestionEvenements"
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
  data () {
    return {
      gestionEvenements: {
        input: this.gestionEvenement,
        select: this.remonteEvenement,
        click: this.remonteEvenement
      }
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
    // TODO: Tout mettre dans une seule méthode
    gestionEvenement (e) {
      this.$emit("gestionEvenement", e.target.value)
    },
    remonteEvenement (e) {
      if (e.type === "click") {
        this.$emit("click")
      } else {
        this.$emit("select")
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@s/interface/champ";
</style>
