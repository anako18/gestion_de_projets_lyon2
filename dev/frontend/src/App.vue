<template>
  <div id="app">
    <transition name="changement-page">
      <router-view />
    </transition>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@m/Footer.vue"

export default {
  components: {
    FooterComponent
  }
}
</script>

<style lang="scss">
  @import "@s/common.scss";
</style>
