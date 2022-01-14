<template>
  <main class="inscription">
    <EnTeteInterface />
    <EnregistrementFormulaire />
  </main>
</template>

<script>
import EnregistrementFormulaire from "@m/CompteModule/EnregistrementModule/EnregistrementFormulaire.vue"
import EnTeteInterface from "@m/InterfaceModule/EnTeteInterface.vue"
/**
 * Vue pour l'Inscription
 */
export default {
  name: "InscriptionVue",
  components: {
    EnregistrementFormulaire,
    EnTeteInterface
  }
}
</script>
