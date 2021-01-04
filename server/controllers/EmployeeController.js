const BaseController = require('./BaseController')
const { Employee } = require('../db.js')

class EmployeeController extends BaseController {
  // Constructor
  constructor() {
    super(Employee)
  }
}

module.exports = new EmployeeController()
