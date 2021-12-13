const { Utilisateur } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const AuthentificationErreur = require("../errors/AuthentificationErreur");

const signatureJwtUtilisateur = (utilisateur) => {
  const UNE_SEMAINE = 60 * 60 * 24 * 7;
  try {
    return jwt.sign(utilisateur, config.auth.jwtSecret, {
      expiresIn: UNE_SEMAINE
    });
  } catch (erreur) {
    console.log(erreur);
  }
};

module.exports = {
  /**
   * **Authentifie un Utilisateur**
   *
   * TODO: Finir la documentation du code
   *
   * @param {*} req La requête qui sera contrôlée puis enregistrée en base de données.
   * @param {*} res La réponse retournée.
   * @returns
   */
  async authentification (req, res) {
    try {
      /** Correspondance de la requête avec BDD */
      const { email, password } = req.body;
      const utilisateur = await Utilisateur.findOne({
        where: {
          email: email
        }
      });

      /** Fonctions de validation */
      const validationUtilisateur = function (utilisateur) {
        const pr = new Promise((resolve, reject) => {
          if (!utilisateur) {
            reject(new AuthentificationErreur("AUCUN_UTILISATEUR_TROUVE"));
          } else {
            resolve();
          }
        });
        return pr;
      };
      const validationMotDePasse = function (utilisateur, password) {
        const pr = new Promise((resolve, reject) => {
          const val = utilisateur.comparaisonMdp(password);
          val.then(value => {
            if (!value) {
              reject(new AuthentificationErreur("MDP_INCORRECT"));
            } else {
              resolve();
            }
          });
        });
        return pr;
      };

      const retourEchecValidation = (erreur) => {
        return res.status(403).json({
          statut: "Échec",
          message: erreur
        });
      };

      /** Fonction de gestion du succès de la validation */
      const retourSuccesValidation = () => {
        return res.status(200).json({
          statut: "Succès",
          token: signatureJwtUtilisateur(utilisateur.toJSON()),
          data: utilisateur
        });
      };

      /** Enclenchement des validations */
      Promise.all([validationUtilisateur(utilisateur), validationMotDePasse(utilisateur, password)])
        .then(() => {
          return retourSuccesValidation();
        })
        .catch(error => {
          return retourEchecValidation(error.messageUtilisateur);
        });
    } catch (erreur) {
      /** Erreurs non gérées */
      return res.status(403).json({
        statut: "Échec (Erreur non gérée)",
        message: erreur
      });
    }
  }
};
