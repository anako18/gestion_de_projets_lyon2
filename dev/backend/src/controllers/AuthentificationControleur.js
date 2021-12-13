const { Utilisateur } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

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
            reject(new Error("Pas d'utilisateur trouvé"));
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
              reject(new Error("non matching password"));
            } else {
              resolve();
            }
          });
        });
        return pr;
      };

      /** Fonctions de gestion de l'échec de la validation */
      const selectionMessageErreur = (type) => {
        switch (type) {
          case "Pas d'utilisateur trouvé":
            return "Les informations de connexion sont incorrectes (utilisateur).";
          case "non matching password":
            return "Les informations de connexion sont incorrectes (mdp).";
          default:
            return "Authentification : erreur inconnue.";
        }
      };
      const retourEchecValidation = (erreur) => {
        const erreurMessage = selectionMessageErreur(erreur.message);
        return res.status(403).json({
          statut: "Échec",
          message: erreurMessage
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
          return retourEchecValidation(error);
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
