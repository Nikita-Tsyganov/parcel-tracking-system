const { DataTypes } = require("sequelize");
const db = require('../config/database');

const User = db.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hash: {
    type: DataTypes.STRING
  },
  dateJoined: {
    type: DataTypes.STRING,
    default: Date.now
  },
  name: {
    type: DataTypes.STRING
  }
});

User.sync().then(() => {
  console.log('Table User created');
});

module.exports = User;