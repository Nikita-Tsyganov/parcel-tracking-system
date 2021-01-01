const Parcel = require('../models/Parcel.js')

const ParcelController = {
  // @desc Get All Parcels
  all: (req, res) => {
    Parcel.findAll().then((parcels) => res.json(parcels))
  },

  // @desc Get A Single Parcel
  find: (req, res) => {
    Parcel.findByPk(req.params.id).then((parcel) => res.json(parcel))
  },

  // @desc Create A Parcel
  create: (req, res) => {
    Parcel.create({
      trackingNumber: req.body.trackingNumber,
      startLocation: req.body.startLocation,
      desLocation: req.body.desLocation,
      customerName: req.body.customerName,
    }).then((parcel) => res.json(parcel))
  },

  // @desc Update A Parcel
  update: (req, res) => {
    Parcel.update(
      {
        trackingNumber: req.body.trackingNumber,
        startLocation: req.body.startLocation,
        desLocation: req.body.desLocation,
        customerName: req.body.customerName,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then(() => Parcel.findByPk(req.params.id).then((parcel) => res.json(parcel)))
  },

  // @desc Delete A Parcel
  delete: (req, res) => {
    Parcel.findByPk(req.params.id).then((parcel) =>
      Parcel.destroy({ where: { id: req.params.id } }).then(() =>
        res.json(parcel)
      )
    )
  },
}

module.exports = ParcelController
