'use strict'

const { ParcelHistory } = require('../db.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await ParcelHistory.sync()
  },
  down: async (queryInterface, Sequelize) => {
    await ParcelHistory.drop()
  },
}
