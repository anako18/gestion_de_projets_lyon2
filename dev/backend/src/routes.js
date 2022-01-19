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
  app.post("/api/evenement",
    evenementsControleur.creerEvenement
  )
  app.get("/api/evenement",
    evenementsControleur.evenementParId
  )
  app.get("/api/evenements",
    evenementsControleur.evenementsListe
  )
  app.post("/api/evenements",
    evenementsControleur.favorisListeParIds
  )
  app.get("/api/utilisateur",
    authentificationControleur.getUtilisateur
  )
  app.post("/api/utilisateurs",
    authentificationControleur.getUtilisateurs
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
};