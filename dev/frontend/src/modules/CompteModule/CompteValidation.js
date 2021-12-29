"use strict"

/**
 * Valide les identifiants renseignés par l'utilisateur.
 * @param {Object} identifiants Identifiants renseignés par l'utilisateur.
 * @returns Vrai si les vadiations passent, une ou plusieurs erreurs sinon.
 */
export default (identifiants) => {
  const emailLongueur = { min: 5, max: 64 }
  const emailExpReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
  const mdpExpReg = /(.){8,64}/

  const validationEchouee = function () {
    if (erreurs.length > 0) {
      throw erreurs
    }
  }

  const erreurs = []
  const email = identifiants.email
  const mdp = identifiants.password

  // Vérification de la présence de données dans les champs
  if (!email) {
    erreurs.push("EMAIL_MANQUANT")
  }
  if (!mdp) {
    erreurs.push("MDP_MANQUANT")
  }
  // Vérification des données dans les champs
  if (email.length < emailLongueur.min || email.length > emailLongueur.max) {
    erreurs.push("EMAIL_LONGUEUR")
  }
  if (!emailExpReg.test(email)) {
    erreurs.push("EMAIL_INVALIDE")
  }
  if (!mdpExpReg.test(mdp)) {
    erreurs.push("MDP_LONGUEUR")
  }
  validationEchouee()

  return true
}
