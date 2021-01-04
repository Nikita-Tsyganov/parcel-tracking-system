const BaseRouter = require('./BaseRouter')
const ParcelHistoryController = require('../../controllers/ParcelHistoryController.js')

class ParcelHistoryRouter extends BaseRouter {
  // Constructor
  constructor() {
    super(ParcelHistoryController)
  }
}

module.exports = new ParcelHistoryRouter()
