const bcrypt = require("bcryptjs")

const hachageMotDePasse = function (utilisateur, options) {
  const FACTEUR_SEL = 8

  if (!utilisateur.changed("mdp")) {
    return
  }

  return bcrypt
    .genSalt(FACTEUR_SEL)
    .then(salt => bcrypt.hash(utilisateur.mdp, salt, null))
    .then(hash => {
      utilisateur.setDataValue("mdp", hash)
    })
}

module.exports = (Sequelize, DataTypes) => {
  const Utilisateur = Sequelize.define("Utilisateur", {
    idUtilisateur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    mdp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    civilite: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dateDeNaissance: {
      type: DataTypes.DATE,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    hooks: {
      beforeCreate: hachageMotDePasse,
      beforeUpdate: hachageMotDePasse
    }
  })

  /** Compare le mot de passe en clair avec le mot de passe haché */
  Utilisateur.prototype.comparaisonMdp = function (motdepasse) {
    return bcrypt.compare(motdepasse, this.mdp)
  }

  Utilisateur.champsObligatoires = [
    "email",
    "mdp",
    "nom",
    "prenom",
    "dateDeNaissance",
    "civilite"
  ]

  return Utilisateur
}
