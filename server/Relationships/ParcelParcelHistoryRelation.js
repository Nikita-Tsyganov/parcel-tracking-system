
const ParcelHistory = sequelize.define('../models/ParcelHistory.js');
const Parcel = sequelize.define('../models/Parcel.js');

Parcel.hasMany(ParcelHistory, {
    foreignKey: 'parcel_id'
  });
  ParcelHistory.belongsTo(Parcel);