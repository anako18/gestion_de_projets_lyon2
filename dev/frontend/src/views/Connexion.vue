<template>
  <main class="connexion">
    <EnTeteInterface />
    <AuthentificationFormulaire />
  </main>
</template>

<script>
import AuthentificationFormulaire from "@m/CompteModule/AuthentificationModule/AuthentificationFormulaire.vue"
import EnTeteInterface from "@m/InterfaceModule/EnTeteInterface.vue"
/**
 * Vue pour la Connexion
 */
export default {
  name: "ConnexionVue",
  components: {
    AuthentificationFormulaire,
    EnTeteInterface
  }
}
</script>