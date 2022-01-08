<template>
  <main class="evenements-liste">
    <header class="header-logo">
        <img src="../assets/logo.png">  
    </header>
    <FiltersComponents/>
  </main>
</template>

<script>
import FiltersComponents from "../modules/EvenementsModule/Filters.vue";
export default {
  name: "Filters",
  components: {
    FiltersComponents
  }
};
</script>

<style lang="scss">
</style>