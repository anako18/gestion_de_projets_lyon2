import axios from 'axios'

/**
 * Définition de l'adresse où s'executera l'API
 */
export default () => {
  return axios.create({
    baseURL: `http://localhost:8081`
  })
}
