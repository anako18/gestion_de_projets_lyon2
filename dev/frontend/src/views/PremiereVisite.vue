<template>
  <main class="premiere-visite">
    <header class="en-tete">
      <img
        class="en-tete__logo--icone"
        src="../assets/logo--icone.png"
        alt="Icône Toque & Toc !"
      >
      <img
        class="en-tete__logo--une-ligne"
        src="../assets/logo--une-ligne.png"
        alt="Logo Toque & Toc !"
      >
    </header>
    <section class="inscription">
      <h1 class="style1">
        Première visite ?
      </h1>
      <p class="style2">
        Inscris-toi et participe à des <strong>évènements</strong> proches de chez toi !
      </p>
      <ul class="liste style3">
        <li>Rencontre de nouvelles personnes</li>
        <li>Apprend à cuisiner</li>
        <li>Passe un bon moment</li>
      </ul>
      <p class="accroche">
        ...et le tout à <strong>petit prix</strong> !
      </p>
      <router-link
        to="/inscription"
        tag="button"
        class="bouton1 couleur--c1 icone--inscription bouton--inscription"
      >
        Je m'inscris
      </router-link>
    </section>
    <section class="connexion">
      <h2 class="style5">
        Tu as déjà un compte ?
      </h2>
      <p class="style6">
        Parfait ! Connecte-toi vite !
      </p>
      <router-link
        to="/connexion"
        tag="button"
        class="bouton1 couleur--c2 icone--connexion"
      >
        Je me connecte
      </router-link>
    </section>
  </main>
</template>

<script>
export default {
  name: "PremiereVisiteVue"
};
</script>

<style lang="scss" scoped>
@import "../styles/common.scss";
@import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap');
</style>
