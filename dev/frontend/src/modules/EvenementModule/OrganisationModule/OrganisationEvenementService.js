"use strict"
import Api from "@m/ApiModule/ApiService.js"

const envoiCreerEvenement = async function () {
  try {
    await this.creerEvenement(this.evenementInformations)
      .then((valeur) => {
        // this.gestionTentative("succes", "etatEnregistrement")
      })
  } catch (erreur) {
    console.log("evenement-service", erreur)
    // this.gestionTentative("echec", "etatEnregistrement")
  }
}

const creerEvenement = function (donnees) {
  // FIXME: Corriger les noms de variables pour éviter ça
  const donneesMiseEnForme = {}
  donneesMiseEnForme.idHote = window.localStorage.getItem("idUtilisateur")
  donneesMiseEnForme.titre = donnees.titre
  donneesMiseEnForme.description = donnees.descriptionEvenement
  donneesMiseEnForme.descriptionPreparations = donnees.descriptionPreparations
  donneesMiseEnForme.date = donnees.date
  donneesMiseEnForme.codePostal = donnees.lieu.codePostal
  donneesMiseEnForme.duree = donnees.duree
  donneesMiseEnForme.ville = donnees.lieu.ville
  donneesMiseEnForme.adresse = donnees.lieu["numero-rue"]
  donneesMiseEnForme.typeEvenement = donnees.typeEvenement
  donneesMiseEnForme.typeCuisine = donnees.typeCuisine
  donneesMiseEnForme.prix = donnees.prix
  donneesMiseEnForme.capacite = donnees.nombrePlaces
  donneesMiseEnForme.photo = ""
  donneesMiseEnForme.date = donnees.date
  donneesMiseEnForme.accessTransportCommun = 0
  donneesMiseEnForme.accessPMR = 0
  donneesMiseEnForme.accessVoiture = 0
  return Api().post("evenement", donneesMiseEnForme)
}

export default {
  envoiCreerEvenement,
  creerEvenement
}
