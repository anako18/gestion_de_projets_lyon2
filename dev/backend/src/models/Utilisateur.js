const bcrypt = require("bcryptjs")

const hachageMotDePasse = function (utilisateur, options) {
  const FACTEUR_SEL = 8

  if (!utilisateur.changed("password")) {
    return
  }

  return bcrypt
    .genSalt(FACTEUR_SEL)
    .then(salt => bcrypt.hash(utilisateur.password, salt, null))
    .then(hash => {
      utilisateur.setDataValue("password", hash)
    })
}

//

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
    password: {
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
      type: DataTypes.STRING
    },
    civilite: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING
    },
    dateDeNaissance: {
      type: DataTypes.DATE
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    hooks: {
      beforeCreate: hachageMotDePasse,
      beforeUpdate: hachageMotDePasse
    }
  })

  Utilisateur.prototype.comparaisonMdp = function (motdepasse) {
    return bcrypt.compare(motdepasse, this.password)
  }

  return Utilisateur
}
