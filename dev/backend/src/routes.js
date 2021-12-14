const EnregistrementControleur = require("./controllers/EnregistrementControleur");
const AuthentificationControleur = require("./controllers/AuthentificationControleur");

const EnregistrementAuthentificationPolitique = require("./policies/EnregistrementAuthentificationPolitique");

module.exports = (app) => {
  app.post("/enregistrement",
    EnregistrementAuthentificationPolitique.enregistrementAuthentification,
    EnregistrementControleur.enregistrement);

  app.post("/authentification",
    EnregistrementAuthentificationPolitique.enregistrementAuthentification,
    AuthentificationControleur.authentification);
};
