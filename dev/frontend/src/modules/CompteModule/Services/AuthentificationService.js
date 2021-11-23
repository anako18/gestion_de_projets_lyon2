import Api from '../../../services/Api'

/**
 * Requête d'authentification
 * @param credentials : Les identifiants utilisés pour s'authentifier
 */
export default {
  authentification (credentials) {
    return Api().post('authentification', credentials)
  }
}
