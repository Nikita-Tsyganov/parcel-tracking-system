'use strict'

const { Parcel } = require('../db.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
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
    await Promise.all(
      data.map(async (record) => {
        await Parcel.create(record)
      })
    )
  },

  down: async (queryInterface, Sequelize) => {
    await Parcel.destroy({
      where: {},
    })
  },
}
