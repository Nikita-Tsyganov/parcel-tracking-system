'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class ParcelEvent extends Model {
    static associate(models) {
      ParcelEvent.belongsTo(models.Parcel, {
        foreignKey: 'parcelId',
        as: 'parcel',
      })
      ParcelEvent.belongsTo(models.Status, {
        foreignKey: 'statusId',
        as: 'status',
      })
    }
  }
  ParcelEvent.init(
    {
      parcelId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Parcel',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      statusId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Status',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.city}, ${this.province}`
        },
        set(value) {
          throw new Error(
            `Cannot set the value of "location" to ${value} because it is a virtual field.`
          )
        },
      },
      datetime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'ParcelEvent',
      tableName: 'ParcelEvent',
    }
  )
  return ParcelEvent
}
