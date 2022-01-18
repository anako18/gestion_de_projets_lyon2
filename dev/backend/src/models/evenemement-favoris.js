module.exports = (Sequelize, DataTypes) =>
  Sequelize.define("EvenementFavoris", {
    idEvenementFavoris: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    idEvenement: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idUtilisateur: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
