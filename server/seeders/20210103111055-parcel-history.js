'use strict'

const { ParcelHistory } = require('../db.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const parcelHistories = [
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
    for (const parcelHistory of parcelHistories) {
      await ParcelHistory.create(parcelHistory)
      // Force waiting before creating the next record
      // in order to have different timestamps
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  },

  down: async (queryInterface, Sequelize) => {
    await ParcelHistory.destroy({
      where: {},
    })
  },
}
