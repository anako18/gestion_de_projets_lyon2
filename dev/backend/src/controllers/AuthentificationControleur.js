const { Utilisateur } = require("../models");

// TODO: Utiliser JWT
module.exports = {
  /**
   * **Authentifie un Utilisateur**
   *
   * TODO: Finir la documentation du code
   *
   * @param {*} req La requête qui sera contrôlée puis enregistrée en base de données.
   * @param {*} res La réponse retournée.
   * @returns
   */
  async authentification (req, res) {
    try {
      const { email, password } = req.body;
      const utilisateur = await Utilisateur.findOne({
        where: {
          email: email
        }
      });

      const validationUtilisateur = (utilisateur) => {
        if (!utilisateur) {
          throw new Error("no user found");
        }
      };
      const validationMotDePasse = (utilisateur, motdepasse) => {
        const motDePasseValide = motdepasse === utilisateur.password;
        if (!motDePasseValide) {
          throw new Error("non matching password");
        }
      };

      validationUtilisateur(utilisateur);
      validationMotDePasse(utilisateur, password);

      return res.status(200).json({
        statut: "Succès",
        data: utilisateur
      });
    } catch (erreur) {
      const selectionMessageErreur = (type) => {
        switch (type) {
          case "no user found":
            return "Les informations de connexion sont incorrectes.";
          case "non matching password":
            return "Les informations de connexion sont incorrectes.";
          default:
            return "Authentification : erreur inconnue.";
        }
      };

      const erreurMessage = selectionMessageErreur(erreur.message);

      return res.status(403).json({
        statut: "Échec",
        message: erreurMessage
      });
    }
  }
};
