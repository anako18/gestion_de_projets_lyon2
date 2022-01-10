"use strict"
import Api from "@m/ApiModule/ApiService.js"

export default {
  /**
   * Requête d'authentification
   * @param {Object} credentials Les identifiants utilisés pour s'authentifier
   */
  authentification (credentials) {
    return Api().post("authentification", credentials)
  }
}
