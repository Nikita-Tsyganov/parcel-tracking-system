'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class ParcelHistory extends Model {
    static associate(models) {
      ParcelHistory.belongsTo(models.Parcel, {
        foreignKey: 'parcelId',
        as: 'parcel',
      })
      ParcelHistory.belongsTo(models.Status, {
        foreignKey: 'statusId',
        as: 'status',
      })
    }
  }
  ParcelHistory.init(
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
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      datetime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ParcelHistory',
      tableName: 'ParcelHistory',
    }
  )
  return ParcelHistory
}
