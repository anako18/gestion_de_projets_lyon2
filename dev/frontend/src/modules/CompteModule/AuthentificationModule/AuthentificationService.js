"use strict"
import Api from "@m/ApiModule/ApiService.js"

/**
 * Requête d'authentification
 * @param credentials Les identifiants utilisés pour s'authentifier
 */
export default {
  authentification (credentials) {
    return Api().post("authentification", credentials)
  }
}
