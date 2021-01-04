const BaseRouter = require('./BaseRouter')
const StatusController = require('../../controllers/StatusController.js')

class StatusRouter extends BaseRouter {
  // Constructor
  constructor() {
    super(StatusController)
  }
}

module.exports = new StatusRouter()
