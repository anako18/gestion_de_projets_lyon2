<template>
  <main class="organisation-evenement">
    <div class="evenement" :class="{ 'modal-active': modalActive === true }">
      <EnTeteInterface />
      <NavigationInteraction
        texte="J'organise un évènement"
        icone="validation--nop"
      />
      <section class="evenement__illustration">
        <div class="evenement__illustration__texte">
          <p>
            Pour <strong>illustrer votre évènement</strong>, ajoute une de tes photos
            ou encore une image libre de droits.
          </p>
        </div>
        <div class="evenement__illustration__image">
          <img src="@ai/illustration__image.svg" alt="Placeholder illustration de l'évènement">
        </div>
        <BoutonInterface
          :etat="true"
          valeur="Ajouter une photo"
          icone="plus"
          type="ajouter-photo"
        />
      </section>
      <section class="evenement__informations">
        <ChampInterface
          id="evenement-titre"
          label="Titre"
          marge="6"
          texte-substitution="Le nom de l'évènement (p.ex. Chili con Carne)."
          :valeur="evenementInformations.titre"
          type="text"
          @handleChange="handleChange('titre', $event)"
        />
        <ChampInterface
          id="evenement-description-evenement"
          label="Description de l'évènement"
          marge="6"
          texte-substitution="Une brève description de l'évènement."
          type="textarea"
          @handleChange="handleChange('descriptionEvenement', $event)"
        />
        <ChampInterface
          id="evenement-description-preparations"
          label="Description des préparations"
          marge="6"
          texte-substitution="Détaille les préparations que vous réaliserez ensemble."
          type="textarea"
          @handleChange="handleChange('descriptionPreparations', $event)"
        />
        <SelecteurInterface
          nom="evenement-nombre-places"
          label="Combien de places ?"
          @effectuerChoix="handleChange('nombrePlaces', $event)"
        />
        <router-link
          :to="{name: 'Type d\'évèmenent', params: {
            typeModal: 'typeEvenement',
            texte: 'Type d\'évènement',
            selectionRecue: evenementInformations.typeEvenement
          }}"
          tag="a"
          @click.native="changementEtatModal"
        >
          <ChampModalInterface titre="Type d'évènement" />
        </router-link>
        <router-link
          :to="{name: 'Type de cuisine', params: {
            typeModal: 'typeCuisine',
            texte: 'Type de cuisine',
            selectionRecue: evenementInformations.typeCuisine
          }}"
          tag="a"
          @click.native="changementEtatModal"
        >
          <ChampModalInterface
            titre="Type de cuisine"
            style="margin-bottom: 26px;"
          />
        </router-link>
        <ChampModalInterface titre="Date" />
        <ChampModalInterface titre="Heure" />
        <ChampModalInterface titre="Durée" />
        <ChampModalInterface titre="Lieu" />
        <ChampModalInterface titre="Accessibilité" style="margin-bottom: 26px;" />
        <ChampInterface
          id="evenement-prix-personne"
          label="Prix par personne"
          marge="6"
          texte-substitution="Le prix par personne (p. ex. 9€)."
          type="number"
          @handleChange="handleChange('prix', $event)"
        />
      </section>
    </div>
    <transition name="slide-fade">
      <router-view @click="changementEtatModal($event)" />
    </transition>
  </main>
</template>

<script>
import EnTeteInterface from "@m/InterfaceModule/EnTeteInterface.vue"
import BoutonInterface from "@m/InterfaceModule/BoutonInterface.vue"
import NavigationInteraction from "@m/OrganisationEvenementModule/NavigationInteraction.vue"
import ChampInterface from "@m/OrganisationEvenementModule/ChampInterface.vue"
import SelecteurInterface from "@m/OrganisationEvenementModule/SelecteurInterface.vue"
import ChampModalInterface from "@m/OrganisationEvenementModule/ChampModalInterface.vue"

export default {
  name: "OrganisationEvenementVue",
  components: {
    EnTeteInterface,
    NavigationInteraction,
    BoutonInterface,
    ChampInterface,
    SelecteurInterface,
    ChampModalInterface
  },
  data () {
    return {
      modalActive: false,
      evenementInformations: {
        titre: undefined,
        descriptionEvenement: undefined,
        descriptionPreparations: undefined,
        nombrePlaces: 0,
        typeEvenement: undefined,
        typeCuisine: undefined,
        prix: undefined
      }
    }
  },
  methods: {
    changementEtatModal (evenement) {
      const donnee = evenement.donnee
      const type = evenement.type
      if (this.evenementInformations[type] !== null && (type !== "click")) {
        this.evenementInformations[type] = donnee
      }
      this.modalActive = !this.modalActive
    },
    handleChange (donnee, payload) {
      this.evenementInformations[donnee] = payload
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@s/organisation-evenements/commun";
</style>
