const EnregistrementControleur = require('./controllers/EnregistrementControleur')
const EnregistrementControleurPolitique = require('./policies/EnregistrementControleurPolitique')

module.exports = (app) => {
  app.post('/enregistrement',
    EnregistrementControleurPolitique.enregistrement,
    EnregistrementControleur.enregistrement)
}
