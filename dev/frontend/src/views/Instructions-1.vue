<template>
  <main class="inscructions">
    <section>
      <div style=" padding: 70px 50px 20px;text-align: center;">
        <img
          src="../assets/images/inst1.jpg"
          width="65%"
          height="65%"
        >
      </div>
      <div class="titre-f">
        Participe à des
        <span style="color: #ea553d;">ateliers cuisine</span> près de chez toi !
      </div>
      <div class="soustitre">
        Et retrouvez-vous autour de la table pour déguster tout ça.
      </div>
      <div class="underlines">
        <hr class="Rounded active">
        <hr class="Rounded">
        <hr class="Rounded">
      </div>
      <div class="bouton-instrunctions">
        <router-link to="/instructions2">
          <u>Mais encore ?</u>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "InstructionsVue"
}
</script>

<style lang="scss" scoped>
  @import "@s/instructions/instructions";
</style>
