const BaseController = require('./BaseController')
const { Parcel, ParcelHistory, Status } = require('../db.js')

class ParcelController extends BaseController {
  // Constructor
  constructor() {
    super(Parcel)

    // @desc Get All Parcels
    this.all = (req, res, next) => {
      super.all(req, res, next, {
        include: {
          model: ParcelHistory,
          as: 'parcelHistories',
          include: {
            model: Status,
            as: 'status',
          },
        },
        order: [['id'], ['parcelHistories', 'datetime', 'DESC']],
      })
    }
    // @desc Get A Single Parcel
    this.find = (req, res, next) => {
      super.find(req, res, next, {
        include: {
          model: ParcelHistory,
          as: 'parcelHistories',
          include: {
            model: Status,
            as: 'status',
          },
        },
        order: [['id'], ['parcelHistories', 'datetime', 'DESC']],
      })
    }
  }
}

module.exports = new ParcelController()
