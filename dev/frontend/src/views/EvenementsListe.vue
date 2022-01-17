<template>
  <main class="evenements-liste">
    <header class="header-logo">
        <img src="../assets/logo.png">  
    </header>
    <FiltersComponents/>
    <FooterComponent/>
  </main>
</template>

<script>
import FiltersComponents from "../modules/EvenementsModule/Filters.vue";
import FooterComponent from "../modules/Footer.vue";
export default {
  name: "Favoris",
  components: {
    FiltersComponents,
    FooterComponent
  }
};
</script>

<style lang="scss">
</style>