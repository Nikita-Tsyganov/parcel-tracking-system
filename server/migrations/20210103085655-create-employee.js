'use strict'

const { Employee } = require('../db.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Employee.sync()
  },
  down: async (queryInterface, Sequelize) => {
    await Employee.drop()
  },
}
