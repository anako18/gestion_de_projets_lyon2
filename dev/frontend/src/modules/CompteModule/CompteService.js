"use strict"

/**
 *  Réinitialise le tableau d'erreurs
 */
const reinitialisationErreurs = function () {
  for (const i in this.erreurs) this.erreurs[i] = []
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
 * Change l'identifiant du champ sélectionné dans le composant en fonction du choix de l'utilisateur
 * @param {string} champ
 */
const selectionUtilisateurChamp = function (champ) {
  this.selection = champ
}

const selectionEtatChamp = function (champ) {
  if (this.selection === "email" && champ === "email") return "actif"
  if (this.selection === "mdp" && champ === "mdp") return "actif"
  if (this.selection === "confMdp" && champ === "confMdp") return "actif"
  if (this.selection === "nom" && champ === "nom") return "actif"
  if (this.selection === "prenom" && champ === "prenom") return "actif"
  if (this.selection === "telephone" && champ === "telephone") return "actif"
  if (this.selection === "dateDeNaissance" && champ === "dateDeNaissance") return "actif"
  if (this.selection === "description" && champ === "description") return "actif"
  return "repos"
}

/**
 * Change l'état des cases à cocher dans le composant en fonction des choix de l'utilisateur
 * @param {*} caseACocher
 */
const selectionCaseACocher = function (caseACocher) {
  const caseACocherConvertis = this.conversionCamelCase(caseACocher)
  this.selectionsCases[caseACocherConvertis] = !this.selectionsCases[caseACocherConvertis]
}

/**
 * @param {string} donnee
 * @param {Array} payload
 */
const gestionChangement = function (donnee, payload) {
  this.identifiants[donnee] = payload
}

/**
 * Fonction utilitaire pour convertir une chaîne en camelCase
 * @param {*} chaine
 * @returns
 */
const conversionCamelCase = function (chaine) {
  return chaine.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase()
  }).replace(/\s+/g, "").replace(/-/g, "")
}

export default {
  reinitialisationErreurs,
  verificationErreurChamp,
  selectionUtilisateurChamp,
  selectionEtatChamp,
  selectionCaseACocher,
  gestionChangement,
  conversionCamelCase
}
