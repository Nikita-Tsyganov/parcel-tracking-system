import BaseAPI from './BaseAPI.js'

class EmployeeAPI extends BaseAPI {
  // Constructor
  constructor($axios) {
    super($axios, 'employees')
  }
}

export default EmployeeAPI
