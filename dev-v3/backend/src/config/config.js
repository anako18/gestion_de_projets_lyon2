module.exports = {
  port: process.env.PORT || 8082,
  db: {
    database: process.env.DB_NAME || 'db',
    user: process.env.DB_USER || 'dev',
    password: process.env.DB_PASS || 'password',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './database.sqlite'
    }
  }
}
