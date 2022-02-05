<template>
  <main class="inscructions">
    <section>
      <div style=" padding: 70px 50px 20px;overflow: hidden;text-align: center; border-radius: 50%;">
        <img
          src="../assets/images/inst3.png"
          width="65%"
          height="65%"
        >
      </div>
      <div class="titre-f">
        Aujourd’hui <span style="color: #ea553d;">hôte</span>
        et demain <span style="color: #ea553d;">invité </span> ?
      </div>
      <div class="soustitre">
        À toi de décider ! Invite et reçois tes convives pour partager un bon moment.
      </div>
      <div class="underlines">
        <hr class="Rounded">
        <hr class="Rounded">
        <hr class="Rounded active">
      </div>
      <div class="bouton-instrunctions">
        <router-link to="/evenements-liste">
          <button class="yellow-button">
            C'est parti !
          </button>
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
