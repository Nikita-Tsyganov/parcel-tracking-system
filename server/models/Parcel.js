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
        isIn: [
          [
            'AB',
            'BC',
            'MB',
            'NB',
            'NL',
            'NT',
            'NS',
            'NU',
            'ON',
            'PE',
            'QC',
            'SK',
            'YT',
          ],
        ],
      },
      fromPostalCode: {
        type: DataTypes.STRING,
        allowNull: false,
        is: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] \d[ABCEGHJKLMNPRSTVWXYZ]\d$/,
      },
      fromPhone: {
        type: DataTypes.STRING,
        isMobilePhone: ['ca-AD'],
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
        isIn: [
          [
            'AB',
            'BC',
            'MB',
            'NB',
            'NL',
            'NT',
            'NS',
            'NU',
            'ON',
            'PE',
            'QC',
            'SK',
            'YT',
          ],
        ],
      },
      toPostalCode: {
        type: DataTypes.STRING,
        allowNull: false,
        is: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] \d[ABCEGHJKLMNPRSTVWXYZ]\d$/,
      },
      toPhone: {
        type: DataTypes.STRING,
        isMobilePhone: ['ca-AD'],
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
