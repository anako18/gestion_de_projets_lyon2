
module.exports = {
  selectionMessageErreur (action, champ, type) {
    if (champ === "email") {
      switch (type) {
        case "string.email":
          return "L'email doit être valide.";
        case "string.empty":
          return "Le champ de l'email ne peut être vide.";
        case "string.min":
          return "Le champ de l'email doit au moins contenir 5 caractères.";
        case "string.max":
          return "Le champ de l'email doit au plus contenir 64 caractères.";
        default:
          return "Email : erreur inconnue.";
      }
    } else {
      switch (type) {
        case "string.empty":
          return "Le champ du mot de passe ne peut être vide.";
        case "string.min":
          return "Le champ du mot de passe doit au moins contenir 5 caractères.";
        case "string.max":
          return "Le champ du mot de passe doit au plus contenir 64 caractères.";
        default:
          return "Mot de passe : erreur inconnue.";
      }
    }
  }
};
