<template>
  <header class="entete">
    <div class="entete__identite">
      Nom du site
    </div>
    <menu class="entete__menu">
      <router-link to="Enregistrement" class="entete__menu__lien">
        Enregistrement
      </router-link>
      <router-link to="Authentification" class="entete__menu__lien">
        Authentification
      </router-link>
    </menu>
  </header>
</template>

<script>
export default {
  name: "EnTete"
};
</script>

<style lang="scss" scoped>
.entete {
  position: sticky;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  font-family: 'IBM Plex Sans Text',  sans-serif;
  color: white;
  background-color: black;
  padding: 1rem 2rem;
  &__menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    &__lien {
      display: inline-block;
      margin: 0 1rem;
    }
  }
}
</style>
