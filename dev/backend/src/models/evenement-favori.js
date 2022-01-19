module.exports = (Sequelize, DataTypes) => {
  const EvenementFavori = Sequelize.define("EvenementFavori", {
    idEvenementFavori: {
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

  return EvenementFavori
}
