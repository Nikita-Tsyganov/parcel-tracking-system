'use strict'

const { Parcel } = require('../db.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const parcels = [
      {
        employeeId: 'john-doe',
        fromName: 'John Smith',
        fromAddress: '123-456 Toronto St.',
        fromCity: 'Toronto',
        fromProvince: 'ON',
        fromPostalCode: 'A1B 1C2',
        fromPhone: '4169811234',
        toName: 'Jane Smith',
        toAddress: '456-789 Winnipeg St.',
        toCity: 'Winnipeg',
        toProvince: 'MB',
        toPostalCode: 'D3E 4F5',
        toPhone: '2049815678',
      },
      {
        employeeId: 'jane-doe',
        fromName: 'Jane Smith',
        fromAddress: '456-789 Winnipeg St.',
        fromCity: 'Winnipeg',
        fromProvince: 'MB',
        fromPostalCode: 'D3E 4F5',
        fromPhone: '2049815678',
        toName: 'John Smith',
        toAddress: '123-456 Toronto St.',
        toCity: 'Toronto',
        toProvince: 'ON',
        toPostalCode: 'A1B 1C2',
        toPhone: '4169811234',
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
