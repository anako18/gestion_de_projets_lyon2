"use strict"
import Api from "@m/ApiModule/ApiService.js"

const upload = function (fichier) {
  return Api().post("upload", fichier, { headers: { "Content-Type": "multipart/form-data" } })
}

export default {
  upload
}
