'use strict'

const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Parcel extends Model {
    static associate(models) {
      Parcel.belongsTo(models.Employee, {
        foreignKey: 'employeeId',
        as: 'employee',
      })
      Parcel.hasMany(models.ParcelHistory, {
        sourceKey: 'id',
        foreignKey: 'parcelId',
        as: 'parcelHistories',
      })
    }
  }
  Parcel.init(
    {
      employeeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Employee',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      customerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      origin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      destination: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastUpdate: {
        type: DataTypes.VIRTUAL,
        get() {
          return this.parcelHistories.sort((a, b) => {
            return new Date(b.datetime) - new Date(a.datetime)
          })[0]
        },
        set(value) {
          throw new Error(
            `Cannot set the value of "lastUpdate" to ${value} because it is a virtual field.`
          )
        },
      },
      location: {
        type: DataTypes.VIRTUAL,
        get() {
          return this.lastUpdate.location
        },
        set(value) {
          throw new Error(
            `Cannot set the value of "location" to ${value} because it is a virtual field.`
          )
        },
      },
      status: {
        type: DataTypes.VIRTUAL,
        get() {
          return this.lastUpdate.status.status
        },
        set(value) {
          throw new Error(
            `Cannot set the value of "status" to ${value} because it is a virtual field.`
          )
        },
      },
    },
    {
      sequelize,
      modelName: 'Parcel',
      tableName: 'Parcel',
    }
  )
  return Parcel
}
