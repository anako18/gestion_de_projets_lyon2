"use strict"
import Api from "@m/ApiModule/ApiService.js"
import CompteValidation from "@m/CompteModule/CompteValidation.js"
import CompteService from "@m/CompteModule/CompteService.js"

/**
 * Valide les identifiants renseignés par l'utilisateur pour l'enregistrement.
 * @returns Vrai si les validations passent, une ou plusieurs erreurs sinon.
 */
const validationEnregistrement = function () {
  // TODO: Refactoriser dans CompteService
  CompteService.reinitialisationErreurs()
  try {
    const resultat = CompteValidation(this.identifiants)
    this.validation = true
    return resultat
  } catch (erreur) {
    this.erreurs = erreur
    this.validation = false
  }
}

/**
 * Envoie les identifiants renseignés par l'utilisateur pour l'enregistrement
 * au backend.
 */
const envoiEnregistrement = async function () {
  // TODO: Refactoriser dans CompteService
  const donnees = this.identifiants
  try {
    await this.enregistrement(donnees)
    CompteService.reinitialisationErreurs()
  } catch (erreur) {
    // TODO: Faire le renvoi d'erreurs
    // this.erreurs.push(erreur.response.data.message)
  }
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
  validationEnregistrement,
  envoiEnregistrement,
  enregistrement
}
