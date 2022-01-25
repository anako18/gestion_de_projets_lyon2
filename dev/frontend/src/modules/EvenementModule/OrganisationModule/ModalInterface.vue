<template>
  <div class="modal">
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
          :class="{ 'active': selection === o.nom }"
          @click="effectueSelection(o.nom)"
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
          :class="{ 'active': selection === o.nom }"
          @click="effectueSelection(o.nom)"
        >
          <img src="@ai/icone--rond.svg" class="nok">
          <img src="@ai/icone--rond--ok.svg" class="ok">
        </label>
      </div>
    </div>
    <div
      v-if="typeModal === 'lieu'"
      class="modal__choix"
    >
      <ChampInterface
        id="evenement-description-rue"
        label="Numéro et rue"
        type="text"
        texte-substitution="Numéro puis nom de la rue"
        :valeur="selection['numero-rue']"
        @handleChange="enregistreDonneeUtilisateur('numero-rue', $event)"
      />
      <ChampInterface
        id="evenement-description-ville"
        label="Ville"
        type="text"
        texte-substitution="Nom de la ville"
        :valeur="selection.ville"
        @handleChange="enregistreDonneeUtilisateur('ville', $event)"
      />
      <ChampInterface
        id="evenement-description-code-postal"
        label="Code postal"
        type="text"
        texte-substitution="Code postal de la ville"
        :valeur="selection.codePostal"
        @handleChange="enregistreDonneeUtilisateur('codePostal', $event)"
      />
    </div>
    <div
      v-if="typeModal === 'accessibilite'"
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
          :class="{ 'active': estSelectionne(o.nom) }"
          @click="effectueMultiSelection(o.nom)"
        >
          <img src="@ai/icone--rond.svg" class="nok">
          <img src="@ai/icone--rond--ok.svg" class="ok">
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import EnTeteInterfaceVue from "@m/InterfaceModule/EnTeteInterface.vue"
import NavigationInteraction from "./NavigationInteraction.vue"
import ChampInterface from "./ChampInterface.vue"
import EvenementModele from "@m/EvenementModule/EvenementModele.js"

export default {
  components: {
    EnTeteInterfaceVue,
    NavigationInteraction,
    ChampInterface
  },
  data () {
    const params = this.$route.params
    return {
      typeModal: params.typeModal,
      texte: params.texte,
      icone: params.icone,
      selectionRecue: params.selectionRecue,
      selection: undefined,
      /** Tableau des choix réalisés par l'utilisateur qui seront convertis en chaîne de caractères. */
      selectionMultiChoix: []
    }
  },
  computed: {
    optionsTypeModal: function () {
      switch (this.typeModal) {
        case ("typeEvenement"):
          return EvenementModele.typesEvenement
        case ("typeCuisine"):
          return EvenementModele.typesCuisine
        case ("lieu"):
          return EvenementModele.lieu
        case ("accessibilite"):
          return EvenementModele.accessibilite
        default:
          return {}
      }
    }
  },
  mounted () {
    this.selection = this.selectionRecue
    if (this.typeModal === "accessibilite") {
      this.selectionMultiChoix = this.selectionRecue
    }
  },
  methods: {
    remonteClic (donnee, type) {
      this.$emit("click", { donnee: donnee, type: type })
    },
    effectueSelection (nom) {
      this.selection = nom
    },
    receptionPrecedenteSelection () {
      if (this.selectionRecue.constructor === Array) {
        console.log("C'est un array !")
      }
    },
    effectueMultiSelection (nom) {
      if (this.selectionMultiChoix.length > 0) {
        let euSplice
        for (const choix in this.selectionMultiChoix) {
          if (this.selectionMultiChoix[choix] === nom) {
            const pos = this.selectionMultiChoix.indexOf("nom")
            this.selectionMultiChoix.splice(pos, 1)
            euSplice = true
          }
        }
        if (!euSplice) {
          this.selectionMultiChoix.push(nom)
        }
      } else {
        this.selectionMultiChoix = [nom]
      }
      this.selection = this.selectionMultiChoix
    },
    estSelectionne (nom) {
      for (const index in this.selection) {
        if (this.selection[index] === nom) {
          return true
        }
      }
      return false
    },
    enregistreDonneeUtilisateur (objet, donnee) {
      this.selection[objet] = donnee
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@s/organisation-evenements/modal";
</style>
