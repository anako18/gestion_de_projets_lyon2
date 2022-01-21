"use strict"
import Api from "@m/ApiModule/ApiService.js"
import CompteValidation from "@m/CompteModule/CompteValidation.js"
import CompteService from "@m/CompteModule/CompteService.js"
import router from "@m/RouterModule/RouterService"

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
  try {
    await this.enregistrement(this.identifiants)
      .then((valeur) => {
        CompteService.appositionIdentifiantUtilisateur(valeur.data.data.idUtilisateur)
        this.gestionTentative("succes", "etatEnregistrement")
        setTimeout(() => { router.push({ path: "bienvenue" }) }, 3000)
      })
    CompteService.reinitialisationErreurs()
  } catch (erreur) {
    // TODO: Faire le renvoi d'erreurs
    console.log("enregistrement-service", erreur)
    this.gestionTentative("echec", "etatEnregistrement")
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
