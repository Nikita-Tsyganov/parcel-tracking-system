const { DataTypes } = require("sequelize");
const db = require('../config/database');

const Employee = db.define('Employee', {
 
  last_name: {
    type: DataTypes.STRING
  },

  first_name: {
    type: DataTypes.STRING
  }
});

Employee.sync().then(() => {
  console.log('Table Employee created');
});

module.exports = Employee;