

const ParcelHistory = sequelize.define('../models/ParcelHistory.js');
const Status = sequelize.define('../models/Status.js');

Parcel.hasMany(ParcelHistory, {
    foreignKey: 'status_id'
  });
  ParcelHistory.belongsTo(Status);