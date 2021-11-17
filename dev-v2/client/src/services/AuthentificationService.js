import Api from "@/services/Api"

/**
 * Requête d'enregistrement
 * @param credentials : Les identifiants utilisés pour s'enregistrer
 */
export default {
  register (credentials) {
    return Api().post("register", credentials)
  }
}
