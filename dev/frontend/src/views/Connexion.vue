
<template>
  <main>
    <AuthentificationFormulaire />
  </main>
</template>

<script>
import AuthentificationFormulaire from "../modules/CompteModule/AuthentificationFormulaire.vue";
export default {
  name: "InscriptionVue",
  components: {
    AuthentificationFormulaire
  }
};
</script>

<style lang="scss">
  @import "../styles/common.scss";
  @import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap');
</style>
