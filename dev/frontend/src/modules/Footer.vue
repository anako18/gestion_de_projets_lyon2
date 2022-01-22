<template>
  <div v-if="routeCourante" class="panel-footer">
    <div class="panel-element">
      <div class="recherche-image-panel" />
      <router-link
        class="link"
        to="/evenements-liste"
        @click.native="setActive()"
      >
        <img
          class="panel-image"
          src="../../src/assets/panel/active-search-logo.png"
        >
        <span class="caption">Recherche</span>
      </router-link>
    </div>
    <div class="panel-element">
      <div class="recherche-image-panel" />
      <router-link
        class="link"
        to="/favoris-liste"
        @click.native="setActive()"
      >
        <img
          class="panel-image"
          src="../../src/assets/panel/active-heart-logo.png"
        >
        <span class="caption">Favoris</span>
      </router-link>
    </div>
    <div class="panel-element">
      <div class="recherche-image-panel" />
      <router-link
        class="link"
        to="/mes-evenements"
        @click.native="setActive()"
      >
        <img
          class="panel-image"
          src="../../src/assets/panel/active-calender-logo.png"
        >
        <span class="caption">Evenements</span>
      </router-link>
    </div>
    <div class="panel-element">
      <div class="recherche-image-panel" />
      <router-link
        class="link"
        to="/organisation-evenement"
        @click.native="setActive()"
      >
        <img
          class="panel-image"
          src="../../src/assets/panel/active-toc-logo.png"
        >
        <span class="caption">J'organise</span>
      </router-link>
    </div>
    <div class="panel-element">
      <div class="recherche-image-panel" />
      <a class="link" href="#">
        <img
          class="panel-image"
          src="../../src/assets/panel/active-profile-logo.png"
        >
        <span class="caption">Mon compte</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      vueActive: ""
    }
  },
  computed: {
    routeCourante () {
      return this.estRouteAutorisee()
    }
  },
  mounted () {
    this.setActive()
  },
  updated () {
    this.setActive()
  },
  methods: {
    setActive () {
      let i
      const tablinks = document.getElementsByClassName("link")
      for (i = 0; i < tablinks.length; i++) {
        if (tablinks[i].href === window.location.href) {
          tablinks[i].className += " activelink"
        }
      }
      this.vueActive = window.location.href
    },
    estRouteAutorisee () {
      const routeActive = this.$route.fullPath
      const routesInterdites = [
        "/",
        "/bienvenue",
        "/instructions1",
        "/instructions2",
        "/instructions3",
        "/premiere-visite",
        "/connexion",
        "/inscription"
      ]
      for (const route of routesInterdites) {
        if (route === routeActive) return false
      }
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@s/evenements/evenements";
</style>
