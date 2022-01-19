module.exports = (Sequelize, DataTypes) => {
  const EvenementReservation = Sequelize.define("EvenementReservation", {
    evenementReservationId: {
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
    },
    reservationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dateAnnulation: {
      type: DataTypes.DATE
    }
  })

  return EvenementReservation
}
