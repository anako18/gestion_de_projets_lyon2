const { Evenement } = require("../models");
const { EvenementFavoris } = require("../models");
const Op = require('sequelize').Op;

module.exports = {
  async creerEvenement(req, res) {
    try {
      const evenement = await Evenement.create(req.body);
      res.status(201).json({
        statut: "Succès",
        data: evenement
      });
    } catch (erreur) {
      res.status(400).json({
        statut: "Échec",
        erreur: erreur
      });
    }
  },

  async getEvenement(req, res) {
    try {
      /** Correspondance de la requête avec BDD */
      const id = parseInt(req.query.id);
      const evenement = await Evenement.findOne({
        where: {
          idEvenement: id
        }
      });
      return res.status(200).json({
        statut: "Succès",
        data: evenement
      });
    } catch (erreur) {
      /** Erreurs non gérées */
      return res.status(403).json({
        statut: "Échec (Erreur non gérée)",
        message: erreur.message
      });
    }
  },
  async getEvenements(req, res) {
    try {
      const evenements = await Evenement.findAll({
        where: {
          date: {
            [Op.lt]: new Date().toISOString()
          }
        }
      });
      return res.status(200).json({
        statut: "Succès",
        data: evenements
      });
    } catch (erreur) {
      /** Erreurs non gérées */
      return res.status(403).json({
        statut: "Échec (Erreur non gérée)",
        message: erreur.message
      });
    }
  },

  async getEvenementsByIds(req, res) {
    const { ids } = req.body;
    try {
      const evenements = await Evenement.findAll({
        where: {
          idEvenement: {
            [Op.in]: ids
          }
        }
      });
      return res.status(200).json({
        statut: "Succès",
        data: evenements
      });
    } catch (erreur) {
      /** Erreurs non gérées */
      return res.status(403).json({
        statut: "Échec (Erreur non gérée)",
        message: erreur.message
      });
    }
  },
  async getFavoris(req, res) {
    const id = parseInt(req.query.id);
    try {
      const favs = await EvenementFavoris.findAll({
        where: {
          utilisateurId: id
        }
      })
      return res.status(200).json({
        statut: "Succès",
        data: favs
      });
    } catch (erreur) {
      /** Erreurs non gérées */
      return res.status(403).json({
        statut: "Échec (Erreur non gérée)",
        message: erreur.message
      });
    }
  }
};
