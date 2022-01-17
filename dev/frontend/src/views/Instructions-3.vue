<template>
  <main class="inscructions">
    <section>
      <div style="text-align: center; padding: 70px 50px 20px 50px;  border-radius: 50%;overflow: hidden;">
        <img src="../assets/images/inst3.png" width="65%" height="65%" />
      </div>
      <div class="titre-f">
        Aujourd’hui <span style="color: #ea553d">hôte</span> 
        et demain <span style="color: #ea553d">invité </span> ?
      </div>
      <div class="soustitre">
        C’est toi qui décide ! Invites ou reçois tes convives pour partager un bon moment.
      </div>
      <div class="underlines">
        <hr class="Rounded" />
        <hr class="Rounded" />
        <hr class="Rounded active" />
      </div>
      <div class="bouton">
      <button class="yellow-button" onclick="window.location.href='/evenements-liste'">C'est parti !</button>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "InstructionsVue",
};
</script>
