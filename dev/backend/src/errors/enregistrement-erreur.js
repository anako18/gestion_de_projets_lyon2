class EnregistrementErreur extends Error {
  selectionMessageErreur (corpus, chemin, valeur) {
    const retour = corpus[chemin][valeur]
    if (retour) { return retour }
    return "Type d'erreur non gérée."
  }

  constructor (message, corpus, corpsErreur) {
    super(message)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, EnregistrementErreur)
    }

    this.name = "EnregistrementErreur"
    this.message = message
    this.corpus = corpus
    this.corpsErreur = corpsErreur
    this.messageErreur = []

    for (const champ in corpsErreur) {
      for (const valeur in corpsErreur[champ]) {
        this.messageErreur.push(this.selectionMessageErreur(corpus, champ, corpsErreur[champ][valeur]))
      }
    }

    console.log(corpsErreur)
  }
}

module.exports = EnregistrementErreur
