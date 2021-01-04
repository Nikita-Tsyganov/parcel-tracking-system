'use strict'

const { Employee } = require('../db.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {
        firstName: 'John',
        lastName: 'Doe',
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
      },
    ]
    await Promise.all(
      data.map(async (record) => {
        await Employee.create(record)
      })
    )
  },

  down: async (queryInterface, Sequelize) => {
    await Employee.destroy({
      where: {},
    })
  },
}
