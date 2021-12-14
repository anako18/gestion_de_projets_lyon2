<template>
  <main>
    <section>
      <router-link to="/premiere-visite">
        <img
          src="../assets/logo--deux-lignes.png"
          alt="Logo Tocque & Toc!"
        >
      </router-link>
    </section>
  </main>
</template>

<script>
export default {
  name: "IntroVue"
};
</script>

<style lang="scss" scoped>
  @import "../styles/intro/intro.scss";
</style>
