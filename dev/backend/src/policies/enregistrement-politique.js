const Joi = require("joi")

// TODO: Finir la documentation du code
// TODO: Refactoriser la politique en une version commune avec l'Authentification
module.exports = {
  /**
   * **Définit le schéma de l'enregistrement d'un Utilisateur à valider par Joi**
   *
   * @param {*} requete La requête qui sera validée par Joi.
   * @param {*} resultat La réponse retournée par Joi.
   * @param {*} suivant Le passage de la requête à l'élément suivant, ici le contrôleur.
   */
  enregistrement (requete, resultat, suivant) {
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
    })

    /** Enclenche la validation par Joi. */
    const validation = schema.validate(requete.body)

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
          case "string.email":
            return "L'email doit être valide."
          case "string.empty":
            return "Le champ de l'email ne peut être vide."
          case "string.min":
            return "Le champ de l'email doit au moins contenir 5 caractères."
          case "string.max":
            return "Le champ de l'email doit au plus contenir 64 caractères."
          default:
            return "Email : erreur inconnue."
        }
      } else {
        switch (type) {
          case "string.empty":
            return "Le champ du mot de passe ne peut être vide."
          case "string.min":
            return "Le champ du mot de passe doit au moins contenir 5 caractères."
          case "string.max":
            return "Le champ du mot de passe doit au plus contenir 64 caractères."
          default:
            return "Mot de passe : erreur inconnue."
        }
      }
    }

    if (validation.error) {
      const erreurJson = validation.error.details[0]
      const erreurMessage = selectionMessageErreur(erreurJson.path[0], erreurJson.type)

      resultat.status(400).json({
        statut: "Échec",
        message: erreurMessage
        // erreur: erreurJson
      })
    } else {
      suivant()
    }
  }
}
