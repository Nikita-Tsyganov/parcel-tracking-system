'use strict'

const { Model } = require('sequelize')
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      Employee.hasMany(models.Parcel, {
        sourceKey: 'id',
        foreignKey: 'employeeId',
        as: 'parcels',
      })
    }
  }
  Employee.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fullName: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.firstName} ${this.lastName}`
        },
        set(value) {
          throw new Error(
            `Cannot set the value of "fullName" to ${value} because it is a virtual field.`
          )
        },
      },
    },
    {
      sequelize,
      modelName: 'Employee',
      tableName: 'Employee',
      hooks: {
        beforeCreate: (user) => {
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync())
        },
        beforeUpdate: (user) => {
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync())
        },
      },
      instanceMethods: {
        validPassword: function (password) {
          return bcrypt.compareSync(password, this.password)
        },
      },
    }
  )
  return Employee
}
