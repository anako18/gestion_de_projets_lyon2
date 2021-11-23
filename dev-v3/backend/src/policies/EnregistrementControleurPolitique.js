const Joi = require('joi')

module.exports = {
  enregistrement (req, res, next) {
    const schema = Joi.object({
      email: Joi.string()
        .email()
        .min(5)
        .max(64)
        .required(),
      password: Joi.string()
        .regex(/(.){4,64}/)
        .required()
    })
    const { erreur } = schema.validate(req.body)

    if (erreur) {
      switch (erreur.details[0].context.key) {
        case 'email':
          res.status(400).send({
            erreur: 'Vous devez fournir une adresse email valide'
          })
          break
        case 'password':
          res.status(400).send({
            erreur: 'Vous devez fournir un mot de passe entre 8 et 64 caractères.'
          })
          break
        default:
          res.status(400).send({
            erreur: "Erreur lors de l'enregistrement"
          })
      }
    } else {
      next()
    }
  }
}
