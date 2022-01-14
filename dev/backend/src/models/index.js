const fs = require("fs")
const path = require("path")
const Sequelize = require("sequelize")
const config = require("../config/config")

const database = {}
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

for (const file of fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== "index.js"
  )) {
  const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
  database[model.name] = model
}

database.sequelize = sequelize
database.Sequelize = Sequelize

module.exports = database
