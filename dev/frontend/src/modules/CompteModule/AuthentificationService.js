"use strict";
import Api from "../ApiModule/ApiService";

/**
 * Requête d'authentification
 * @param credentials : Les identifiants utilisés pour s'authentifier
 */
export default {
  authentification (credentials) {
    return Api().post("authentification", credentials);
  }
};
