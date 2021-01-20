'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Parcel extends Model {
    static associate(models) {
      Parcel.belongsTo(models.Employee, {
        foreignKey: 'employeeId',
        as: 'employee',
      })
      Parcel.hasMany(models.ParcelEvent, {
        sourceKey: 'id',
        foreignKey: 'parcelId',
        as: 'events',
      })
    }
  }
  Parcel.init(
    {
      employeeId: {
        type: DataTypes.STRING,
        references: {
          model: 'Employee',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      fromName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fromAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fromCity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fromProvince: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fromPostalCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fromPhone: {
        type: DataTypes.STRING,
      },
      origin: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.fromCity}, ${this.fromProvince}`
        },
        set(value) {
          throw new Error(
            `Cannot set the value of "origin" to ${value} because it is a virtual field.`
          )
        },
      },
      toName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      toAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      toCity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      toProvince: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      toPostalCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      toPhone: {
        type: DataTypes.STRING,
      },
      destination: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.toCity}, ${this.toProvince}`
        },
        set(value) {
          throw new Error(
            `Cannot set the value of "destination" to ${value} because it is a virtual field.`
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
