const ParcelHistory = require('../models/ParcelHistory.js')

const ParcelHistoryController = {
  // @desc Get All ParcelHistory
  
  all: (req, res) => {
    ParcelHistory.findAll().then((parcelhistorys) => res.json(parcelhistorys))
  },

  
  // @desc Get A Single ParcelHistory
  find: (req, res) => {
    ParcelHistory.findByPk(req.params.id).then((parcelhistory) => res.json(parcelhistory))
  },

  // @desc Create A ParcelHistory
  create: (req, res) => {
    ParcelHistory.create({
          parcel_id: req.body.parcel_id,
          status_id: req.body.status_id,
          location: req.body.location,
          datetime: req.body.datetime,
    }).then((parcelhistory) => res.json(parcelhistory))
  },

  // @desc Update A ParcelHistory
  update: (req, res) => {
    ParcelHistory.update(
      {
          parcel_id: req.body.parcel_id,
          status_id: req.body.status_id,
          location: req.body.location,
          datetime: req.body.datetime,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then(() => ParcelHistory.findByPk(req.params.id).then((parcelhistory) => res.json(parcelhistory)))
  },

  // @desc Delete A Parcel
  delete: (req, res) => {
    ParcelHistory.findByPk(req.params.id).then((parcelhistory) =>
    ParcelHistory.destroy({ where: { id: req.params.id } }).then(() =>
        res.json(parcelhistory)
      )
    )
  },
}

module.exports = ParcelHistoryController
