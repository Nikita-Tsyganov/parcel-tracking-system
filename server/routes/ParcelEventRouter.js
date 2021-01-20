const BaseRouter = require('./BaseRouter')
const ParcelEventController = require('../controllers/ParcelEventController.js')

class ParcelEventRouter extends BaseRouter {
  // Constructor
  constructor() {
    super(ParcelEventController)
  }
}

module.exports = new ParcelEventRouter()
