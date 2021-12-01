<template>
  <div class="page">
    <EnTete />
    <router-view />
  </div>
</template>

<script>
import EnTete from "../modules/EnTeteModule/Components/EnTete.vue";

export default {
  name: "IndexVue",
  components: {
    EnTete
  }
};
</script>
