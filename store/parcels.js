// import {
//   baseState,
//   baseGetters,
//   baseMutations,
//   baseActions,
// } from '../utils/store.js'

// export const state = baseState('parcels')

// export const getters = baseGetters('parcels')

// export const mutations = baseMutations('parcels')

// export const actions = baseActions('$Parcel')

export const state = () => ({
  parcels: [],
})

export const getters = {
  get: (state) => (id) => state.parcels.find((v) => v.id == id) || {},
}

export const mutations = {
  ALL: (state, records) => (state.parcels = records),
  CREATE: (state, record) => state.parcels.push(record),
  UPDATE: (state, id, updatedRecord) => {
    let recordToUpdate = state.parcels.find((v) => v.id == id)
    let index = state.parcels.indexOf(recordToUpdate)
    state.parcels.splice(index, 1, updatedRecord)
  },
  DELETE: (state, id) => {
    let records = state.parcels.filter((v) => v.id != id)
    state.parcels = records
  },
}

export const actions = {
  async all({ commit }) {
    let allRecords = await this.$Parcel.all()
    commit('ALL', allRecords)
    return allRecords
  },
  async find({ commit }, id) {
    let foundRecord = await this.$Parcel.find(id)
    commit('ALL', [foundRecord])
    return foundRecord
  },
  async create({ commit }, record) {
    let createdRecord = await this.$Parcel.create(record)
    commit('CREATE', createdRecord)
    return createdRecord
  },
  async update({ commit }, id, body) {
    let updatedRecord = await this.$Parcel.update(id, body)
    commit('UPDATE', id, updatedRecord)
    return updatedRecord
  },
  async delete({ commit }, id) {
    let deletedRecord = await this.$Parcel.delete(id)
    if (response.status == 200 || response.status == 204) {
      commit('DELETE', deletedRecord.id)
    }
  },
}
