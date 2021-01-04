const BaseController = require('./BaseController')
const { ParcelHistory, Status } = require('../db.js')

class ParcelHistoryController extends BaseController {
  // Constructor
  constructor() {
    super(ParcelHistory)

    // @desc Get All Parcels
    this.all = (req, res, next) => {
      super.all(req, res, next, {
        include: {
          model: Status,
          as: 'status',
        },
      })
    }
    // @desc Get A Single Parcel
    this.find = (req, res, next) => {
      super.find(req, res, next, {
        include: {
          model: Status,
          as: 'status',
        },
      })
    }
  }
}

module.exports = new ParcelHistoryController()
