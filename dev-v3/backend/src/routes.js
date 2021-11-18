const AuthentificationController = require('./controllers/AuthentificationController')
const AuthentificationControllerPolicy = require('./policies/AuthentificationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthentificationControllerPolicy.register,
    AuthentificationController.register)
}
