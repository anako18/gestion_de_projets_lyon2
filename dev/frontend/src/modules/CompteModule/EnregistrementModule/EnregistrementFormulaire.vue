<template>
  <div class="enregistrement">
    <h1 class="enregistrement__titre">
      Inscription
    </h1>
    <section class="enregistrement__google">
      <button
        class="bouton-style-1 couleur-c6 bouton-icone-google bouton-connexion-google"
      >
        <img
          class="bouton__icone"
          src="@ai/icone--google.png"
        >
        Continuer avec Google
      </button>
    </section>
    <section class="enregistrement__separateur">
      <span class="enregistrement__separateur__trait" />
      <span class="enregistrement__separateur__texte">ou</span>
      <span class="enregistrement__separateur__trait" />
    </section>
    <section class="enregistrement__classique">
      <form class="enregistrement__classique__formulaire">
        <p class="avertissement">
          Les champs entourés en rouge sont obligatoires.
        </p>
        <ChampInterface
          :etat="selectionEtatChamp('email')"
          :value="identifiants.email"
          texte="Adresse email"
          type="email"
          class="obligatoire"
          @gestionEvenement="gestionChangement('email', $event)"
          @select="selectionUtilisateurChamp('email')"
          @click="selectionUtilisateurChamp('email')"
        />
        <ChampInterface
          :etat="selectionEtatChamp('mdp')"
          :value="identifiants.mdp"
          texte="Mot de passe"
          type="password"
          class="obligatoire"
          @gestionEvenement="gestionChangement('mdp', $event)"
          @select="selectionUtilisateurChamp('mdp')"
          @click="selectionUtilisateurChamp('mdp')"
        />
        <ChampInterface
          :etat="selectionEtatChamp('confMdp')"
          :value="identifiants.confMdp"
          texte="Confirmation mot de passe"
          type="password"
          class="obligatoire"
          @gestionEvenement="gestionChangement('confMdp', $event)"
          @select="selectionUtilisateurChamp('confMdp')"
          @click="selectionUtilisateurChamp('confMdp')"
        />
        <ChampInterface
          :etat="selectionEtatChamp('prenom')"
          :value="identifiants.prenom"
          texte="Prénom"
          type="text"
          class="obligatoire"
          @gestionEvenement="gestionChangement('prenom', $event)"
          @select="selectionUtilisateurChamp('prenom')"
          @click="selectionUtilisateurChamp('prenom')"
        />
        <ChampInterface
          :etat="selectionEtatChamp('nom')"
          :value="identifiants.nom"
          texte="Nom"
          type="text"
          class="obligatoire"
          @gestionEvenement="gestionChangement('nom', $event)"
          @select="selectionUtilisateurChamp('nom')"
          @click="selectionUtilisateurChamp('nom')"
        />
        <ChampInterface
          :etat="selectionEtatChamp('dateDeNaissance')"
          :value="identifiants.dateDeNaissance"
          texte="Date de naissance"
          type="date"
          class="obligatoire"
          @gestionEvenement="gestionChangement('dateDeNaissance', $event)"
          @select="selectionUtilisateurChamp('dateDeNaissance')"
          @click="selectionUtilisateurChamp('dateDeNaissance')"
        />
        <ChampInterface
          :etat="selectionEtatChamp('telephone')"
          :value="identifiants.telephone"
          texte="Numéro de téléphone"
          type="tel"
          @gestionEvenement="gestionChangement('telephone', $event)"
          @select="selectionUtilisateurChamp('telephone')"
          @click="selectionUtilisateurChamp('telephone')"
        />
        <ChampInterface
          :etat="selectionEtatChamp('description')"
          :value="identifiants.description"
          texte="Décris-toi rapidement !"
          type="textarea"
          @gestionEvenement="gestionChangement('description', $event)"
          @select="selectionUtilisateurChamp('description')"
          @click="selectionUtilisateurChamp('description')"
        />
        <CaseACocherInterface
          :class="{ 'active': selectionsCases.seSouvenirCompte === true}"
          class="se-souvenir-compte"
          nom="se-souvenir-compte"
          label="Se souvenir de moi"
          @aClique="selectionCaseACocher"
        />
        <CaseACocherInterface
          :class="{ 'active': selectionsCases.acceptationCgu === true}"
          class="acceptation-cgu obligatoire"
          nom="acceptation-cgu"
          label="J'ai lu et j'accepte les CGU (obligatoire)"
          @aClique="selectionCaseACocher"
        />
      </form>
      <!--
      <transition name="slide-fade" mode="out-in">
      <div
        v-if="selection === 'email'"
        key="0"
        class="enregistrement__classique__validations validations__email"
      >
        <ValidationInterface
          texte="Présent"
          :etat="verificationErreurChamp('email', 'EMAIL_MANQUANT')"
        />
        <ValidationInterface
          texte="Long"
          :etat="verificationErreurChamp('email', 'EMAIL_LONGUEUR')"
        />
        <ValidationInterface
          texte="Valide"
          :etat="verificationErreurChamp('email', 'EMAIL_INVALIDE')"
        />
      </div>
      <div
        v-if="selection === 'mdp' || selection === 'confMdp'"
        key="1"
        class="enregistrement__classique__validations validations__email"
      >
        <ValidationInterface
          texte="Présent"
          :etat="verificationErreurChamp('mdp', 'MDP_MANQUANT')"
        />
        <ValidationInterface
          texte="Long"
          :etat="verificationErreurChamp('mdp', 'MDP_LONGUEUR')"
        />
        <ValidationInterface
          texte="Confirmé"
          :etat="verificationErreurChamp('confMdp', 'CONFMDP_INVALIDE')"
        />
      </div>
      </transition>
      -->
      <div class="enregistrement__classique__bouton">
        <BoutonInterface
          valeur="Je m'inscris"
          type="inscription"
          :etat="validation"
          icone="inscription"
          @aClique="envoiEnregistrement"
        />
      </div>
    </section>
    <aside class="enregistrement__connexion">
      <p>
        Tu as déjà un compte ?
        <router-link to="connexion">
          Me connecter
        </router-link>
      </p>
    </aside>
  </div>
