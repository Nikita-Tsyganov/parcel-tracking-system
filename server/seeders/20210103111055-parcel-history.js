'use strict'

const { ParcelHistory } = require('../db.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {
        parcelId: 1,
        statusId: 3,
        location: 'Start',
        datetime: Sequelize.fn('NOW'),
      },
      {
        parcelId: 1,
        statusId: 8,
        location: 'In-Between',
        datetime: Sequelize.fn('NOW'),
      },
      {
        parcelId: 1,
        statusId: 9,
        location: 'Finish',
        datetime: Sequelize.fn('NOW'),
      },
      {
        parcelId: 2,
        statusId: 3,
        location: 'Start',
        datetime: Sequelize.fn('NOW'),
      },
      {
        parcelId: 2,
        statusId: 8,
        location: 'In-Between',
        datetime: Sequelize.fn('NOW'),
      },
      {
        parcelId: 2,
        statusId: 9,
        location: 'Finish',
        datetime: Sequelize.fn('NOW'),
      },
    ]
    await Promise.all(
      data.map(async (record) => {
        await ParcelHistory.create(record)
      })
    )
  },

  down: async (queryInterface, Sequelize) => {
    await ParcelHistory.destroy({
      where: {},
    })
  },
}
