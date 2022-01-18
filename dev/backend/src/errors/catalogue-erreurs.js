/**
 * Corpus des messages d'erreur renvoyés lors de la validation Joi.
 */
const enregistrementJoiErreurs = {
  email: {
    "string.email": "L'email doit être valide.",
    "string.empty": "Le champ de l'email ne peut être vide.",
    "string.min": "Le champ de l'email doit au moins contenir 5 caractères.",
    "string.max": "Le champ de l'email doit au plus contenir 64 caractères."
  },
  mdp: {
    "string.empty": "Le champ du mot de passe ne peut être vide.",
    "string.min": "Le champ du mot de passe doit au moins contenir 6 caractères.",
    "string.max": "Le champ du mot de passe doit au plus contenir 64 caractères."
  },
  nom: {
    "any.required": "Le champ du nom ne peut être vide.",
    "string.empty": "Le champ du nom ne peut être vide.",
    "string.min": "Le champ du nom doit au moins contenir 2 caractères.",
    "string.max": "Le champ du nom doit au plus contenir 64 caractères."
  },
  prenom: {
    "any.required": "Le champ du prénom ne peut être vide.",
    "string.empty": "Le champ du prénom ne peut être vide.",
    "string.min": "Le champ du prénom doit au moins contenir 2 caractères.",
    "string.max": "Le champ du prénom doit au plus contenir 64 caractères."
  },
  dateDeNaissance: {
    "any.required": "La date de naissance ne peut être laissée vide.",
    "date.base": "La date de naissance doit être valide."
  }
}

const enregistrementSequelizeErreurs = {
  email: {
    "email must be unique": "Veuillez choisir une adresse email différente."
  }
}

module.exports = { enregistrementJoiErreurs, enregistrementSequelizeErreurs }
