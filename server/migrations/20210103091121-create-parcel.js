'use strict'

const { Parcel } = require('../db.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Parcel.sync()
  },
  down: async (queryInterface, Sequelize) => {
    await Parcel.drop()
  },
}
