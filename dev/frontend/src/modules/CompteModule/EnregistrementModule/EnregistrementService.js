"use strict"
import Api from "@m/ApiModule/ApiService.js"
import CompteValidation from "@m/CompteModule/CompteValidation.js"

/**
 * Valide les identifiants renseignés par l'utilisateur pour l'enregistrement.
 * @param {Object} identifiants Identifiants renseignés par l'utilisateur.
 * @returns Vrai si les vadiations passent, une ou plusieurs erreurs sinon.
 */
const validation = function (identifiants) {
  return CompteValidation(identifiants)
}

/**
 * Envoie la requête d'enregistrement
 * @param {Object} identifiants Les identifiants utilisés pour s'enregistrer
 * @returns Un nouvel utilisateur si la requête succède, une erreur sinon.
 */
const enregistrement = function (identifiants) {
  return Api().post("enregistrement", identifiants)
}

/**
 * lol
 */
export default {
  validation,
  enregistrement
}
