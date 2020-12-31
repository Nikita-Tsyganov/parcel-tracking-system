const Sequelize = require('sequelize');
// const dotenv = require('dotenv');

// dotenv.config();

// module.exports =  new Sequelize(process.env.DATABASE_URL, {
module.exports =  new Sequelize('cf5', 'cf5', 'XQt98t7n5zKkA', {
  host: '167.114.153.153',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});