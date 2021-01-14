import {
  baseState,
  baseGetters,
  baseMutations,
  baseActions,
} from '../utils/store.js'

export const state = baseState('parcels-histories')

export const getters = baseGetters('parcels-histories')

export const mutations = baseMutations('parcels-histories')

export const actions = baseActions('$ParcelHistory')
