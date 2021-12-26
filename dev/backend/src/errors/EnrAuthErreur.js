class EnrAuthErreur extends Error {
  selectionMessageErreur (message) {
    switch (message) {
      case "EMAIL_DEJA_UTILISE":
        return "L'adresse email est déjà associée à un compte.";
      case ("AUCUN_UTILISATEUR_TROUVE" || "MDP_INCORRECT"):
        return "Les informations de connexion sont incorrectes.";
      default:
        return "Authentification : erreur inconnue.";
    }
  }

  constructor (message, messageUtilisateur) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, EnrAuthErreur);
    }

    this.name = "EnrAuthErreur";
    this.message = message;
    this.messageUtilisateur = this.selectionMessageErreur(message);

    console.error(this.name, this.message, this.messageUtilisateur);
  }
}

module.exports = EnrAuthErreur;
