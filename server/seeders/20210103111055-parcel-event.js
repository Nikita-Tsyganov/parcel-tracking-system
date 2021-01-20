'use strict'

const { ParcelEvent } = require('../db.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const parcelEvents = [
      {
        parcelId: 1,
        statusId: 3,
        city: 'Toronto',
        province: 'ON',
      },
      {
        parcelId: 1,
        statusId: 8,
        city: 'Thunder Bay',
        province: 'ON',
      },
      {
        parcelId: 1,
        statusId: 9,
        city: 'Winnipeg',
        province: 'MB',
      },
      {
        parcelId: 2,
        statusId: 3,
        city: 'Winnipeg',
        province: 'MB',
      },
      {
        parcelId: 2,
        statusId: 8,
        city: 'Thunder Bay',
        province: 'ON',
      },
      {
        parcelId: 2,
        statusId: 9,
        city: 'Toronto',
        province: 'ON',
      },
    ]
    for (const parcelEvent of parcelEvents) {
      await ParcelEvent.create(parcelEvent)
      // Force waiting before creating the next record
      // in order to have different timestamps
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  },

  down: async (queryInterface, Sequelize) => {
    await ParcelEvent.destroy({
      where: {},
    })
  },
}
