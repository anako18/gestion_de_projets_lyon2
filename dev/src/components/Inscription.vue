<template>
  <div class="inscription">
    <h1>{{ bienvenue }}</h1>
    <form action="">
    <fieldset>
      <legend>Inscription</legend>
      <div class="groupe-champ">
        <label for="email">Email</label>
        <input type="email" name="Email" id="inscription-email">
        <label for="utilisateur">Utilisateur</label>
        <input type="text" name="Utilisateur" id="inscription-utilisateur">
      </div>
      <div class="groupe-champ">
        <label for="nom">Nom</label>
        <input type="text" name="Nom" id="inscription-nom">
        <label for="prenom">Prénom</label>
        <input type="text" name="Nom" id="inscription-prenom">
      </div>
    </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Inscription',
  data () {
    return {
      bienvenue: 'Bienvenue'
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
form {
  margin: auto;
  max-width: 50%;
  text-align: left;
}
fieldset {
  padding: 1rem;
}
.groupe-champ {
  padding: 0 1rem;
  margin-bottom: 0.8rem;
}
label {
  display: block;
  color: darkslategray;
  margin-bottom: 0.2rem;
}
input {
  min-width: 100%;
  max-width: 100%;
  padding: 0.3rem;
  margin-bottom: 0.4rem;
}
legend {
  background-color: #000;
  color: #fff;
  padding: 3px 6px;
}
</style>
