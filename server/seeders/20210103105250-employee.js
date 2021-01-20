'use strict'

const { Employee } = require('../db.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const employees = [
      {
        id: 'john-doe',
        password: 'johndoe1234',
        firstName: 'John',
        lastName: 'Doe',
      },
      {
        id: 'jane-doe',
        password: 'janedoe1234',
        firstName: 'Jane',
        lastName: 'Doe',
      },
    ]
    for (const employee of employees) {
      await Employee.create(employee)
      // Force waiting before creating the next record
      // in order to have different timestamps
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  },

  down: async (queryInterface, Sequelize) => {
    await Employee.destroy({
      where: {},
    })
  },
}
