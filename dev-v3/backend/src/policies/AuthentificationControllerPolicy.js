const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string()
        .required()
        .regex(/(.){4,64}/)
    })
    const { error } = schema.validate(req.body)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Vous devez fournir une adresse email valide'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Vous devez fournir un mot de passe entre 8 et 64 caractères.'
          })
          break
        default:
          res.status(400).send({
            error: "Erreur lors de l'enregistrement"
          })
      }
    } else {
      next()
    }
  }
}
