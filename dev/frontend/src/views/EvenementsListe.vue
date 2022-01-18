<template>
  <main>
    <header class="header-logo">
        <img src="../assets/logo.png">  
    </header>
    <FiltersComponents/>
    <EvenementComponent/>
    <FooterComponent/>
  </main>
</template>

<script>
import FiltersComponents from "../modules/EvenementsModule/Filters.vue";
import EvenementComponent from "../modules/EvenementsModule/Evenement.vue";
import FooterComponent from "../modules/Footer.vue";

export default {
  name: "Favoris",
  components: {
    FiltersComponents,
    FooterComponent,
    EvenementComponent
  }
};
</script>

<style lang="scss" scoped>
  @import "@s/evenements/evenements";
</style>