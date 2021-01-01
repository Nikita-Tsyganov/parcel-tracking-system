const { DataTypes } = require("sequelize");
const db = require('../config/database');

const Parcel = db.define('Parcel', {
 id: {
       type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

 startLocation: {
    type: DataTypes.STRING
  },

  desLocation: {
    type: DataTypes.STRING
  },

  customerName: {
    type: DataTypes.STRING
  }
});

User.sync().then(() => {
  console.log('Parcel User created');
});

module.exports = Parcel;