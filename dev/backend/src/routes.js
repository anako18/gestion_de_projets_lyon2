const enregistrementControleur = require("./controllers/enregistrement-controleur")
const enregistrementPolitique = require("./policies/enregistrement-politique")

const authentificationControleur = require("./controllers/authentification-controleur")
// const authentificationControleurPolitique = require("./policies/authentificationControleurPolitique");

module.exports = (app) => {
  app.post("/api/enregistrement",
    enregistrementPolitique.enregistrement,
    enregistrementControleur.enregistrement)

  app.post("/api/authentification",
    // authentificationControleurPolitique.authentification,
    authentificationControleur.authentification)
}
