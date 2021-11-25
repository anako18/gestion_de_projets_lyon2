const { Utilisateur } = require('../models')

// TODO: Gestion des erreurs pour l'enregistrement
module.exports = {
  async enregistrement (req, res) {
    try {
      const utilisateur = await Utilisateur.create(req.body)
      res.status(201).json({
        statut: 'Succès',
        data: utilisateur.toJSON()
      })
    } catch (erreur) {
      res.status(400).json({
        statut: 'Échec',
        erreur: erreur
      })
    }
  }
}
