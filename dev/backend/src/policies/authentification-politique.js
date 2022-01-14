const Joi = require("joi")

// TODO: Implémenter la même politique que pour l'Enregistrement pour éviter les doubles
module.exports = {
  authentification (requete, resultat, suivant) {
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

    const { erreur } = schema.validate(requete.body)

    if (erreur) {
      switch (erreur.details[0].context.key) {
        case "email":
          resultat.status(400).send({
            erreur: "Vous devez fournir une adresse email valide"
          })
          break
        case "password":
          resultat.status(400).send({
            erreur: "Vous devez fournir un mot de passe entre 8 et 64 caractères."
          })
          break
        default:
          resultat.status(400).send({
            erreur: "Erreur lors de l'authentification."
          })
      }
    } else {
      suivant()
    }
  }
}
