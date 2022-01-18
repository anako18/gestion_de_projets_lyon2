const { Evenement } = require("../models")
const { EvenementFavoris } = require("../models")
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

  async getEvenement (request, res) {
    try {
      /** Correspondance de la requête avec BDD */
      const id = Number.parseInt(request.query.id)
      const evenement = await Evenement.findOne({
        where: {
          idEvenement: id
        }
      })
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
  async getEvenements (request, res) {
    try {
      const evenements = await Evenement.findAll({
        where: {
          date: {
            [Op.lt]: new Date().toISOString()
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

  async getEvenementsByIds (request, res) {
    const { ids } = request.body
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
  async getFavoris (request, res) {
    const id = Number.parseInt(request.query.id)
    try {
      const favs = await EvenementFavoris.findAll({
        where: {
          utilisateurId: id
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
    const {evenementId, utilisateurId} = req.body;
    console.log('user ',utilisateurId)
    console.log('evnt ',evenementId)
    try {
      await EvenementFavoris.create({
        utilisateurId: utilisateurId,
        evenementId: evenementId
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
    const utilisateurId = parseInt(req.query.utilisateurId);
    const evenementId = parseInt(req.query.evenementId);
    console.log('user ',utilisateurId)
    console.log('evnt ',evenementId)
    try {
      await EvenementFavoris.destroy({
        where: {
        utilisateurId: utilisateurId,
        evenementId, evenementId
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
  }
}
