const Joi = require("joi");

// TODO: Finir la documentation du code
// TODO: Refactoriser la politique en une version commune avec l'Authentification
module.exports = {
  /**
   * **Définit le schéma de l'enregistrement d'un Utilisateur à valider par Joi**
   *
   * @param {*} req La requête qui sera validée par Joi.
   * @param {*} res La réponse retournée par Joi.
   * @param {*} next Le passage de la requête à l'élément suivant, ici le contrôleur.
   */
  enregistrementAuthentification (req, res, next) {
    const schema = Joi.object({
      email: Joi.string()
        .min(5)
        .max(64)
        .required()
        .email(),
      password: Joi.string()
        .min(6)
        .max(64)
        .required()
    });

    /** Enclenche la validation par Joi. */
    const resultat = schema.validate(req.body);

    // FIXEME: Utiliser le service SelectionMessageErreur

    if (resultat.error) {
      const erreurJson = resultat.error.details[0];
      const erreurMessage = selectionMessageErreur(erreurJson.path[0], erreurJson.type);

      res.status(400).json({
        statut: "Échec",
        message: erreurMessage
        // erreur: erreurJson
      });
    } else {
      next();
    }
  }
};
