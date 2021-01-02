const { DataTypes } = require('sequelize')
const db = require('../config/database')

const ParcelHistory = db.define('ParcelHistory', {
 parcel_id: {
    type: DataTypes.INTEGER,
  },
  status_id: {
    type: DataTypes.INTEGER,
  },
  location: {
    type: DataTypes.STRING,
  },
  datetime: {
    type: DataTypes.DATE,
  },
})

ParcelHistory.sync().then(() => {
  console.log('Table ParcelHistory created')
})

module.exports = ParcelHistory
