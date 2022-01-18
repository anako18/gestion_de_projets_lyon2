<template>
  <main class="favoris-liste">
    <header class="header-logo">
        <img src="../assets/logo.png">  
    </header>
    <div class="section-titre">
    <span class="titre"> Mes favoris </span>
    </div>
    <FavorisComponent/>
    <FooterComponent/>
  </main>
</template>

<script>
import FavorisComponent from "../modules/EvenementsModule/Favoris.vue";
import FooterComponent from "../modules/Footer.vue";
export default {
  name: "Favoris",
  components: {
    FavorisComponent,
    FooterComponent
  }
};
</script>

<style lang="scss" scoped>
  @import "@s/evenements/evenements";
</style>