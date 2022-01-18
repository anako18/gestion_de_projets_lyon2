const enregistrementControleur = require("./controllers/enregistrement-controleur")
const enregistrementPolitique = require("./policies/enregistrement-politique")

const AuthentificationControleur = require("./controllers/authentification-controleur")
// const AuthentificationControleurPolitique = require("./policies/AuthentificationControleurPolitique");
const EvenementsControleur = require("./controllers/evenements-controleur")
module.exports = (app) => {
  app.post("/api/enregistrement",
    enregistrementPolitique.enregistrement,
    enregistrementControleur.enregistrement)

  app.post("/api/authentification",
    authentificationControleurPolitique.authentification,
    authentificationControleur.authentification)

  app.post("/evenement",
    EvenementsControleur.creerEvenement
  )

  app.get("/evenement",
    EvenementsControleur.getEvenement
  )

  app.get("/evenements",
    EvenementsControleur.getEvenements
  )
  app.post("/evenements",
    EvenementsControleur.getEvenementsByIds
  )
  app.get("/utilisateur",
    AuthentificationControleur.getUtilisateur
  )

  app.post("/utilisateurs",
    AuthentificationControleur.getUtilisateurs
  )
  app.get("/favoris",
    EvenementsControleur.getFavoris
  )
}
