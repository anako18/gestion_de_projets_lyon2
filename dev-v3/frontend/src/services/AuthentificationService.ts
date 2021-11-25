import Api from "@/lib/Api"

/**
 * Requête d'enregistrement
 * @param credentials : Les identifiants utilisés pour s'enregistrer
 */
export default {
  register(credentials: any) {
    return Api().post("register", credentials)
  }
}
