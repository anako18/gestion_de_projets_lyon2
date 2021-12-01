<template>
  <div class="inscription">
    <h1>{{ bienvenue }}</h1>
    <form action="">
    <fieldset>
      <legend>Inscription</legend>
      <div class="groupe-champ">
        <label for="nom">Nom</label>
        <input type="text" name="Nom" id="inscription-nom">
        <label for="prenom">Prénom</label>
        <input type="text" name="Nom" id="inscription-prenom">
        <label for="bdate">Date de naissance</label>
        <input type="datetime" name="DateNaiss" id="inscription-dnaiss" placeholder="JJ/MM/AAAA">
        <label for="email">Email</label>
        <input type="email" name="Email" id="inscription-email">
        <label for="utilisateur">Pseudo</label>
        <input type="text" name="Utilisateur" id="inscription-utilisateur">
      </div>
      <div id="validation">
        <button type="submit" class="validate-button">C'est parti !</button>
      </div>
    </fieldset>

    </form>
  </div>
</template>

<script>
export default {
  name: "Inscription",
  data () {
    return {
      bienvenue: "Bienvenue"
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
  border-radius: 25px;
  width: 100%;
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
.validate-button{
  background-color: black;
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5vw;
  font-size: 1.2rem;
  cursor: pointer;
}
.validate-button:hover{
  color: black;
  background-color: white;
}
#validation{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
