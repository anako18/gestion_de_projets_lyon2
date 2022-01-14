module.exports = (Sequelize, DataTypes) =>
  Sequelize.define("EvenementReservation", {
    evenementReservationId: {
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
    },
    reservationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dateAnnulation: {
      type: DataTypes.DATE
    }
  })
