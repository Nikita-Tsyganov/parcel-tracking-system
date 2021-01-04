const BaseRouter = require('./BaseRouter')
const ParcelController = require('../../controllers/ParcelController.js')

class ParcelRouter extends BaseRouter {
  // Constructor
  constructor() {
    super(ParcelController)
  }
}

module.exports = new ParcelRouter()
