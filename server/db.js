'use strict'

const fs = require('fs')
const Sequelize = require('sequelize')
const { production: config } = require('./config/config.js')
const db = {}

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: 'mysql',
    operatorsAliases: 0,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
)

fs.readdirSync(__dirname + '/models')
  .filter((file) => {
    return file.indexOf('.') !== 0 && file.slice(-3) === '.js'
  })
  .forEach((file) => {
    const model = require(`./models/${file}`)(sequelize, Sequelize.DataTypes)
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
