class BaseAPI {
  // Constructor
  constructor($axios, model) {
    this.$axios = $axios
    this.model = model
  }

  // @desc Get All Records
  all() {
    return this.$axios.$get(`${this.model}`).then((records) => records)
  }
  // @desc Get A Single Record
  find(id) {
    return this.$axios.$get(`${this.model}/${id}`).then((record) => record)
  }
  // @desc Create A Record
  create(body) {
    return this.$axios.$post(`${this.model}`, body).then((record) => record)
  }
  // @desc Update A Record
  update(id, body) {
    return this.$axios
      .$patch(`${this.model}/${id}`, body)
      .then((record) => record)
  }
  // @desc Delete A Record
  delete(id) {
    return this.$axios.$delete(`${model}/${id}`).then((record) => record)
  }
}

export default BaseAPI
