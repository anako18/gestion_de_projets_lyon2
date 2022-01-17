<template>
  <div class="evenements-liste">
    <div class="evenement">
      <div class="evenement-image">
        <img src="../../assets/food.png" width="100%" height="50%" />
        <button class="favorite-button">
          <img src="../../assets/heart.png" width="17%" />
        </button>
      </div>
      <div class="evenement-content">
        <div class="profile-titre">
          <img
            class="profile-pic"
            src="../../assets/person.png"
            width="20%"
            height="20%"
          />
          <span class="evenement-titre"> Soirée aux couleurs de l’Italie </span>
        </div>
        <div class="evenement-info">
          <span class="evenement-date"
            ><i class="icon-calendar"></i> Demain 18/11 a 11h
          </span>
          <span class="evenement-lieu"> Décines-Charpieu </span>
        </div>
        <div class="description-price">
          <p class="evenement-description">
            Pâtes fraîches <br />
            Sauce bolognaise <br />
            Entrée avec mozzarella
          </p>
          <div class="price-tag">
            <img src="../../assets/price.png" />
            <div class="price-centered">14€</div>
          </div>
        </div>
        <center>
          <button class="yellow-button" @click="evenement(1)">Participer</button>
        </center>
      </div>
    </div>
    <div class="evenement">
      <div class="evenement-image">
        <img src="../../assets/food.png" width="100%" height="50%" />
        <button class="favorite-button">
          <img src="../../assets/heart-f.png" width="17%" />
        </button>
      </div>
      <div class="evenement-content">
        <div class="profile-titre">
          <img
            class="profile-pic"
            src="../../assets/person.png"
            width="20%"
            height="20%"
          />
          <span class="evenement-titre"> Soirée aux couleurs de l’Italie </span>
        </div>
        <div class="evenement-info">
          <span class="evenement-date"
            ><i class="icon-calendar"></i> Demain 18/11 a 11h
          </span>
          <span class="evenement-lieu"> Décines-Charpieu </span>
        </div>
        <div class="description-price">
          <p class="evenement-description">
            Pâtes fraîches <br />
            Sauce bolognaise <br />
            Entrée avec mozzarella
          </p>
          <div class="price-tag">
            <img src="../../assets/price.png" />
            <div class="price-centered">14€</div>
          </div>
        </div>
        <center>
          <button class="yellow-button" @click="evenement(1)">Participer</button>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
import EvenementsService from "./EvenementsService.js";

export default {
  name: "Evenement",
  methods: {
    async evenement(id) {
      try {
        console.log(id)
        await EvenementsService.evenement(id);
      } catch (erreur) {
        console.log("Something went wrong : ", erreur.response.data.message);
      }
    },
  },
};
</script>