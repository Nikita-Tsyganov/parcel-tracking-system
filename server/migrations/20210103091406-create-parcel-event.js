'use strict'

const { ParcelEvent } = require('../db.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await ParcelEvent.sync()
  },
  down: async (queryInterface, Sequelize) => {
    await ParcelEvent.drop()
  },
}
