<template>
  <div class="modal">
    <p>lol</p>
    <button @click="$router.go(-1)">
      close
    </button>
  </div>
</template>

<script>
export default {
  data () {
    const params = this.$route.params
    return {
      type: params.type
    }
  }
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
}
</style>
