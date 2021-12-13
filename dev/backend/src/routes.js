const EnregistrementControleur = require("./controllers/EnregistrementControleur");
const EnregistrementControleurPolitique = require("./policies/EnregistrementControleurPolitique");

const AuthentificationControleur = require("./controllers/AuthentificationControleur");
// const AuthentificationControleurPolitique = require("./policies/AuthentificationControleurPolitique");

module.exports = (app) => {
  app.post("/enregistrement",
    EnregistrementControleurPolitique.enregistrement,
    EnregistrementControleur.enregistrement);

  app.post("/authentification",
    // AuthentificationControleurPolitique.authentification,
    AuthentificationControleur.authentification);
};
