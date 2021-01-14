export const baseState = (stateModel) => () => ({}[stateModel] = [])

export const baseGetters = (stateModel) => {
  return {
    get: (state) => (id) => state[stateModel].find((v) => v.id == id) || {},
  }
}

export const baseMutations = (stateModel) => {
  return {
    ALL: (state, records) => (state[stateModel] = records),
    CREATE: (state, record) => state[stateModel].push(record),
    UPDATE: (state, updatedRecord) => {
      let recordToUpdate = state[stateModel].find(
        (v) => v.id == updatedRecord.id
      )
      let index = state[stateModel].indexOf(recordToUpdate)
      state[stateModel].splice(index, 1, updatedRecord)
    },
    DELETE: (state, id) => {
      let records = state[stateModel].filter((v) => v.id != id)
      state[stateModel] = records
    },
  }
}

export const baseActions = (model) => {
  return {
    async all({ commit }) {
      let allRecords = await this[model].all()
      commit('ALL', allRecords)
    },
    async find({ commit }, id) {
      let foundRecord = await this[model].find(id)
      return foundRecord
    },
    async create({ commit }, record) {
      let createdRecord = await this[model].create(record)
      commit('CREATE', createdRecord)
      return createdRecord
    },
    async update({ commit }, id, body) {
      let updatedRecord = await this[model].update(id, body)
      commit('UPDATE', updatedRecord)
      return updatedRecord
    },
    async delete({ commit }, id) {
      let deletedRecord = await this[model].delete(id)
      if (response.status == 200 || response.status == 204) {
        commit('DELETE', deletedRecord.id)
      }
    },
  }
}
