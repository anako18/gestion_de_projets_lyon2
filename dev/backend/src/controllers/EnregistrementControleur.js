const { Utilisateur } = require('../models')

module.exports = {
  async enregistrement (req, res) {
    try {
      const utilisateur = await Utilisateur.create(req.body)
      res.send(utilisateur.toJSON())
    } catch (erreur) {
      res.status(400).send({
        erreur: 'Cette adresse email est déjà utilisée.'
      })
    }
  }
}
