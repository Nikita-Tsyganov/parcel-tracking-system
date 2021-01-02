const { DataTypes } = require('sequelize')
const db = require('../config/database')

const Parcel = db.define('Parcel', {
 /* employee_id: {
    type: DataTypes.INTEGER,
  },*/ 
  trackingNumber: {
    type: DataTypes.STRING,
  },
  
  startLocation: {
    type: DataTypes.STRING,
  },
  desLocation: {
    type: DataTypes.STRING,
  },
  customerName: {
    type: DataTypes.STRING,
  },
})

Parcel.sync().then(() => {
  console.log('Table Parcel created')
})

module.exports = Parcel
