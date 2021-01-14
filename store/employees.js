import EmployeeAPI from '~/utils/api/EmployeeAPI.js'

// const employeeAPI = new EmployeeAPI(this.$axios)

export const state = () => ({
  employees: [],
})

export const getters = {
  get: (state) => (id) => {
    return state.employees.find((v) => v.id == id) || {}
  },
}

export const mutations = {
  ALL(state, records) {
    state.employees = records
  },
  CREATE(state, record) {
    state.employees.push(record)
  },
  UPDATE(state, updatedRecord) {
    let recordToUpdate = state.employees.find((v) => v.id == updatedRecord.id)
    let index = state.employees.indexOf(recordToUpdate)
    state.employees.splice(index, 1, updatedRecord)
  },
  DELETE(state, id) {
    let records = state.employees.filter((v) => v.id != id)
    state.employees = records
  },
}

export const actions = {
  async all({ commit }) {
    let allRecords = await employeeAPI.all()
    commit('ALL', allRecords)
  },
  async create({ commit }, record) {
    let createdRecord = await employeeAPI.create(record)
    commit('CREATE', createdRecord)
    return createdRecord
  },
  async update({ commit }, id, body) {
    let updatedRecord = await employeeAPI.update(id, body)
    commit('UPDATE', updatedRecord)
    return updatedRecord
  },
  async delete({ commit }, id) {
    let deletedRecord = await employeeAPI.delete(id)
    if (response.status == 200 || response.status == 204) {
      commit('DELETE', deletedRecord.id)
    }
  },
}
