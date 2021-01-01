const { DataTypes } = require('sequelize')
const db = require('../config/database')

const Test = db.define('Test', {
  test: {
    type: DataTypes.STRING,
  },
})

Test.sync().then(() => {
  console.log('Table Test created')
})

module.exports = Test
