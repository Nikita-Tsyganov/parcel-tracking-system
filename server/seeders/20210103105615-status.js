'use strict'

const { Status } = require('../db.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const statuses = [
      {
        status: 'Electronic information submitted by shipper',
      },
      {
        status: 'Shipment picked up by Canada Post',
      },
      {
        status: 'Shipment received at originating postal facility',
      },
      {
        status: 'Item processed',
      },
      {
        status: 'Item arrived',
      },
      {
        status: 'Arrived at sorting facility',
      },
      {
        status: 'Out for delivery',
      },
      {
        status: 'In transit',
      },
      {
        status: 'Delivered',
      },
    ]
    for (const status of statuses) {
      await Status.create(status)
      // Force waiting before creating the next record
      // in order to have different timestamps
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  },

  down: async (queryInterface, Sequelize) => {
    await Status.destroy({
      where: {},
    })
  },
}
