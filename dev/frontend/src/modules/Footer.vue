<template>
  <div class="panel-footer">
    <div class="panel-element">
      <div class="recherche-image-panel" />
      <a class="link" href="/evenements-liste">
        <img
          class="panel-image"
          src="../../src/assets/panel/active-search-logo.png"
        >
        <span class="caption">Recherche</span>
      </a>
    </div>
    <div class="panel-element">
      <div class="recherche-image-panel" />
      <a class="link" href="/favoris-liste">
        <img
          class="panel-image"
          src="../../src/assets/panel/active-heart-logo.png"
        >
        <span class="caption">Favoris</span>
      </a>
    </div>
    <div class="panel-element">
      <div class="recherche-image-panel" />
      <a class="link" href="/mes-evenements">
        <img
          class="panel-image"
          src="../../src/assets/panel/active-calender-logo.png"
        >
        <span class="caption">Evenements</span>
      </a>
    </div>
    <div class="panel-element">
      <div class="recherche-image-panel" />
      <a class="link" href="/organisation-evenement">
        <img
          class="panel-image"
          src="../../src/assets/panel/active-toc-logo.png"
        >
        <span class="caption">J'organise</span>
      </a>
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
  mounted () {
    this.setActive()
  },
  methods: {
    setActive () {
      let i
      const tablinks = document.getElementsByClassName("link")
      for (i = 0; i < tablinks.length; i++) {
        console.log(tablinks[i].href)
        if (tablinks[i].href === window.location.href) {
          tablinks[i].className += " activelink"
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@s/evenements/evenements";
</style>
