const { Evenement } = require("../models");

module.exports = {
  async creerEvenement (req, res) {
    try {
      const evenement = await Evenement.create(req.body);
      res.status(201).json({
        statut: "Succès",
        data: evenement.toJSON()
      });
    } catch (erreur) {
      res.status(400).json({
        statut: "Échec",
        erreur: erreur
      });
    }
  }
};
