<template>
  <div class="organisation-evenement-champ" :style="{ 'margin-bottom': calculMarge }">
    <textarea
      v-if="type === 'textarea'"
      :id="id"
      :type="type"
      :placeholder="texteSubstitution"
      :value="valeur"
      @input="handleChange"
    />
    <input
      v-else
      :id="id"
      :type="type"
      :placeholder="texteSubstitution"
      :value="valeur"
      @input="handleChange"
    >
    <label :for="id">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    /** Identifiant du champ. */
    id: {
      type: String,
      required: true
    },
    /** Texte du label associé au champ. */
    label: {
      type: String,
      required: true
    },
    /** Valeur du champ. */
    valeur: {
      type: String,
      required: false,
      default: ""
    },
    /** Texte de substitution à l'intérieur du champ. */
    texteSubstitution: {
      type: String,
      required: false,
      default: "..."
    },
    /** Type du champ (p. ex. `text`, `email`, `textarea`, etc.). */
    type: {
      type: String,
      required: true
    },
    /** Valeur de la marge inférieure. */
    marge: {
      type: String,
      required: false,
      default: "0"
    }
  },
  computed: {
    calculMarge () {
      const valeur = this.marge * 4
      return `${valeur}px`
    }
  },
  methods: {
    handleChange (e) {
      this.$emit("handleChange", e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@s/organisation-evenements/champ";
</style>
