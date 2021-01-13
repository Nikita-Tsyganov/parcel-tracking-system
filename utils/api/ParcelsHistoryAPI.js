import BaseAPI from './BaseAPI.js'

class ParcelsHistoryAPI extends BaseAPI {
  // Constructor
  constructor($axios) {
    super($axios, 'parcels-histories')
  }
}

export default ParcelsHistoryAPI
