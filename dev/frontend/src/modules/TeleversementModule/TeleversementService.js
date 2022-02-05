"use strict"
import Api from "@m/ApiModule/ApiService.js"

const televersementRequeteOptions = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
}

const envoieTeleversement = async function (fichier) {
  // const resultat = await Api().post("upload", fichier, { headers: { "Content-Type": "multipart/form-data" } })
  return await Api().post("upload", fichier, televersementRequeteOptions)
}

const recupereTeleversement = async function (urlFichier) {
  return await Api().get("upload", {
    params: {
      urlFichier: urlFichier
    }
  })
}

const changeSourceImage = async function () {
  for (const evenement in this.evenementsHote) {
    if (this.evenementsHote[evenement].photo !== "") {
      await this.recupereTeleversement(this.evenementsHote[evenement].photo)
        .then((resultat) => {
          const nb = this.evenementsHote[evenement].idEvenement
          const champNom = `champImg${nb}`
          this.photos[nb] = resultat.request.responseURL
          for (const valeur in Object.keys(this.$refs)) {
            if (Object.keys(this.$refs)[valeur] === champNom) {
              const ref = Object.keys(this.$refs)[valeur]
              this.$refs[ref][0].src = this.photos[nb]
            }
          }
        })
    }
  }
}

export default {
  envoieTeleversement,
  recupereTeleversement,
  changeSourceImage
}
