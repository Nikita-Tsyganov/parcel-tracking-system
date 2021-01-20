'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    static associate(models) {
      Status.hasMany(models.ParcelEvent, {
        sourceKey: 'id',
        foreignKey: 'statusId',
        as: 'parcelsEvents',
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
