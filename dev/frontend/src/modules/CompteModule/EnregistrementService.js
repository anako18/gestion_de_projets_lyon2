"use strict"
import Api from "@m/ApiModule/ApiService"
import CompteValidation from "@m/CompteModule/CompteValidation"

/**
 * Valide les identifiants renseignés par l'utilisateur pour l'enregistrement.
 * @param {Object} identifiants Identifiants renseignés par l'utilisateur.
 * @returns Vrai si les vadiations passent, une ou plusieurs erreurs sinon.
 */
const validation = function (identifiants) {
  // Étape obligatoire pour ne récupérer que les entrées de l'objet qui nous intéressent
  const donneesAValider = {
    email: identifiants.email,
    mdp: identifiants.mdp,
    confMdp: identifiants.confMdp
  }
  const erreursRetournees = CompteValidation(donneesAValider)
  return erreursRetournees
}

/**
 * Envoie la requête d'enregistrement
 * @param {Object} identifiants Les identifiants utilisés pour s'enregistrer
 * @returns Un nouvel utilisateur si la requête succède, une erreur sinon.
 */
const enregistrement = function (identifiants) {
  return Api().post("enregistrement", identifiants)
}

export default {
  validation,
  enregistrement
}
