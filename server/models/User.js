const { DataTypes } = require("sequelize");
const db = require('../config/database');

const User = db.define('User', {
 
 
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
},

  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING
  },
  lastname: {
    type: DataTypes.STRING
  },
  firstname: {
    type: DataTypes.STRING
  },
  role:{
    type: DataTypes.INTEGER }
});

User.sync().then(() => {
  console.log('Table User created');
});

module.exports = User;