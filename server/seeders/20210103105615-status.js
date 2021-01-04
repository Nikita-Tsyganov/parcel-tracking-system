'use strict'

const { Status } = require('../db.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
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
    await Promise.all(
      data.map(async (record) => {
        await Status.create(record)
      })
    )
  },

  down: async (queryInterface, Sequelize) => {
    await Status.destroy({
      where: {},
    })
  },
}
