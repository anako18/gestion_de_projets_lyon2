const AuthentificationController = require('./controllers/AuthentificationController')

module.exports = (app) => {
  app.post('/register',
    AuthentificationController.register)
}
