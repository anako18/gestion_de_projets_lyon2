<template>
  <div class="favoris-liste">
    <div class="favoris-item">
      <div class="favoris-row">
        <div class="favoris-image">
        <img src="../../assets/food.png" class="favoris-image" />
                <button class="favorite-button">
          <img src="../../assets/heart-f.png" width="40%" />
        </button>
        </div>
        <div class="favoris-description">
          <p class="evenement-titre">Soirée aux couleurs de l’Italie</p>
          <p class="avec">Avec Demien</p>
          <span class="lieu"> A Décines-Charpieu 13€ </span>
        </div>
      </div>
      <div class="favoris-row">
        <div class="favoris-date">Jeudi 18/11 a 16h</div>
        <div class="favoris-chaise">Reste 1 chaise</div>
      </div>
       <button class="favoris-button">Voir</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Favoris",
};
</script>