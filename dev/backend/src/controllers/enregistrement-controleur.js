const { Utilisateur } = require("../models")
const EnregistrementErreur = require("../errors/enregistrement-erreur")
const { enregistrementSequelizeErreurs } = require("../errors/catalogue-erreurs.js")

const selectionMessageErreur = (champ, type) => {
  if (champ === "email") {
    switch (type) {
      case "email must be unique":
        return "L'adresse email est déjà associée à un compte."
      default:
        return "Email : erreur inconnue."
    }
  }
}

module.exports = {
  /**
   * Enregistre un nouvel Utilisateur
   *
   * @param {*} requete La requête qui sera contrôlée puis enregistrée en base de données.
   * @param {*} resultat La réponse retournée.
   */
  async enregistrement (requete, resultat) {
    try {
      const utilisateur = await Utilisateur.create(requete.body)
      console.log("valeur", utilisateur)
    } catch (error) {
      console.log("error", error.errors[0].message)
    }
    // try {

    //   // const validationPresenceChamps = function (modele, champs) {
    //   //   return new Promise((resolve, reject) => {
    //   //     for (const champ of champs) {
    //   //       if (modele.champ && !champ) {
    //   //         const champMaj = champ.toUpperCase()
    //   //         reject(new Error(`AUCUN_${champMaj}_TROUVE`))
    //   //       }
    //   //     }
    //   //     resolve()
    //   //   })
    //   // }

    //   // const retourEchecValidation = (erreur) => {
    //   //   return resultat.status(403).json({
    //   //     statut: "Échec",
    //   //     message: erreur
    //   //   })
    //   // }

    //   // const retourSuccesValidation = () => {
    //   //   return resultat.status(201).json({
    //   //     statut: "Succès",
    //   //     data: utilisateur
    //   //   })
    //   // }
    // } catch (error) {
    //   console.log("enregistrement-controleur.js - error", error)

    //   const erreurJson = error.errors[0]
    //   const erreurMessage = selectionMessageErreur(erreurJson.path, erreurJson.message)

    //   return resultat.status(400).json({
    //     statut: "Échec",
    //     json: erreurJson,
    //     message: erreurMessage
    //   })
    // }
  }
}
