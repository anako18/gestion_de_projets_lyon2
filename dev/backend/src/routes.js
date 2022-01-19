const enregistrementControleur = require("./controllers/enregistrement-controleur")
const enregistrementPolitique = require("./policies/enregistrement-politique")
const authentificationControleur = require("./controllers/authentification-controleur")
const authentificationPolitique = require("./policies/authentification-politique")
const evenementsControleur = require("./controllers/evenements-controleur")

module.exports = (app) => {
  // Enregistrer Utilisateur
  app.post("/api/enregistrement",
    enregistrementPolitique.enregistrement,
    enregistrementControleur.enregistrement
  )
  // Authentifier Utilisateur
  app.post("/api/authentification",
    authentificationPolitique.authentification,
    authentificationControleur.authentification
  )
  // Récupérer un Utilisateur
  app.get("/api/utilisateur",
    authentificationControleur.getUtilisateur
  )
  // // Récupérer les Utilisateurs
  app.post("/api/utilisateurs",
    authentificationControleur.getUtilisateurs
  )
  // // Créer un évènement
  app.post("/api/evenement",
    evenementsControleur.creerEvenement
  )
  // // Récupérer un évènements
  app.get("/api/evenement",
    evenementsControleur.evenementParId
  )
  // // Récupérer les évènements
  app.get("/api/evenements",
    evenementsControleur.evenementsListe
  )
  // //
  app.post("/api/evenements",
    evenementsControleur.favorisListeParIds
  )
  app.get("/api/favoris",
    evenementsControleur.favorisListe
  )
  app.post("/api/favoris",
    evenementsControleur.ajouterFavoris
  )
  app.delete("/api/favoris",
    evenementsControleur.suprimerFavoris
  )
  app.get("/api/evenements-invite",
    evenementsControleur.inviteEvenementsListe
  )
  app.get("/api/evenements-hote",
    evenementsControleur.hoteEvenementsListe
  )
  app.post("/api/evenements-participer",
    evenementsControleur.evenementParticiper
  )
}
