module.exports = (Sequelize, DataTypes) =>
  Sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })
