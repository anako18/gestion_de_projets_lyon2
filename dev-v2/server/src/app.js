const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

/**
 * Déclaration de l'application
 * Reçoit des requêtes en JSON ou encodées dans l'URL
 */
const app = express()
const PORT = process.env.PORT || 8081 // Déclaration du port

app.use(morgan('combined')) // Utilisation de morgan pour logger les requêtes
app.use(express.json()) // Utilisation du middleware json d'Express
app.use(express.urlencoded({ extended: false })) // Utilisation du middleware urlencoded non étendu
app.use(cors()) // Pour contourner le problème de CORS et ALlow-Access-Origin

app.listen(PORT, () => {
  console.log(`Application lancée sur localhost:${PORT} !`)
})

/**
 * Déclaration des routes
 */
app.get('/status', (req, res) => {
  res.send({
    message: 'hello world'
  })
})
