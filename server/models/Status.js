'use strict'

const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    static associate(models) {
      Status.hasMany(models.ParcelHistory, {
        sourceKey: 'id',
        foreignKey: 'statusId',
        as: 'parcelHistories',
      })
    }
  }
  Status.init(
    {
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'Status',
      tableName: 'Status',
    }
  )
  return Status
}
