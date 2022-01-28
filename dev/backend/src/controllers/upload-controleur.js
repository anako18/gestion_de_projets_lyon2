const path = require("path")
const multer = require("multer")
const del = require("del")

const filtreImage = function (requete, fichier, callback) {
  if (!/\.(jpg|jpeg|png|gif)$/.test(fichier.originalname)) {
    return callback(new Error("Seules les images sont autorisées !"), false)
  }
  callback(undefined, true)
}
const enregistrementDisqueOptions = multer.diskStorage({
  destination: (requete, fichier, callback) => { callback(undefined, "./uploads") },
  filename: (requete, fichier, callback) => { callback(undefined, Date.now() + path.extname(fichier.originalname)) }
})
const enregistrementDisque = multer({
  storage: enregistrementDisqueOptions,
  fileFilter: filtreImage,
  limits: {
    files: 1,
    fileSize: 3_000_000
  }
})
  .single("file")

const retourSuccesTeleversement = function (resultat, upload) {
  return resultat.status(201).json({
    statut: "Succès",
    etape: "Téléversement d'image évènement",
    fichier: upload
  })
}

const retourEchecTeleversement = function (resultat, erreur) {
  return resultat.status(403).json({
    statut: "Échec",
    etape: "Téléversement d'image évènement",
    message: erreur
  })
}

const retourTeleversement = async function (requete, resultat) {
  try {
    await requete.file
    retourSuccesTeleversement(resultat, requete.file.filename)
  } catch (error) {
    console.log(error)
    retourEchecTeleversement(resultat, error)
  }
}

module.exports = {
  enregistrementDisque,
  retourTeleversement
}
