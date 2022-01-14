<template>
  <div class="modal">
<<<<<<< HEAD
    <p>lol</p>
    <button @click="$router.go(-1)">
      close
    </button>
=======
    <EnTeteInterfaceVue />
    <NavigationInteraction
      :texte="texte"
      :icone="icone"
      @click="remonteClic(selection, typeModal)"
    />
    <div
      v-if="typeModal === 'typeEvenement'"
      class="modal__choix"
    >
      <div
        v-for="o in optionsTypeModal"
        :key="o.id"
        class="modal__choix__entree"
      >
        <h3 class="modal__choix__entree__titre">
          {{ o.nom }}
        </h3>
        <p class="modal__choix__entree__description">
          {{ o.description }}
        </p>
        <input
          :id="o.id"
          name="typeEvenement"
          type="radio"
          class="modal__choix__entree__selection"
        >
        <label
          :for="o.nom"
          name="typeEvenement"
          type="radio"
          class="modal__choix__entree__label"
          :class="{ 'active': selection === o.slug }"
          @click="effectuerSelection(o.slug)"
        >
          <img src="@ai/icone--rond.svg" class="nok">
          <img src="@ai/icone--rond--ok.svg" class="ok">
        </label>
      </div>
    </div>
    <div
      v-if="typeModal === 'typeCuisine'"
      class="modal__choix"
    >
      <div
        v-for="o in optionsTypeModal"
        :key="o.id"
        class="modal__choix__entree"
      >
        <h3 class="modal__choix__entree__titre">
          {{ o.nom }}
        </h3>
        <p class="modal__choix__entree__description">
          {{ o.description }}
        </p>
        <input
          :id="o.id"
          name="typeEvenement"
          type="radio"
          class="modal__choix__entree__selection"
        >
        <label
          :for="o.id"
          name="typeEvenement"
          type="radio"
          class="modal__choix__entree__label"
          :class="{ 'active': selection === o.slug }"
          @click="effectuerSelection(o.slug)"
        >
          <img src="@ai/icone--rond.svg" class="nok">
          <img src="@ai/icone--rond--ok.svg" class="ok">
        </label>
      </div>
    </div>
>>>>>>> 00b0b9e (Front : Wow)
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  data () {
    const params = this.$route.params
    return {
      type: params.type
=======
import EnTeteInterfaceVue from "../InterfaceModule/EnTeteInterface.vue"
import NavigationInteraction from "./NavigationInteraction.vue"
import EvenementModele from "./EvenementModele.js"
export default {
  components: {
    EnTeteInterfaceVue,
    NavigationInteraction
  },
  data () {
    const params = this.$route.params
    return {
      typeModal: params.typeModal,
      texte: params.texte,
      icone: params.icone,
      selectionRecue: params.selectionRecue,
      selection: undefined
    }
  },
  computed: {
    optionsTypeModal: function () {
      switch (this.typeModal) {
        case ("typeEvenement"):
          return EvenementModele.typesEvenement
        case ("typeCuisine"):
          return EvenementModele.typesCuisine
        default:
          return {}
      }
    }
  },
  mounted () {
    console.log(this.selection)
    this.selection = this.selectionRecue
  },
  methods: {
    remonteClic (donnee, type) {
      this.$emit("click", { donnee: donnee, type: type })
    },
    effectuerSelection (nom) {
      this.selection = nom
>>>>>>> 00b0b9e (Front : Wow)
    }
  }
}
</script>

<<<<<<< HEAD
<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
}
=======
<style lang="scss" scoped>
  @import "@s/organisation-evenements/modal";
>>>>>>> 00b0b9e (Front : Wow)
</style>
