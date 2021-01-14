export default ($axios) => (model) => ({
  // @desc Get All Records
  all() {
    return $axios.$get(`${model}`).then((records) => records)
  },
  // @desc Get A Single Record
  find(id) {
    return $axios.$get(`${model}/${id}`).then((record) => record)
  },
  // @desc Create A Record
  create(body) {
    return $axios.$post(`${model}`, body).then((record) => record)
  },
  // @desc Update A Record
  update(id, body) {
    return $axios.$patch(`${model}/${id}`, body).then((record) => record)
  },
  // @desc Delete A Record
  delete(id) {
    return $axios.$delete(`${model}/${id}`).then((record) => record)
  },
})
