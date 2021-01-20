const BaseController = require('./BaseController')
const { Parcel, ParcelEvent, Status } = require('../db.js')

class ParcelController extends BaseController {
  // Constructor
  constructor() {
    super(Parcel, {
      find: {
        include: {
          model: ParcelEvent,
          as: 'events',
          include: {
            model: Status,
            as: 'status',
          },
        },
        order: [['id'], ['events', 'datetime', 'DESC']],
      },
    })
  }
}

module.exports = new ParcelController()
