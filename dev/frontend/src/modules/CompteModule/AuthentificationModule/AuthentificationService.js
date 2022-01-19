"use strict"
import Api from "@m/ApiModule/ApiService.js"
import CompteValidation from "@m/CompteModule/CompteValidation.js"
import CompteService from "@m/CompteModule/CompteService.js"
import router from "@m/RouterModule/RouterService"

/**
 * Valide les identifiants renseignés par l'utilisateur pour l'enregistrement.
 * @returns Vrai si les validations passent, une ou plusieurs erreurs sinon.
 */
const validationAuthentification = function () {
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
const envoiAuthentification = async function () {
  // TODO: Refactoriser dans CompteService
  try {
    await this.authentification(this.identifiants)
      .then((valeur) => {
        const idUtilisateur = valeur.data.data.idUtilisateur
        window.localStorage.setItem("idUtilisateur", idUtilisateur)
        this.connexionValide = true
        setTimeout(() => { router.push({ path: "bienvenue" }) }, 3000)
      })
    CompteService.reinitialisationErreurs()
  } catch (erreur) {
    console.log(erreur)
    this.connexionValide = false
    // TODO: Faire le renvoi d'erreurs
    // this.erreurs.push(erreur.response.data.message)
  }
}

const authentification = function (credentials) {
  return Api().post("authentification", credentials)
}

const getUtilisateurs = function (ids) {
  return Api().post("utilisateurs", ids)
}

const getUtilisateur = function (id) {
  return Api().get("utilisateur", {
    params: {
      id: id
    }
  })
}

export default {
  validationAuthentification,
  envoiAuthentification,
  authentification,
  getUtilisateurs,
  getUtilisateur
}
