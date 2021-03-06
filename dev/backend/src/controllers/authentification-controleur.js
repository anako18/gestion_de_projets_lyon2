const { Utilisateur } = require("../models")
const jwt = require("jsonwebtoken")
const config = require("../config/config")
const AuthentificationErreur = require("../errors/authentification-erreur")
const Op = require("sequelize").Op

const signatureJwtUtilisateur = (utilisateur) => {
  const UNE_SEMAINE = 60 * 60 * 24 * 7
  try {
    return jwt.sign(utilisateur, config.auth.jwtSecret, {
      expiresIn: UNE_SEMAINE
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  /**
   * **Authentifie un Utilisateur**
   *
   * @param {*} req La requête qui sera contrôlée puis enregistrée en base de données.
   * @param {*} resultat La réponse retournée.
   * @returns
   */
  async authentification (requete, resultat) {
    try {
      /** Correspondance de la requête avec BDD */
      const { email, mdp } = requete.body
      const utilisateur = await Utilisateur.findOne({
        where: {
          email: email
        }
      })

      /** Fonctions de validation */
      const validationUtilisateur = function (utilisateur) {
        const pr = new Promise((resolve, reject) => {
          if (!utilisateur) {
            reject(new AuthentificationErreur("AUCUN_UTILISATEUR_TROUVE"))
          } else {
            resolve()
          }
        })
        return pr
      }
      const validationMotDePasse = function (utilisateur, mdp) {
        const pr = new Promise((resolve, reject) => {
          const value = utilisateur.comparaisonMdp(mdp)
          value.then(value => {
            if (!value) {
              reject(new AuthentificationErreur("MDP_INCORRECT"))
            } else {
              resolve()
            }
          })
        })
        return pr
      }

      const retourEchecValidation = (erreur) => {
        return resultat.status(403).json({
          statut: "Échec",
          message: erreur
        })
      }

      /** Fonction de gestion du succès de la validation */
      const retourSuccesValidation = () => {
        return resultat.status(200).json({
          statut: "Succès",
          token: signatureJwtUtilisateur(utilisateur.toJSON()),
          data: utilisateur
        })
      }

      /** Enclenchement des validations */
      Promise.all([validationUtilisateur(utilisateur), validationMotDePasse(utilisateur, mdp)])
        .then(() => {
          return retourSuccesValidation()
        })
        .catch(error => {
          console.log("authentification-controleur", error)
          return retourEchecValidation(error.messageUtilisateur)
        })
    } catch (error) {
      console.log("authentification-controleur", error)
      return resultat.status(403).json({
        statut: "Échec (Erreur non gérée)",
        message: error
      })
    }
  },
  async getUtilisateur (request, res) {
    try {
      console.log(request)
      const id = Number.parseInt(request.query.id)
      const utilisateur = await Utilisateur.findOne({
        where: {
          idUtilisateur: id
        }
      })
      return res.status(200).json({
        statut: "Succès",
        data: utilisateur
      })
    } catch (error) {
      return res.status(403).json({
        statut: "Échec (Erreur non gérée)",
        message: error.message
      })
    }
  },
  async getUtilisateurs (request, res) {
    try {
      const { ids } = request.body
      const utilisateurs = await Utilisateur.findAll({
        where: {
          idUtilisateur: {
            [Op.in]: ids
          }
        }
      })
      return res.status(200).json({
        statut: "Succès",
        data: utilisateurs
      })
    } catch (error) {
      return res.status(403).json({
        statut: "Échec (Erreur non gérée)",
        message: error.message
      })
    }
  }
}
