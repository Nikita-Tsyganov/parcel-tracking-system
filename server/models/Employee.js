'use strict'

const { Model } = require('sequelize')
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
    }
  )
  return Employee
}
