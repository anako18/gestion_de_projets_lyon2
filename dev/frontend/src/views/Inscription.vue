
<template>
  <main>
    <EnregistrementFormulaire />
  </main>
</template>

<script>
import EnregistrementFormulaire from "../modules/CompteModule/EnregistrementFormulaire.vue";
export default {
  name: "InscriptionVue",
  components: {
    EnregistrementFormulaire
  }
};
</script>

<style lang="scss">
  @import "../styles/common.scss";
  @import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap');
</style>
