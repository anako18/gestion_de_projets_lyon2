const Joi = require("joi");

// TODO: Finir la documentation du code
module.exports = {
  /**
   * **Définit le schéma de l'enregistrement d'un Utilisateur à valider par Joi**
   *
   * @param {*} req La requête qui sera validée par Joi.
   * @param {*} res La réponse retournée par Joi.
   * @param {*} next Le passage de la requête à l'élément suivant, ici le contrôleur.
   */
  enregistrement (req, res, next) {
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

    // TODO: Créer une fonction qui fonctionne quelque soit le nom du champ
    /**
     * **Sélectionne le message d'erreur qui sera envoyé à l'utilisateur**
     *
     * @param {*} champ Le champ avant provoqué l'erreur.
     * @param {*} type Le type d'erreur renvoyé par Joi.
     * @returns Un message d'erreur pour l'utilisateur.
     */
    const selectionMessageErreur = (champ, type) => {
      if (champ === "email") {
        switch (type) {
          case "string.empty":
            return "Le champ de l'email ne peut être vide.";
          case "string.min":
            return "Le champ de l'email doit au moins contenir 5 caractères.";
          case "string.max":
            return "Le champ de l'email doit au plus contenir 64 caractères.";
          default:
            return "Email : erreur inconnue.";
        }
      } else {
        switch (type) {
          case "string.empty":
            return "Le champ du mot de passe ne peut être vide.";
          case "string.min":
            return "Le champ du mot de passe doit au moins contenir 5 caractères.";
          case "string.max":
            return "Le champ du mot de passe doit au plus contenir 64 caractères.";
          default:
            return "Mot de passe : erreur inconnue.";
        }
      }
    };

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
