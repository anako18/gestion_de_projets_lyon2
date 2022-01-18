"use strict"
const { Utilisateur } = require("../models")

const EnregistrementErreur = require("../errors/enregistrement-erreur")
const { enregistrementSequelizeErreurs } = require("../errors/catalogue-erreurs.js")

const retourSuccesValidation = function (resultat, utilisateur) {
  return resultat.status(201).json({
    statut: "Succès",
    etape: "Contrôleur d'enregistrement",
    data: utilisateur
  })
}

const retourEchecValidation = function (resultat, erreur) {
  return resultat.status(403).json({
    statut: "Échec",
    etape: "Contrôleur d'enregistrement",
    message: erreur
  })
}

const creationUtilisateur = async function (donnees) {
  try {
    const utilisateur = await Utilisateur.create(donnees)
    return utilisateur
  } catch (error) {
    const erreurRenvoye = {}
    const erreurChamp = error.errors[0].path
    const erreurMessage = error.errors[0].message
    erreurRenvoye[erreurChamp] = [erreurMessage]
    throw new EnregistrementErreur(
      "Erreur(s) lors de la validation des données",
      enregistrementSequelizeErreurs,
      erreurRenvoye
    )
  }
}

module.exports = {
  /**
   * Enregistre un nouvel Utilisateur
   *
   * @param {*} requete La requête qui sera contrôlée puis enregistrée en base de données.
   * @param {*} resultat La réponse retournée.
   */
  async enregistrement (requete, resultat) {
    await creationUtilisateur(requete.body)
      .then((utilisateur) => {
        retourSuccesValidation(resultat, utilisateur)
      })
      .catch((error) => retourEchecValidation(resultat, error.messageErreur))
  }
}
