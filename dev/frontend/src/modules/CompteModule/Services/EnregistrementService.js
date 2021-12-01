"use strict";
import Api from "../../../services/Api";

/**
 * Requête d'enregistrement
 * @param credentials : Les identifiants utilisés pour s'enregistrer
 */
export default {
  enregistrement (credentials) {
    return Api().post("enregistrement", credentials);
  }
};
