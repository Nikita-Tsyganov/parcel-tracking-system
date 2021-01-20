const BaseController = require('./BaseController')
const { ParcelEvent, Status } = require('../db.js')

class ParcelEventController extends BaseController {
  // Constructor
  constructor() {
    super(ParcelEvent)

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

module.exports = new ParcelEventController()
