import BaseAPI from './BaseAPI.js'

class StatusAPI extends BaseAPI {
  // Constructor
  constructor($axios) {
    super($axios, 'statuses')
  }
}

export default StatusAPI
