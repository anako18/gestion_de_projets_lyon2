<template>
  <div class="favoris-liste">
    <div class="favoris-item">
      <div class="favoris-row">
        <div class="favoris-image">
        <img src="../../assets/food.png" class="favoris-image" />
                <button class="favorite-button">
          <img src="../../assets/heart.png" width="40%" />
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
     <div class="favoris-item">
      <div class="favoris-row">
        <div class="favoris-image">
        <img src="../../assets/images/food2.jpg" class="favoris-image" />
                <button class="favorite-button">
          <img src="../../assets/heart-f.png" width="40%" />
        </button>
        </div>
        <div class="favoris-description">
          <p class="evenement-titre">AAAA</p>
          <p class="avec">Avec Anastasia</p>
          <span class="lieu"> A Lyon 1000€ </span>
        </div>
      </div>
      <div class="favoris-row">
        <div class="favoris-date">Jeudi 18/11 a 16h</div>
        <div class="favoris-chaise">Reste 5 chaises</div>
      </div>
       <button class="favoris-button">Voir</button>
    </div>
    <div class="favoris-item">
      <div class="favoris-row">
        <div class="favoris-image">
        <img src="../../assets/images/food2.jpg" class="favoris-image" />
                <button class="favorite-button">
          <img src="../../assets/heart.png" width="40%" />
        </button>
        </div>
        <div class="favoris-description">
          <p class="evenement-titre">AAAA</p>
          <p class="avec">Avec QQN</p>
          <span class="lieu"> A Nice 1020€ </span>
        </div>
      </div>
      <div class="favoris-row">
        <div class="favoris-date">Mardi 18/11 a 16h</div>
        <div class="favoris-chaise">Reste 5 chaises</div>
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

<style lang="scss" scoped>
  @import "@s/evenements/evenements";
</style>