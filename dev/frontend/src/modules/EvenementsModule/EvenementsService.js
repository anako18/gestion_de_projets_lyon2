"use strict"
import Api from "@m/ApiModule/ApiService.js"

const evenement = function (id) {
  return Api().get("evenement", {
    params: {
      id: id
    }
  })
}

const favorisListe = function (idUtilisateur) {
  return Api().get("favoris", {
    params: {
      id: idUtilisateur
    }
  })
}

const mettreFavoris = function (uId, eId) {
  return Api().post("favoris", {
    idUtilisateur: uId,
    idEvenement: eId
  })
}

const supprimerFavoris = function (idUtilisateur, idEvenement) {
  return Api().delete("favoris", {
    params: {
      idUtilisateur: idUtilisateur,
      idEvenement: idEvenement
    }
  })
}

const getEvenements = function () {
  return Api().get("evenements")
}

const getEvenementsByIds = function (ids) {
  return Api().post("evenements", ids)
}

const evenementsInviteListe = function (idUtilisateur) {
  return Api().get("evenements-invite", {
    params: {
      idUtilisateur: idUtilisateur
    }
  })
}

const evenementsHoteListe = function (idUtilisateur) {
  return Api().get("evenements-hote", {
    params: {
      idUtilisateur: idUtilisateur
    }
  })
}

export default {
  evenement,
  getEvenements,
  favorisListe,
  getEvenementsByIds,
  mettreFavoris,
  supprimerFavoris,
  evenementsInviteListe,
  evenementsHoteListe
}
