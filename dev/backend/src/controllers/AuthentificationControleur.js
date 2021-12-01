const { Utilisateur } = require("../models/Utilisateur");

// TODO: Gestion des erreurs pour l'authentification
module.exports = {
  async authentification (req, res) {
    try {
      const { email, password } = req.body;
      const utilisateur = await Utilisateur.findOne({
        where: {
          email: email
        }
      });

      // TODO: Passer la validation des données d'authentification dans un fichier de politique
      if (!utilisateur) {
        return res.status(403).send({
          erreur: "Les informations de connexion sont incorrectes."
        });
      }
      const estMotDePasseValide = password === utilisateur.password;
      if (!estMotDePasseValide) {
        return res.status(403).send({
          erreur: "Les informations de connexion sont incorrectes."
        });
      }

      // TODO: Réfléchir à un meilleur message de succès
      const utilisateurJson = utilisateur.toJSON();
      res.send({
        succes: "Utilisateur authentifié ! Bienvenue " + utilisateurJson.email + " !"
      });
    } catch (erreur) {
      res.status(500).send({
        erreur: "Erreur durant l'authentification."
      });
    }
  }
};
