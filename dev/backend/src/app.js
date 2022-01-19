const config = require("./config/config")
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { sequelize } = require("./models")

/**
 * Déclaration du serveur
 *
 * Reçoit des requêtes en JSON ou encodées dans l'URL.
 * Sequelize est employé comme ORM pour les requêtes vers la base de données.
 */
const app = express()

app.use(morgan("combined")) // Utilisation de morgan pour logger les requêtes
app.use(express.json()) // Utilisation du middleware json d'Express
app.use(express.urlencoded({ extended: false })) // Utilisation du middleware urlencoded non étendu
app.use(cors()) // Pour contourner le problème de CORS et Allow-Access-Origin

require("./routes")(app) // Les routes sont appelées puis passées au serveur

sequelize.sync({ force: true }) // Synchronisation de Sequelize puis lancement du serveur -- Passer à false pour conserver les données entre les sessions
  .then(() => {
    app.listen(config.port, () => {
      console.log(`Serveur lancé sur localhost:${config.port} !`)
    })
  })
