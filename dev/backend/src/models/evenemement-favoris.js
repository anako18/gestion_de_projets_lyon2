module.exports = (Sequelize, DataTypes) =>
  Sequelize.define("EvenementFavoris", {
    evenementFavorisId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    evenementId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    utilisateurId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
