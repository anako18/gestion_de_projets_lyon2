const { Utilisateur } = require("../models")

module.exports = {
  /**
   * **Enregistre un nouvel Utilisateur**
   *
   * Pour procéder à l'enregistrement d'un nouvel Utilisateur, suite à la validation de Joi du bon
   * dans le fichier de politique, les données envoyées doivent être contrôlées auprès de la base
   * de données.
   *
   * Pour la création d'un nouvel Utilisateur, on teste la chose suivante :
   * - `email` : ce qui est rentré ne doit pas déjà exister dans la base de données, ce qui
   *   indiquerait qu'un compte existe déjà avec cette adresse. *Renvoie une erreur 400 en cas d'échec.*
   *
   * En cas de succès, sauf erreur non prévue, un nouveau compte Utilisateur est inséré en base de données.
   *
   * @param {*} requete La requête qui sera contrôlée puis enregistrée en base de données.
   * @param {*} resultat La réponse retournée.
   */
  async enregistrement (requete, resultat) {
    try {
      const utilisateur = await Utilisateur.create(requete.body)
      return resultat.status(201).json({
        statut: "Succès",
        data: utilisateur
      })
    } catch (error) {
      const selectionMessageErreur = (champ, type) => {
        if (champ === "email") {
          switch (type) {
            case "email must be unique":
              return "L'adresse email est déjà associée à un compte."
            default:
              return "Email : erreur inconnue."
          }
        }
      }

      const erreurJson = error.errors[0]
      const erreurMessage = selectionMessageErreur(erreurJson.path, erreurJson.message)

      return resultat.status(400).json({
        statut: "Échec",
        message: erreurMessage
      })
    }
  }
}
