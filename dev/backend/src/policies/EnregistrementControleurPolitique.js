const Joi = require('joi')

module.exports = {
  enregistrement (req, res, next) {
    const schema = Joi.object({
      email: Joi.string()
        .min(5)
        .max(64)
        .required()
        .email(),
      password: Joi.string()
        // .regex(/(.){4,64}/)
        .min(6)
        .max(64)
        .required()
    })

    const resultat = schema.validate(req.body)

    if (resultat.error) {
      res.status(400).json({
        statut: 'Échec',
        resultat: resultat
      })
    } else {
      res.status(200).json({
        statut: 'Succès',
        resultat: resultat
      })
      next()
    }
  }
}
