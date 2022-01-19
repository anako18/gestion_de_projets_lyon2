const { Evenement } = require("../models")
const { EvenementFavoris } = require("../models")
const { EvenementReservation } = require("../models")
const Op = require("sequelize").Op

module.exports = {
  async creerEvenement (request, res) {
    try {
      const evenement = await Evenement.create(request.body)
      res.status(201).json({
        statut: "Succès",
        data: evenement
      })
    } catch (error) {
      res.status(400).json({
        statut: "Échec",
        erreur: error
      })
    }
  },

  async evenementParId(req, res) {
    try {
      /** Correspondance de la requête avec BDD */
      const id = Number.parseInt(req.query.id)
      const evenement = await Evenement.findOne({
        where: {
          idEvenement: id
        }
      })
      console.log(evenement)
      return res.status(200).json({
        statut: "Succès",
        data: evenement
      })
    } catch (error) {
      /** Erreurs non gérées */
      return res.status(403).json({
        statut: "Échec (Erreur non gérée)",
        message: error.message
      })
    }
  },
  async evenementsListe(req, res) {
    try {
      let evenements = await Evenement.findAll({
        where: {
          date: {
            [Op.lt]: new Date().toISOString()
          }
        }
      });
      const favoris = await EvenementFavoris.findAll({
        where: {
          idUtilisateur: 1
        }
      })
      evenements.forEach((evenement) => {
        if (favoris.find(f => f.getDataValue('idEvenement') == evenement.getDataValue('idEvenement'))) {
          evenement.setDataValue('favoris', 1)
        } else {
          evenement.setDataValue('favoris', 0)
        }
      })
      return res.status(200).json({
        statut: "Succès",
        data: evenements
      })
    } catch (error) {
      /** Erreurs non gérées */
      return res.status(403).json({
        statut: "Échec (Erreur non gérée)",
        message: error.message
      })
    }
  },
  async favorisListeParIds(req, res) {
    const { ids } = req.body;
    try {
      const evenements = await Evenement.findAll({
        where: {
          idEvenement: {
            [Op.in]: ids
          }
        }
      })
      return res.status(200).json({
        statut: "Succès",
        data: evenements
      })
    } catch (error) {
      /** Erreurs non gérées */
      return res.status(403).json({
        statut: "Échec (Erreur non gérée)",
        message: error.message
      })
    }
  },
  async favorisListe(req, res) {
    const id = parseInt(req.query.id);
    try {
      const favs = await EvenementFavoris.findAll({
        where: {
          idUtilisateur: id
        }
      })
      return res.status(200).json({
        statut: "Succès",
        data: favs
      })
    } catch (error) {
      /** Erreurs non gérées */
      return res.status(403).json({
        statut: "Échec (Erreur non gérée)",
        message: error.message
      })
    }
  },
  async ajouterFavoris(req, res) {
    const { idEvenement, idUtilisateur } = req.body;
    try {
      await EvenementFavoris.create({
        idUtilisateur: idUtilisateur,
        idEvenement: idEvenement
      })
      return res.status(200).json({
        statut: "Succès",
        data: null
      });
    } catch (erreur) {
      /** Erreurs non gérées */
      return res.status(403).json({
        statut: "Échec (Erreur non gérée)",
        message: erreur.message
      });
    }
  },
  async suprimerFavoris(req, res) {
    const idUtilisateur = parseInt(req.query.idUtilisateur);
    const idEvenement = parseInt(req.query.idEvenement);
    try {
      await EvenementFavoris.destroy({
        where: {
          idUtilisateur: idUtilisateur,
          idEvenement, idEvenement
        }
      })
      return res.status(200).json({
        statut: "Succès",
        data: null
      });
    } catch (erreur) {
      /** Erreurs non gérées */
      return res.status(403).json({
        statut: "Échec (Erreur non gérée)",
        message: erreur.message
      });
    }
  },
  async inviteEvenementsListe(req, res) {
    const idUtilisateur = parseInt(req.query.idUtilisateur);
    try {
      const reservations = await EvenementReservation.findAll({
        where: {
          idUtilisateur: idUtilisateur
        }
      })
      let idsEvenements = reservations.map(r => r.getDataValue('idEvenement'))
      const evenements = await Evenement.findAll({
        where: {
          idEvenement: {
            [Op.in]: idsEvenements
          }
        }
      })
      return res.status(200).json({
        statut: "Succès",
        data: evenements
      })
    } catch (erreur) {
      /** Erreurs non gérées */
      return res.status(403).json({
        statut: "Échec (Erreur non gérée)",
        message: erreur.message
      });
    }
  },
  async hoteEvenementsListe(req, res) {
    const idUtilisateur = parseInt(req.query.idUtilisateur);
    try {
      const evenements = await Evenement.findAll({
        where: {
          idHote: idUtilisateur
        }
      })
      return res.status(200).json({
        statut: "Succès",
        data: evenements
      })
    } catch (erreur) {
      /** Erreurs non gérées */
      return res.status(403).json({
        statut: "Échec (Erreur non gérée)",
        message: erreur.message
      });
    }
  }
}
