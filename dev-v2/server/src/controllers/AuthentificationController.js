// const { User } = require('../model')

module.exports = {
  register (req, res) {
    res.send({
      message: `Utilisateur enregistré avec l'adresse ${req.body.email}.`
    })
  }
}
