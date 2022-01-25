<template>
  <div id="filters-container" class="filters-div">
    <button class="button-left">
      &lt;
    </button>
    <div class="filter-item active">
      <span class="button-text">Proche de chez moi <i class="fas fa-times-circle fa-lg" /></span>
    </div>
    <div class="filter-item">
      <span class="button-text">Italien</span>
    </div>
    <div class="filter-item">
      <span class="button-text">Week-end</span>
    </div>
    <button class="button-right">
      &gt;
    </button>
  </div>
</template>

<script>
export default {
  name: "Filters"
}
</script>

<style lang="scss" scoped>
  @import "@s/evenements/evenements";
</style>
