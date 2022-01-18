<template>
  <div class="favoris-liste">
    <div class="mon-evenement-item">
      <div class="favoris-row">
        <div class="favoris-image">
        <img src="../../assets/food.png" class="favoris-image" />
                <button class="favorite-button">
          <img src="../../assets/heart-f.png" width="40%" />
        </button>
        </div>
        <div class="favoris-description">
          <p class="evenement-titre">Soirée aux couleurs de l’Italie</p>
          <p class="avec">Jeudi 18/11 a 16h <br> A Décines-Charpieu</p>
          <span class="lieu">Avec Demien</span>
        </div>
      </div>
       <button class="favoris-button">Voir plus de detail</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Favoris",
};
</script>

<style lang="scss" scoped>
  @import "@s/evenements/evenements";
</style>