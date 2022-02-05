"use strict"

const typesEvenement = {
  soiree: {
    id: 0,
    slug: "soiree-diner",
    nom: "Soirée / Dîner",
    description: "Pour une soirée, un dîner, en fin de journée."
  },
  brunch: {
    id: 1,
    slug: "brunch",
    nom: "Brunch",
    description: "Pour un brunch, généralement au milieu de la matinée ou en début d'après-midi."
  },
  gateau: {
    id: 2,
    slug: "gateau",
    nom: "Gâteau",
    description: "Pour la réalisation de pâtisseries."
  },
  aperitif: {
    id: 3,
    slug: "aperitif",
    nom: "Apéritif",
    description: "Pour la réalisation d'apéritifs, d'amuse-gueules."
  }
}
const typesCuisine = {
  italien: {
    id: 0,
    slug: "italien",
    nom: "Italien",
    description: "La cuisine italienne."
  },
  indien: {
    id: 1,
    slug: "indien",
    nom: "Indien",
    description: "La cuisine du sous-continent indien."
  },
  cjk: {
    id: 2,
    slug: "cjk",
    nom: "CJK",
    description: "La cuisine chinoise, japonaise et coréenne."
  },
  francais: {
    id: 3,
    slug: "francais",
    nom: "Français",
    description: "La cuisine française."
  },
  libanais: {
    id: 4,
    slug: "libanais",
    nom: "Libanais",
    description: "La cuisine libanaise."
  },
  russe: {
    id: 5,
    slug: "russe",
    nom: "Russe",
    description: "La cuisine russe."
  },
  iranien: {
    id: 6,
    slug: "iranien",
    nom: "Iranien",
    description: "La cuisine iranienne."
  },
  autre: {
    id: 7,
    slug: "autre",
    nom: "Autre",
    description: "Un type de cuisine n'entrant pas dans les choix précédents."
  }
}
const lieu = {
  "numero-rue": "",
  ville: "",
  codePostal: ""
}

const accessibilite = {
  "transports-en-commun": {
    id: 0,
    slug: "transports-en-commun",
    nom: "Transports en commun",
    description: "Ton adresse est facilement (< 15 min) accessible en transports en commun : métro, tramway, bus..."
  },
  voiture: {
    id: 1,
    slug: "voiture",
    nom: "Voiture",
    description: "Ton adresse est accessible en voiture (parkings à proximité)."
  },
  velo: {
    id: 2,
    slug: "velo",
    nom: "Vélo",
    description: "Ton adresse est accessible en vélo, notamment vélo à la demande (Vélov)."
  },
  pmr: {
    id: 3,
    slug: "pmr",
    nom: "Accessible PMR",
    description: "Ton adresse est accessible pour les personnes à mobilité réduite (PMR)."
  }
}

export default {
  typesEvenement,
  typesCuisine,
  lieu,
  accessibilite
}
