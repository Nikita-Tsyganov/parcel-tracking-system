// import {
//   baseState,
//   baseGetters,
//   baseMutations,
//   baseActions,
// } from '../utils/store.js'

// export const state = baseState('employees')

// export const getters = baseGetters('employees')

// export const mutations = baseMutations('employees')

// export const actions = baseActions('$Employee')

export const state = () => ({
  employees: [],
})

export const getters = {
  get: (state) => (id) => state.employees.find((v) => v.id == id) || {},
}

export const mutations = {
  ALL: (state, records) => (state.employees = records),
  CREATE: (state, record) => state.employees.push(record),
  UPDATE: (state, id, updatedRecord) => {
    let recordToUpdate = state.employees.find((v) => v.id == id)
    let index = state.employees.indexOf(recordToUpdate)
    state.employees.splice(index, 1, updatedRecord)
  },
  DELETE: (state, id) => {
    let records = state.employees.filter((v) => v.id != id)
    state.employees = records
  },
}

export const actions = {
  async all({ commit }) {
    let allRecords = await this.$Employee.all()
    commit('ALL', allRecords)
    return allRecords
  },
  async find({ commit }, id) {
    let foundRecord = await this.$Employee.find(id)
    commit('ALL', [foundRecord])
    return foundRecord
  },
  async create({ commit }, record) {
    let createdRecord = await this.$Employee.create(record)
    commit('CREATE', createdRecord)
    return createdRecord
  },
  async update({ commit }, id, body) {
    let updatedRecord = await this.$Employee.update(id, body)
    commit('UPDATE', id, updatedRecord)
    return updatedRecord
  },
  async delete({ commit }, id) {
    let deletedRecord = await this.$Employee.delete(id)
    if (response.status == 200 || response.status == 204) {
      commit('DELETE', deletedRecord.id)
    }
  },
}
