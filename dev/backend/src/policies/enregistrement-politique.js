"use strict"
const Joi = require("joi")

const EnregistrementErreur = require("../errors/enregistrement-erreur.js")
const { enregistrementJoiErreurs } = require("../errors/catalogue-erreurs.js")

/**
 * Schéma pour la création d'un Utilisateur lors de l'Enregistrement
 */
const schema = Joi.object({
  email: Joi.string()
    .min(5)
    .max(64)
    .required()
    .email(),
  mdp: Joi.string()
    .min(6)
    .max(64)
    .required(),
  nom: Joi.string()
    .min(2)
    .max(64)
    .required(),
  prenom: Joi.string()
    .min(2)
    .max(64)
    .required(),
  dateDeNaissance: Joi.date()
    .required(),
  civilite: Joi.string()
    .required()
})

/** Ce qui sera retourné en cas d'échec de la validation */
const retourEchecValidation = (resultat, erreur) => {
  resultat.status(400).json({
    statut: "Échec",
    etape: "Politique d'enregistrement",
    erreur: erreur
  })
}

module.exports = {
  /**
   * Définit le schéma de l'enregistrement d'un Utilisateur à valider par Joi
   *
   * @param {*} requete La requête qui sera validée par Joi.
   * @param {*} resultat La réponse retournée par Joi.
   * @param {*} suivant Le passage de la requête à l'élément suivant, ici le contrôleur.
   */
  enregistrement (requete, resultat, suivant) {
    // TODO: Déplacer cette fonction en dehors de l'export de module
    /** Enclenche la validation par Joi. */
    const validation = function () {
      const p = new Promise((resolve, reject) => {
        const resultat = schema.validate(requete.body, { abortEarly: false })
        // La validation échoue et un objet error est renvoyé
        if (resultat.error) {
          const erreurRenvoye = {}
          const erreurJson = resultat.error.details
          for (const champ in erreurJson) {
            const erreurChamp = erreurJson[champ].path[0]
            const erreurMessage = erreurJson[champ].type
            if (!erreurRenvoye[erreurChamp]) {
              erreurRenvoye[erreurChamp] = []
            }
            erreurRenvoye[erreurChamp].push(erreurMessage)
          }
          reject(new EnregistrementErreur(
            "Erreur(s) lors de la validation des données",
            enregistrementJoiErreurs,
            erreurRenvoye
          ))
        }
        // La validation reussie
        resolve(requete.body)
      })
      return p
    }

    Promise.resolve(validation())
      .then(() => suivant())
      .catch((error) => retourEchecValidation(resultat, error.messageErreur))
  }
}
