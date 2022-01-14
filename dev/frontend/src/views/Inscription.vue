<<<<<<< HEAD
<template>
  <main>
    <EnregistrementFormulaire />
  </main>
</template>

<script>
import EnregistrementFormulaire from "@m/CompteModule/EnregistrementModule/EnregistrementFormulaire.vue"
/**
 * Vue pour l'Inscription
 */
export default {
  name: "InscriptionVue",
  components: {
    EnregistrementFormulaire
  }
}
</script>
=======
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
>>>>>>> 00b0b9e (Front : Wow)
