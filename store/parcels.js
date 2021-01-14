import ParcelAPI from '~/utils/api/ParcelAPI.js'

// const parcelAPI = new ParcelAPI(this.$axios)

export const state = () => ({
  parcels: [],
})

export const getters = {
  get: (state) => (id) => {
    return state.parcels.find((v) => v.id == id) || {}
  },
}

export const mutations = {
  ALL(state, records) {
    state.parcels = records
  },
  CREATE(state, record) {
    state.parcels.push(record)
  },
  UPDATE(state, updatedRecord) {
    let recordToUpdate = state.parcels.find((v) => v.id == updatedRecord.id)
    let index = state.parcels.indexOf(recordToUpdate)
    state.parcels.splice(index, 1, updatedRecord)
  },
  DELETE(state, id) {
    let records = state.parcels.filter((v) => v.id != id)
    state.parcels = records
  },
}

export const actions = {
  async all({ commit }) {
    let allRecords = await parcelAPI.all()
    commit('ALL', allRecords)
  },
  async find({ commit }, id) {
    let foundRecord = await parcelAPI.find(id)
    return foundRecord
  },
  async create({ commit }, record) {
    let createdRecord = await parcelAPI.create(record)
    commit('CREATE', createdRecord)
    return createdRecord
  },
  async update({ commit }, id, body) {
    let updatedRecord = await parcelAPI.update(id, body)
    commit('UPDATE', updatedRecord)
    return updatedRecord
  },
  async delete({ commit }, id) {
    let deletedRecord = await parcelAPI.delete(id)
    if (response.status == 200 || response.status == 204) {
      commit('DELETE', deletedRecord.id)
    }
  },
}