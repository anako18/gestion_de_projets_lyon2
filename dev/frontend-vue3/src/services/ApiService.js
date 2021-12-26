"use strict"
import axios from "axios"

/**
 * Définition de l'adresse où s'exécutera l'API
 */
export default () => {
  return axios.create({
    baseURL: "http://localhost:8082"
  })
}
