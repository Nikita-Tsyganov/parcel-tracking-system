import {
  baseState,
  baseGetters,
  baseMutations,
  baseActions,
} from '../utils/store.js'

export const state = baseState('statuses')

export const getters = baseGetters('statuses')

export const mutations = baseMutations('statuses')

export const actions = baseActions('$Status')
