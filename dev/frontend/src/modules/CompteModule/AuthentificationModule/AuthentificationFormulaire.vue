<template>
  <div class="authentification">
    <transition name="topbottom-fade">
      <NotificationInterface
        v-if="etatConnexion === 'succes'"
        etat="succes"
        valeur="Connexion réussie !"
      />
      <NotificationInterface
        v-if="etatConnexion === 'echec'"
        etat="echec"
        valeur="Connexion échouée !"
      />
    </transition>
    <h1 class="authentification__titre">
      Connexion
    </h1>
    <section class="authentification__google">
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
    <section class="authentification__separateur">
      <span class="authentification__separateur__trait" />
      <span class="authentification__separateur__texte">ou</span>
      <span class="authentification__separateur__trait" />
    </section>
    <section class="authentification__classique">
      <form class="authentification__classique__formulaire">
        <ChampInterface
          :etat="selectionEtatChamp('email')"
          :value="identifiants.email"
          texte="Adresse email"
          type="email"
          @gestionEvenement="gestionChangement('email', $event)"
          @select="selectionUtilisateurChamp('email')"
          @click="selectionUtilisateurChamp('email')"
        />
        <ChampInterface
          :etat="selectionEtatChamp('mdp')"
          :value="identifiants.mdp"
          texte="Mot de passe"
          type="password"
          @gestionEvenement="gestionChangement('mdp', $event)"
          @select="selectionUtilisateurChamp('mdp')"
          @click="selectionUtilisateurChamp('mdp')"
        />
        <CaseACocherInterface
          :class="{ 'active': selectionsCases.seSouvenirCompte === true}"
          class="se-souvenir-compte"
          nom="se-souvenir-compte"
          label="Se souvenir de moi"
          @aClique="selectionCaseACocher"
        />
      </form>
      <div class="authentification__classique__bouton">
        <BoutonInterface
          valeur="Je me connecte"
          type="connexion"
          :etat="validation"
          icone="connexion"
          @aClique="envoiAuthentification"
        />
      </div>
    </section>
    <aside class="authentification__inscription">
      <p>
        Tu n'as pas de compte ?
        <router-link to="inscription">
          S'enregistrer
        </router-link>
      </p>
    </aside>
  </div>
</template>

<script>
import CompteService from "../CompteService.js"
import AuthentificationService from "./AuthentificationService.js"

import BoutonInterface from "@m/InterfaceModule/BoutonInterface.vue"
import ChampInterface from "@m/InterfaceModule/ChampInterface.vue"
import CaseACocherInterface from "@m/InterfaceModule/CaseACocherInterface.vue"
import NotificationInterface from "@m/InterfaceModule/NotificationInterface.vue"

export default {
  name: "AuthentificationFormulaire",
  components: {
    BoutonInterface,
    ChampInterface,
    CaseACocherInterface,
    NotificationInterface
  },
  data () {
    return {
      identifiants: {
        email: "",
        mdp: ""
      },
      erreurs: {
        email: [],
        mdp: []
      },
      validation: false,
      selection: "email",
      selectionsCases: {
        seSouvenirCompte: false
      },
      etatConnexion: "repos"
    }
  },
  watch: {
    identifiants: { handler: "validationAuthentification", deep: true }
  },
  mounted () {
    this.validationAuthentification()
  },
  methods: {
    conversionCamelCase: CompteService.conversionCamelCase,
    gestionChangement: CompteService.gestionChangement,
    reinitialisationErreurs: CompteService.reinitialisationErreurs,
    selectionCaseACocher: CompteService.selectionCaseACocher,
    selectionEtatChamp: CompteService.selectionEtatChamp,
    selectionUtilisateurChamp: CompteService.selectionUtilisateurChamp,
    verificationErreurChamp: CompteService.verificationErreurChamp,
    validationAuthentification: AuthentificationService.validationAuthentification,
    envoiAuthentification: AuthentificationService.envoiAuthentification,
    authentification: AuthentificationService.authentification,
    gestionTentativeConnexion (validation) {
      this.etatConnexion = validation
      setTimeout(() => { this.etatConnexion = "repos" }, 3000)
    }
  }
}
</script>
