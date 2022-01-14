<template>
  <div class="organisation-evenement-selecteur">
    <form :name="nom">
      <label :for="nom">Combien de chaises ?</label>
      <fieldset>
        <template v-for="o in options">
          <input
            :id="o.id"
            :key="o.id"
            type="radio"
<<<<<<< HEAD
            @click="effecteurChoix"
=======
            @click="effectuerChoix"
>>>>>>> 00b0b9e (Front : Wow)
          >
          <label
            :key="5 + o.id"
            :for="o.id"
            :class="{ 'etat-active': o.selection === true }"
          ><img src="@ai/icone--chaise.svg"></label>
        </template>
        <span>{{ choix }} personnes</span>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    nom: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      options: {},
      choix: 0
    }
  },
  created () {
    this.reinitialiserOptions()
  },
  methods: {
<<<<<<< HEAD
    effecteurChoix (e) {
      this.$emit("effecteurChoix", e.target.id)
=======
    effectuerChoix (e) {
      this.$emit("effectuerChoix", e.target.id)
>>>>>>> 00b0b9e (Front : Wow)
      this.choix = e.target.id
      this.reinitialiserOptions()
      for (let i = 0; i < e.target.id; i++) {
        this.options[i].selection = true
      }
    },
    reinitialiserOptions () {
      for (let i = 0; i < 5; i++) {
        this.options[i] = {
          id: i + 1,
          selection: false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@s/organisation-evenements/selecteur";
</style>
