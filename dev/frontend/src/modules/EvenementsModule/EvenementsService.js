"use strict"
import Api from "@m/ApiModule/ApiService.js"

const evenement = function (id) {
  return Api().get("evenement", {
    params: {
      id: id
    }
  })
}

const getFavoris = function (utilisateurId) {
  return Api().get("favoris", {
    params: {
      id: utilisateurId
    }
  })
}

const mettreFavoris = function(uId, eId) {
  return Api().post("favoris", {
      utilisateurId : uId,
      evenementId : eId
  })
}

const deleteFavoris = function(utilisateurId, evenementId) {
  return Api().delete("favoris", {
    params: {
      utilisateurId : utilisateurId,
      evenementId : evenementId
    }
  })
}

const getEvenements = function () {
  return Api().get("evenements")
}

const getEvenementsByIds = function (ids) {
  return Api().post("evenements", ids)
}

export default {
    evenement,
    getEvenements,
    getFavoris,
    getEvenementsByIds,
    mettreFavoris,
    deleteFavoris
}
