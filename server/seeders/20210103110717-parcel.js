'use strict'

const { Parcel } = require('../db.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const parcels = [
      {
        employeeId: 1,
        customerName: 'John Doe',
        origin: 'Here',
        destination: 'There',
      },
      {
        employeeId: 2,
        customerName: 'Jane Doe',
        origin: 'Here',
        destination: 'There',
      },
    ]
    for (const parcel of parcels) {
      await Parcel.create(parcel)
      // Force waiting before creating the next record
      // in order to have different timestamps
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  },

  down: async (queryInterface, Sequelize) => {
    await Parcel.destroy({
      where: {},
    })
  },
}