</template>

<script>
import EnregistrementService from "./EnregistrementService.js"

import BoutonInterface from "@m/InterfaceModule/BoutonInterface.vue"
import ChampInterface from "@m/InterfaceModule/ChampInterface.vue"
import CaseACocherInterface from "@m/InterfaceModule/CaseACocherInterface.vue"

export default {
  name: "EnregistrementFormulaire",
  components: {
    BoutonInterface,
    ChampInterface,
    CaseACocherInterface
  },
  data () {
    return {
      identifiants: {
        email: "",
        mdp: "",
        confMdp: "",
        nom: "",
        prenom: "",
        telephone: "",
        dateDeNaissance: "",
        description: ""
      },
      erreurs: {
        email: [],
        mdp: [],
        confMdp: [],
        nom: [],
        prenom: [],
        telephone: [],
        dateDeNaissance: [],
        description: []
      },
      validation: false,
      selection: "email",
      selectionsCases: {
        seSouvenirCompte: false,
        acceptationCgu: false
      }
    }
  },
  watch: {
    identifiants: { handler: "validationEnregistrement", deep: true }
  },
  mounted () {
    this.validationEnregistrement()
  },
  methods: {
    conversionCamelCase: EnregistrementService.conversionCamelCase,
    enregistrement: EnregistrementService.enregistrement,
    envoiEnregistrement: EnregistrementService.envoiEnregistrement,
    gestionChangement: EnregistrementService.gestionChangement,
    reinitialisationErreurs: EnregistrementService.reinitialisationErreurs,
    selectionCaseACocher: EnregistrementService.selectionCaseACocher,
    selectionEtatChamp: EnregistrementService.selectionEtatChamp,
    selectionUtilisateurChamp: EnregistrementService.selectionUtilisateurChamp,
    validationEnregistrement: EnregistrementService.validationEnregistrement,
    verificationErreurChamp: EnregistrementService.verificationErreurChamp
  }
}
</script>
