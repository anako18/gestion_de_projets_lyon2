const { Evenement } = require("../models")
const { EvenementFavori } = require("../models")
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

  async evenementParId (request, res) {
    try {
      /** Correspondance de la requête avec BDD */
      const id = Number.parseInt(request.query.id)
      const evenement = await Evenement.findOne({
        where: {
          idEvenement: id
        }
      })
      const reservations = await EvenementReservation.findAll({
        where: {
          idEvenement: id
        }
      })
      let idsParticipants = reservations.map(r => r.getDataValue('idUtilisateur'))
      evenement.setDataValue('idsParticipants', idsParticipants)
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
  async evenementsListe (request, res) {
    try {
      const evenements = await Evenement.findAll({
        where: {
          date: {
            [Op.lt]: new Date().toISOString()
          }
        }
      })
      const favoris = await EvenementFavori.findAll({
        where: {
          idUtilisateur: 1
        }
      })
      for (const evenement of evenements) {
        if (favoris.find(f => f.getDataValue("idEvenement") == evenement.getDataValue("idEvenement"))) {
          evenement.setDataValue("favoris", 1)
        } else {
          evenement.setDataValue("favoris", 0)
        }
      }
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
  async favorisListeParIds (request, res) {
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
  async favorisListe (request, res) {
    const id = Number.parseInt(request.query.id)
    try {
      const favs = await EvenementFavori.findAll({
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
  async ajouterFavoris (request, res) {
    const { idEvenement, idUtilisateur } = request.body
    try {
      await EvenementFavori.create({
        idUtilisateur: idUtilisateur,
        idEvenement: idEvenement
      })
      return res.status(200).json({
        statut: "Succès",
        data: null
      })
    } catch (error) {
      /** Erreurs non gérées */
      return res.status(403).json({
        statut: "Échec (Erreur non gérée)",
        message: error.message
      })
    }
  },
  async suprimerFavoris (request, res) {
    const idUtilisateur = Number.parseInt(request.query.idUtilisateur)
    const idEvenement = Number.parseInt(request.query.idEvenement)
    try {
      await EvenementFavori.destroy({
        where: {
          idUtilisateur: idUtilisateur,
          idEvenement,
          idEvenement
        }
      })
      return res.status(200).json({
        statut: "Succès",
        data: null
      })
    } catch (error) {
      /** Erreurs non gérées */
      return res.status(403).json({
        statut: "Échec (Erreur non gérée)",
        message: error.message
      })
    }
  },
  async inviteEvenementsListe (request, res) {
    const idUtilisateur = Number.parseInt(request.query.idUtilisateur)
    try {
      const reservations = await EvenementReservation.findAll({
        where: {
          idUtilisateur: idUtilisateur
        }
      })
      const idsEvenements = reservations.map(r => r.getDataValue("idEvenement"))
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
    } catch (error) {
      /** Erreurs non gérées */
      return res.status(403).json({
        statut: "Échec (Erreur non gérée)",
        message: error.message
      })
    }
  },
  async hoteEvenementsListe (request, res) {
    const idUtilisateur = Number.parseInt(request.query.idUtilisateur)
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
    } catch (error) {
      /** Erreurs non gérées */
      return res.status(403).json({
        statut: "Échec (Erreur non gérée)",
        message: error.message
      })
    }
  },
  async evenementParticiper (request, res) {
    const { idEvenement, idUtilisateur } = request.body
    try {
      await EvenementReservation.create({
        idUtilisateur: idUtilisateur,
        idEvenement: idEvenement,
        reservationDate: new Date().toISOString()
      })
      return res.status(200).json({
        statut: "Succès",
        data: null
      })
    } catch (error) {
      /** Erreurs non gérées */
      return res.status(403).json({
        statut: "Échec (Erreur non gérée)",
        message: error.message
      })
    }
  }
}
