const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

/**
 * Déclaration de l'application
 *
 * Reçoit des requêtes en JSON ou encodées dans l'URL.
 * Sequelize est employé comme ORM pour les requêtes vers la base de données.
 */
const app = express()

app.use(morgan('combined')) // Utilisation de morgan pour logger les requêtes
app.use(express.json()) // Utilisation du middleware json d'Express
app.use(express.urlencoded({ extended: false })) // Utilisation du middleware urlencoded non étendu
app.use(cors()) // Pour contourner le problème de CORS et ALlow-Access-Origin

require('./routes')(app) // Les routes sont appelées puis passées à l'application

sequelize.sync({ force: true }) // Synchronisation de Sequelize puis lancement de l'application
  .then(() => {
    app.listen(config.port, () => {
      console.log(`Application lancée sur localhost:${config.port} !`)
    })
  })
