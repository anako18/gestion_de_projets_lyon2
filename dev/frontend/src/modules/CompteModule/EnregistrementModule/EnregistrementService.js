<<<<<<< HEAD
"use strict"
import Api from "@m/ApiModule/ApiService.js"
import CompteValidation from "@m/CompteModule/CompteValidation.js"

/**
 *  Réinitialise le tableau d'erreurs
 */
const reinitialisationErreurs = function () {
  for (const i in this.erreurs) this.erreurs[i] = []
}

/**
 * Valide les identifiants renseignés par l'utilisateur pour l'enregistrement.
 * @returns Vrai si les validations passent, une ou plusieurs erreurs sinon.
 */
const validationEnregistrement = function () {
  this.reinitialisationErreurs()
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
 * @param {string} champ
 */
const selectionUtilisateurChamp = function (champ) {
  this.selection = champ
}

/**
 * Vérifie la présence d'un type d'erreur pour un champ donné.
 * @param {string} champ
 * @param {Object} nomErreur
 */
const verificationErreurChamp = function (champ, nomErreur) {
  if (!this.erreurs[champ]) { return "invalide" }
  for (const e in this.erreurs[champ]) {
    if (this.erreurs[champ][e] === nomErreur) { return "invalide" }
  }
  return "valide"
}

/**
 *
 * @param {string} champ
 * @returns
 */
const selectionEtatChamp = function (champ) {
  if (this.selection === "email" && champ === "email") return "actif"
  if (this.selection === "mdp" && champ === "mdp") return "actif"
  if (this.selection === "confMdp" && champ === "confMdp") return "actif"
  return "repos"
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
 *
 */
export default {
  validationEnregistrement,
  reinitialisationErreurs,
  selectionUtilisateurChamp,
  verificationErreurChamp,
  selectionEtatChamp,
  enregistrement
}
=======
"use strict"
import Api from "@m/ApiModule/ApiService.js"
import CompteValidation from "@m/CompteModule/CompteValidation.js"

/**
 *  Réinitialise le tableau d'erreurs
 */
const reinitialisationErreurs = function () {
  for (const i in this.erreurs) this.erreurs[i] = []
}

/**
 * Valide les identifiants renseignés par l'utilisateur pour l'enregistrement.
 * @returns Vrai si les validations passent, une ou plusieurs erreurs sinon.
 */
const validationEnregistrement = function () {
  this.reinitialisationErreurs()
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
 * @param {string} champ
 */
const selectionUtilisateurChamp = function (champ) {
  this.selection = champ
}

/**
 * Vérifie la présence d'un type d'erreur pour un champ donné.
 * @param {string} champ
 * @param {Object} nomErreur
 */
const verificationErreurChamp = function (champ, nomErreur) {
  if (!this.erreurs[champ]) { return "invalide" }
  for (const e in this.erreurs[champ]) {
    if (this.erreurs[champ][e] === nomErreur) { return "invalide" }
  }
  return "valide"
}

/**
 *
 * @param {string} champ
 * @returns
 */
const selectionEtatChamp = function (champ) {
  if (this.selection === "email" && champ === "email") return "actif"
  if (this.selection === "mdp" && champ === "mdp") return "actif"
  if (this.selection === "confMdp" && champ === "confMdp") return "actif"
  return "repos"
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
 *
 */
export default {
  validationEnregistrement,
  reinitialisationErreurs,
  selectionUtilisateurChamp,
  verificationErreurChamp,
  selectionEtatChamp,
  enregistrement
}
>>>>>>> 00b0b9e (Front : Wow)
