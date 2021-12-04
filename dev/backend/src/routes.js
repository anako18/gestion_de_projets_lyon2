const EnregistrementControleur = require("./controllers/EnregistrementControleur");
const EnregistrementControleurPolitique = require("./policies/EnregistrementControleurPolitique");

const AuthentificationControleur = require("./controllers/AuthentificationControleur");
const AuthentificationControleurPolitique = require("./policies/AuthentificationControleurPolitique");

const EvenementsControleur = require("./controllers/EvenementsControleur");

module.exports = (app) => {
  app.post("/enregistrement",
    EnregistrementControleurPolitique.enregistrement,
    EnregistrementControleur.enregistrement);

  app.post("/authentification",
    AuthentificationControleurPolitique.authentification,
    AuthentificationControleur.authentification);

  app.post("/evenement",
    EvenementsControleur.creerEvenement
  );
};
