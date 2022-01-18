"use strict"
import Api from "@m/ApiModule/ApiService.js"

const evenement = function (id) {
  return Api().get("evenement", {
    params: {
      id: id
    }
  })
}

const getEvenements = function () {
  return Api().get("evenements")
}

export default {
    evenement,
    getEvenements
}
