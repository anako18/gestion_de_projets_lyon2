<template>
  <main class="inscructions">
    <section>
      <div style="text-align: center; padding: 70px 50px 20px 50px">
        <img src="../assets/images/inst1.jpg" width="65%" height="65%" />
      </div>
      <div class="titre-f">
        Participe à des
        <span style="color: #ea553d">ateliers cuisine</span> près de chez toi !
      </div>
      <div class="soustitre">
        Et retrouvez vous autour de la table pour déguster tout ça.
      </div>
      <div class="underlines">
        <hr class="Rounded active" />
        <hr class="Rounded" />
        <hr class="Rounded" />
      </div>
      <div class="bouton-instrunctions">
      <a href="/instructions2">  <u> Passez cette étape  </u> </a>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "InstructionsVue",
};
</script>

<style lang="scss" scoped>
  @import "@s/instructions/instructions";
</style>
