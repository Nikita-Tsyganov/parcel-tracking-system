const BaseController = require('./BaseController')
const { Status } = require('../db.js')

class StatusController extends BaseController {
  // Constructor
  constructor() {
    super(Status)
  }
}

module.exports = new StatusController()
