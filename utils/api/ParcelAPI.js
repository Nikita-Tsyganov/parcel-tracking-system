import BaseAPI from './BaseAPI.js'

class ParcelAPI extends BaseAPI {
  // Constructor
  constructor($axios) {
    super($axios, 'parcels')
  }
}

export default ParcelAPI
