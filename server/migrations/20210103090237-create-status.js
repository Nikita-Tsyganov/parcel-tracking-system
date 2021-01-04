'use strict'

const { Status } = require('../db.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Status.sync()
  },
  down: async (queryInterface, Sequelize) => {
    await Status.drop()
  },
}
