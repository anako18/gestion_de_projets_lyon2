<template>
  <main class="favoris-liste">
    <header class="header-logo">
      <img src="../assets/logo.png">
    </header>
    <div class="section-titre">
      <span class="titre"> Mes evenements </span>
    </div>
    <div class="tab">
      <button class="tablinks activetab" @click="afficheCategory($event, 'invite')">
        Je suis invité
      </button>
      <button class="tablinks" @click="afficheCategory($event, 'hote')">
        Je suis hôte
      </button>
    </div>
    <div id="hote" class="tabcontent activetab">
      <MonEvenement />
    </div>

    <div id="invite" class="tabcontent">
      <MonEvenement />
    </div>

    <FooterComponent />
  </main>
</template>

<script>
import MonEvenement from "../modules/EvenementsModule/MonEvenement.vue"
import FooterComponent from "../modules/Footer.vue"
export default {
  name: "Favoris",
  components: {
    MonEvenement,
    FooterComponent
  },
  methods: {
    afficheCategory (event, category) {
      let i, tabcontent, tablinks

      tabcontent = document.getElementsByClassName("tabcontent")
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
      }

      tablinks = document.getElementsByClassName("tablinks")
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" activetab", "")
      }

      document.getElementById(category).style.display = "block"
      event.currentTarget.className += " activetab"
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@s/evenements/evenements";
</style>
