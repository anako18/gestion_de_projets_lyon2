const enregistrementControleur = require("./controllers/enregistrement-controleur")
const enregistrementPolitique = require("./policies/enregistrement-politique")
const authentificationControleur = require("./controllers/authentification-controleur")
const authentificationPolitique = require("./policies/authentification-politique")
const evenementsControleur = require("./controllers/evenements-controleur")
module.exports = (app) => {
  app.post("/api/enregistrement",
    enregistrementPolitique.enregistrement,
    enregistrementControleur.enregistrement
    )
  app.post("/api/authentification",
    authentificationPolitique.authentification,
    authentificationControleur.authentification
    )
  app.post("/evenement",
    evenementsControleur.creerEvenement
  )
  app.get("/evenement",
    evenementsControleur.evenementParId
  )
  app.get("/evenements",
    evenementsControleur.evenementsListe
  )
  app.post("/evenements",
    evenementsControleur.favorisListeParIds
  )
  app.get("/utilisateur",
    authentificationControleur.getUtilisateur
  )
  app.post("/utilisateurs",
    authentificationControleur.getUtilisateurs
  )
  app.get("/favoris",
  evenementsControleur.favorisListe
  )
  app.post("/favoris",
  evenementsControleur.ajouterFavoris
  )
  app.delete("/favoris",
  evenementsControleur.suprimerFavoris
  )
};