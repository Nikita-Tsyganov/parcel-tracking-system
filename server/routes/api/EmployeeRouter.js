const BaseRouter = require('./BaseRouter')
const EmployeeController = require('../../controllers/EmployeeController.js')

class EmployeeRouter extends BaseRouter {
  // Constructor
  constructor() {
    super(EmployeeController)
  }
}

module.exports = new EmployeeRouter()
