import {
  baseState,
  baseGetters,
  baseMutations,
  baseActions,
} from '../utils/store.js'

export const state = baseState('employees')

export const getters = baseGetters('employees')

export const mutations = baseMutations('employees')

export const actions = baseActions('$Employee')
