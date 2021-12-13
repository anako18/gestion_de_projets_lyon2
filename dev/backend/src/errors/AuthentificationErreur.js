class AuthentificationErreur extends Error {
  selectionMessageErreur (message) {
    switch (message) {
      case "AUCUN_UTILISATEUR_TROUVE":
        return "Les informations de connexion sont incorrectes.";
      case "MDP_INCORRECT":
        return "Les informations de connexion sont incorrectes.";
      default:
        return "Authentification : erreur inconnue.";
    }
  }

  constructor (message, messageUtilisateur) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AuthentificationErreur);
    }

    this.name = "AuthentificationErreur";
    this.message = message;
    this.messageUtilisateur = this.selectionMessageErreur(message);

    console.error(this.name, this.message, this.messageUtilisateur);
  }
}

module.exports = AuthentificationErreur;
