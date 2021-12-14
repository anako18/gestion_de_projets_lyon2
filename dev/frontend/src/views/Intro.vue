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
@import "../styles/_variables.scss";
@import "../styles/common.scss";

main {
  justify-content: center;
  background: $couleur-c1;
}
img {
  max-width: 175px;
  filter: brightness(255);
  &:hover {
    cursor: pointer;
  }
}
</style>
