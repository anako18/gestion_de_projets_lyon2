<template>
  <main class="organisation-evenement evenement">
    <EnTeteInterface />
    <NavigationInteraction
      texte="J'organise un évènement"
    />
    <section class="evenement__illustration">
      <div class="evenement__illustration__texte">
        <p>
          Pour <strong>illustrer votre évènement</strong>, ajoutez une photo prise par vous
          ou encore une image libre de droits.
        </p>
      </div>
      <div class="evenement__illustration__image">
        <img src="@ai/illustration__image.svg" alt="Placeholder illustration de l'évènement">
      </div>
      <BoutonInterface
        :etat="true"
        valeur="Ajouter une photo"
        type="ajouter-photo"
      />
    </section>
    <section class="evenement__informations">
      <ChampInterface
        id="evenement-titre"
        label="Titre"
        marge="6"
        texte-substitution="Le nom de l'évènement (p.ex. Chili con Carne)."
        type="text"
      />
      <ChampInterface
        id="evenement-description-evenement"
        label="Description de l'évènement"
        marge="6"
        texte-substitution="Une brève description de l'évènement."
        type="textarea"
      />
      <ChampInterface
        id="evenement-description-preparations"
        label="Description des préparations"
        marge="6"
        texte-substitution="Détaillez les préparations que vous réaliserez ensemble."
        type="textarea"
      />
      <SelecteurInterface nom="evenement-nombre-places" label="Combien de places ?" />
      <router-link :to="{name: 'Type d\'évèmenent', params: {type: 'type'}}" tag="a">
        <ChampModalInterface titre="Type d'évènement" />
      </router-link>
      <ChampModalInterface titre="Type de cuisine" style="margin-bottom: 26px;" />
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
      />
    </section>
    <router-view />
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
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  @import "@s/organisation-evenements/commun";
</style>
