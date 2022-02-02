"use strict"
import axios from "axios"

/**
 * Définition de l'adresse où s'exécutera l'API
 */
export default () => {
  return axios.create({
    // https://toquetoc.gcch.fr/api pour la prod
    baseURL: "https://toquetoc.gcch.fr/api"
  })
}
