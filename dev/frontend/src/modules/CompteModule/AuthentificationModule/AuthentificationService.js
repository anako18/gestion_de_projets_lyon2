"use strict"
import Api from "@m/ApiModule/ApiService.js"

const getUtilisateur = function (id) {
  return Api().get("utilisateur", {
    params: {
      id: id
    }
  })
}
/**
 * Requête d'authentification
 * @param credentials Les identifiants utilisés pour s'authentifier
 */

export default {
  /**
   * Requête d'authentification
   * @param {Object} credentials Les identifiants utilisés pour s'authentifier
   */
  authentification (credentials) {
    return Api().post("authentification", credentials)
  },
  getUtilisateur
}