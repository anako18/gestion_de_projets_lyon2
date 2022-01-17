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

/**
 * Ce qui sera retourné à l'utilisateur en cas d'échec de la validation
 *
 * @param {*} resultat La réponse à la requête envoyée
 * @param {*} erreur Le ou les erreurs relevées lors de la validation
 */
const retourEchecValidation = function (resultat, erreur) {
  resultat.status(400).json({
    statut: "Échec",
    etape: "Politique d'enregistrement",
    erreur: erreur
  })
}

/**
 * Valide la requête via Joi avec un schéma
 *
 * @param {*} requete La requête à valider.
 * @returns Une promesse résolvée si la validation passe, une promesse rejetée sinon.
 */
const validationJoi = function (requete) {
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

module.exports = {
  /**
   * Valide la requête pour l'enregistrement d'un nouvel Utilisateur par Joi
   *
   * @param {*} requete La requête qui sera validée par Joi.
   * @param {*} resultat La ou les erreurs retournées par Joi.
   * @param {*} suivant Le passage de la requête à l'élément suivant, ici le contrôleur.
   */
  enregistrement (requete, resultat, suivant) {
    Promise.resolve(validationJoi(requete))
      .then(() => suivant())
      .catch((error) => retourEchecValidation(resultat, error.messageErreur))
  }
}
