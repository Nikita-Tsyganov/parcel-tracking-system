const { DataTypes } = require("sequelize");
const db = require('../config/database');

const Status = db.define('Status', {
 
  status: {
    type: DataTypes.STRING
  },

});

Status.sync().then(() => {
  console.log('Table Status created');
});

module.exports = Status;