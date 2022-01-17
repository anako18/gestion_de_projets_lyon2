const { Evenement } = require("../models");

module.exports = {
  async creerEvenement (req, res) {
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

  async getEvenement (req, res) {
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
  }
};
