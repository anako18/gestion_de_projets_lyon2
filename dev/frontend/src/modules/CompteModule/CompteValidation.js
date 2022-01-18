"use strict"

/**
 * Valide les identifiants renseignés par l'utilisateur.
 * @param {Object} donneesAValider Identifiants renseignés par l'utilisateur.
 * @returns Vrai si les validations passent, une ou plusieurs erreurs sinon.
 */
export default (donneesAValider) => {
  // Gestion des erreurs
  const creationTableauErreurs = function () {
    const o = {}
    for (const i in donneesAValider) {
      o[i] = []
    }
    return o
  }
  const retourVerificationErreurs = function () {
    for (const i in erreurs) {
      if (erreurs[i].length >= 1) { return true }
    }
  }

  // Tableau d'erreurs, règles et leurs vérifications
  const erreurs = creationTableauErreurs()
  const emailLongueur = { min: 5, max: 64 }
  const emailExpReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/
  const mdpExpReg = /(.){8,64}/

  const verificationLongueur = function (donnee, regle) {
    const lg = donnee.length
    if (lg < regle.min || lg > regle.max) { return false }
    return true
  }

  // Validations des données
  const validationEmail = function () {
    if (!donneesAValider.email) {
      erreurs.email.push("EMAIL_MANQUANT")
    }
    if (!verificationLongueur(donneesAValider.email, emailLongueur)) {
      erreurs.email.push("EMAIL_LONGUEUR")
    }
    if (!emailExpReg.test(donneesAValider.email)) {
      erreurs.email.push("EMAIL_INVALIDE")
    }
  }
  const validationMdp = function () {
    if (!donneesAValider.mdp) {
      erreurs.mdp.push("MDP_MANQUANT")
    }
    if (!mdpExpReg.test(donneesAValider.mdp)) {
      erreurs.mdp.push("MDP_LONGUEUR")
    }
  }
  const validationConfMdp = function () {
    if (donneesAValider.confMdp !== donneesAValider.mdp || !donneesAValider.confMdp) {
      erreurs.confMdp.push("CONFMDP_INVALIDE")
    }
  }
  const retourValidation = function () {
    validationEmail()
    validationMdp()
    if ("confMdp" in donneesAValider) { validationConfMdp() }
    if (retourVerificationErreurs()) { throw erreurs } return erreurs
  }

  retourValidation()
}
